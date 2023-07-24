import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'
import isEmail from 'validator/lib/isEmail';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { name, email, subject, message } = req.body
        if (name === '' || email === '' || subject === '' || message === '' || !isEmail(email)) {
            res.status(422).json({ message: 'Invalid input.' })
            return
        }

        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD,
            },
        })

        try {
            // Email to be sent to the person who filled out the form
            await transporter.sendMail({
                from: '"Blood Run" <' + process.env.EMAIL + '>',
                to: email,
                subject: 'Confirmation de l\'envoi de votre message',
                text: `Votre message a bien été envoyé ! Nous vous répondrons dans les plus brefs délais. \n
                        Détails de votre message : \n
                        Nom: ${name} \n
                        Email: ${email} \n
                        Sujet: ${subject} \n
                        Message: ${message}`,
            })

            // Email to be sent to the person who is supposed to receive the message
            await transporter.sendMail({
                from: '"Blood Run" <' + process.env.EMAIL + '>',
                to: process.env.RECEIVER_EMAIL, // assuming receiver's email is stored in env variable
                subject: `Nouveau message de ${name}`,
                text: `Vous avez reçu un nouveau message. \n
                        Détails du message : \n
                        Nom: ${name} \n
                        Email: ${email} \n
                        Sujet: ${subject} \n
                        Message: ${message}`,
            })

            res.status(200).json({ message: 'Email envoyé !' })
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Une erreur s'est produite lors de l'envoi de l'e-mail." })
        }
    } else {
        res.setHeader('Allow', ['POST'])
        res.status(405).end(`Method ${req.method} Not Allowed`)
    }
}
