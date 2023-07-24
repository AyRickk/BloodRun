
import React, {useEffect, FormEvent} from 'react';
import {useState} from 'react';
import isEmail from 'validator/lib/isEmail';
import {useRouter} from 'next/router';
import '../styles/contact.css';
import '../styles/navbar.css';

import Navbar from './components/Navbar';
import CustomHead from './components/CustomHead';

const ContactPage: React.FC = () => {
    const {query} = useRouter();
    const [showMenu, setShowMenu] = useState(false);
    const [showIcon, setShowIcon] = useState(true);


    useEffect(() => {
        if (query.scrollTo) {
            const element = document.querySelector(query.scrollTo as string) as HTMLElement;
            window.scrollTo({
                top: element?.offsetTop ?? 0,
                behavior: 'smooth'
            });
        }
    }, [query]);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [successMessage, setSuccessMessage] = React.useState("");



    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();

        if (!name || !isEmail(email) || !subject || !message) {
            setSuccessMessage("Un champ est vide ou l'adresse mail est invalide");
            return;
        }


        // Send a POST request to the API endpoint
        fetch('/api/contact', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({name, email, subject, message}),
        })
            .then(response => response.json())
            .then(data => {
                if (data.message) {
                    // Affiche le message de succès à l'utilisateur
                    setSuccessMessage(data.message);
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });



    }



    return (
        <>
            <CustomHead title="Contact"/>
            <Navbar/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>

            <div className="contact-page">
                <h1 className="contact-page-title">
                    <div className="back-title">Contact</div>
                    <div className="front-title">Nous <span>contacter</span></div>
                </h1>

                <div className="contact-boxes">
                    <div className="contact-box">
                        <h2 className="box-title"><i className="box-icon fas fa-location-pin"></i> Localisation</h2>
                        <div className="box-content">
                            Solliès-pont <br/>
                            83210
                        </div>
                    </div>
                    <div className="contact-box">
                        <h2 className="box-title"><i className="box-icon fas fa-envelope"></i> Email</h2>
                        <div className="box-content">
                            donneur2sang.lvdg@gmail.com
                        </div>
                    </div>
                    <div className="contact-box">
                        <h2 className="box-title"><i className="box-icon fa-brands fa-facebook-f"></i> Facebook</h2>
                        <div className="box-content">
                            Association Donneurs de Sang <br/>
                            Vallée du Gapeau
                        </div>
                    </div>
                    <div className="contact-box">
                        <h2 className="box-title"><i className="box-icon fa-brands fa-instagram"></i> Instagram</h2>
                        <div className="box-content">
                            @donneurdesang_lvdg83210
                        </div>
                    </div>
                </div>

                {successMessage && <p className="success-message">{successMessage}</p>}
                <form onSubmit={handleSubmit} className="contact-form">
                    <input type="text" className="nameInput" placeholder="Name" value={name}
                           onChange={e => setName(e.target.value)}/>
                    <input type="email" className="emailInput" placeholder="Email" value={email}
                           onChange={e => setEmail(e.target.value)}/>
                    <input type="text" className="subjectInput" placeholder="Subject" value={subject}
                           onChange={e => setSubject(e.target.value)}/>
                    <textarea className="msgArea" placeholder="Your Message" value={message}
                              onChange={e => setMessage(e.target.value)}></textarea>
                    <input type="submit" className="sendbtn" value="Send Message"/>
                </form>
            </div>
        </>
    );
}

export default ContactPage;
