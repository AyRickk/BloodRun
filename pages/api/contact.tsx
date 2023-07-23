import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'
import isEmail from 'validator/lib/isEmail';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        // Vérification de la validité des données entrantes
        const { name, email, subject, message } = req.body
        if (
            name === '' ||
            email === '' ||
            subject === '' ||
            message === '' ||
            !isEmail(email)
        ) {
            res.status(422).json({ message: 'Invalid input.' })
            return
        }

        // Envoi de l'email
        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: 'rykooprods@gmail.com',
                pass: 'tnztxsrvuktfwfbe',
            },
        })

        await transporter.sendMail({
            from: 'rykooprods@gmail.com',
            to: email,
            subject: subject,
            text: `Votre message a bien été envoyé ! Nous vous répondrons dans les plus brefs délais. Votre message: ${message}`,
        })

        res.status(200).json({ message: 'Email envoyé !' })
    } else {
        res.setHeader('Allow', ['POST'])
        res.status(405).end(`Method ${req.method} Not Allowed`)
    }
}



