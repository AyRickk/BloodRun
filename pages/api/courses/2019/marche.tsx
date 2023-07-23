import { NextApiRequest, NextApiResponse } from 'next';
import scrapeRaceData from '../../../../scraper';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const data = await scrapeRaceData('https://sportips.fr/plateformeResultats/#/epreuve?id=787&p=Marche%207.2%20km');
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: (error as Error).message });
    }
}
