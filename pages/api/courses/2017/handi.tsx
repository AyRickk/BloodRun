import { NextApiRequest, NextApiResponse } from 'next';
import fetch from 'node-fetch';
import * as fs from 'fs';
import pdfParse from 'pdf-parse';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        // Download the PDF
        const response = await fetch('https://sportips.fr/resultats/2017BLOODHANDI.pdf');
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
            const parts = line.split(/  +/ );

            const lastCharacter = parts[1].slice(-1);
            const isLastCharacterDigit = /\d/.test(lastCharacter);

            let rank = parts[0];
            let name = parts[1];
            let bib = parts[2];
            let categoryRank = parts[4];
            let genderRank = parts[5];
            let time = parts[6];
            let speed = parts[7];
            let club = parts[8];

            // Check if the last character is a digit
            if (isLastCharacterDigit) {
                name = parts[1].slice(0, -5);
                bib = parts[1].slice(-5);
                categoryRank = parts[3];
                genderRank = parts[4];
                time = parts[5];
                speed = parts[6];
                club = parts[7];
            }

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

            //verifier si le nom contient un chiffre
            if (/\d/.test(name)) {
                //retirer 2 caracteres avant le 1er chiifre
                name = parts[1].slice(0, -10);
                bib = parts[1].slice(-10, -5);
                categoryRank = parts[1].slice(-5);
                genderRank = parts[2];
                time = parts[3];
                speed = parts[4];
                club = parts[5];
            }

            //verifier si le bib FINIT et seulement finit par une lettre

            if (/[a-zA-Z]$/.test(bib)) {
                //enlever les 5 derniers caracteres du bib
                bib = parts[2].slice(0, -5);
                categoryRank = parts[2].slice(-5);
                genderRank = parts[3];
                time = parts[4];
                speed = parts[5];
                club = parts[6];

            }

            //verifier si le time contient plus de 8 caracteres
            if (time.length > 8) {
                //prendre que les 8 premiers caracteres
                time = parts[5].slice(0, 8);
                speed = parts[5].slice(9, 13);
                club = parts[5].slice(14);
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
        });

        res.status(200).json(extractedData);
    } catch (error) {
        res.status(500).json({ message: (error as Error).message });
    }
}
