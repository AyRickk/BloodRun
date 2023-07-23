import { NextApiRequest, NextApiResponse } from 'next';
import scrapeRaceData from '../../../../scraper';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const data = await scrapeRaceData('https://sportips.fr/plateformeResultats/#/epreuve?id=787&p=Course%20handi-fauteuil%2014.4%20km');
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: (error as Error).message });
    }
}
