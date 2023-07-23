import { NextApiRequest, NextApiResponse } from 'next';
import fetch from 'node-fetch';
import * as fs from 'fs';
import pdfParse from 'pdf-parse';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        // Download the PDF
        const response = await fetch('https://sportips.fr/resultats/2017BLOODCOURSE.pdf');
        const buffer = await response.buffer();
        fs.writeFileSync('/tmp/race-results.pdf', buffer);

        // Read the PDF
        const dataBuffer = fs.readFileSync('/tmp/race-results.pdf');

        // Parse the PDF
        const data = await pdfParse(dataBuffer);

        // Extract the data from the text
        const text = data.text;
        const lines = text.split('\n');
        const startIndex = lines.findIndex(line => line.startsWith('Clt'));
        const endIndex = lines.findIndex(line => line.startsWith('I:'));
        const extractedData = lines.slice(startIndex + 1, endIndex).map(line => {
            if (!/^\d/.test(line)) {
                return null;
            }
            if (line.includes('14:36')) {
                return null;
            }

            const parts = line.split(/  +/ );

            let rank = parts[0]
            let name = parts[1];
            let bib = parts[2];
            let categoryRank = parts[4];
            let genderRank = parts[5];
            let time = parts[6];
            let speed = parts[7];
            let club = parts[8];

            // Vérifier si le rang ne contient que des chiffres
            if (!/^\d+$/.test(rank)) {
                //2 premiers caracteres
                rank = parts[0].slice(0, 2);
                //reste mais en enlevant les 5 derniers caracteres
                name = parts[0].slice(2, -5);
                bib = parts[0].slice(-5);
                categoryRank = parts[2];
                genderRank = parts[3];
                time = parts[4];
                speed = parts[5];
                club = parts[6];

            }

            //si name finit par un chiffre
            if (/\d/.test(name.slice(-1))) {
                bib = name.slice(-5);
                name = name.slice(0, -5);

                categoryRank = parts[3];
                genderRank = parts[4];
                time = parts[5];
                speed = parts[6];
                club = parts[7];

            }

            //si time fait plus de 8 caracteres
            if (time && time.length > 8) {
                // speed est les 5 d'apres
                speed = time.slice(9, 14);
                // club est le reste
                club = time.slice(15);
                // time est les 8 premiers caracteres
                time = time.slice(0, 8);

            }



            return {
                rank: rank,
                name: name,
                bib: bib,
                categoryRank: categoryRank,
                genderRank: genderRank,
                time: time,
                speed: speed,
                club: club,
            };
        }).filter(item => item);


        res.status(200).json(extractedData);
    } catch (error) {
        res.status(500).json({ message: (error as Error).message });
    }
}
