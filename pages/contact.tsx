import React, {FormEvent, useEffect} from 'react';
import {useState} from 'react';
import isEmail from 'validator/lib/isEmail';
import {LineWave} from 'react-loader-spinner'
import '../styles/contact.css';

import Navbar from './components/Sections/Navbar';
import CustomHead from './components/CustomHead';

const ContactPage: React.FC = () => {
    const [hydrated, setHydrated] = useState(false);
    const [loading, setLoading] = useState(false); // new state for loading

    useEffect(() => {
        setHydrated(true);
    }, []);

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

        setLoading(true); // start loading

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
                setLoading(false); // end loading
            })
            .catch((error) => {
                console.error('Error:', error);
                setLoading(false); // end loading in case of error
            });
    }


    return (<>
            <div className="contact-body">
                <CustomHead title="The Blood Run | Nous contacter "/>
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
                                francois.roche17@orange.fr
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
                                @thebloodrun_83
                            </div>
                        </div>
                    </div>

                    {successMessage && <p className="success-message">{successMessage} </p>}
                    {hydrated && (<form onSubmit={handleSubmit} className="contact-form">
                        <input type="text" className="nameInput" placeholder="Name" value={name}
                               onChange={e => setName(e.target.value)}/>
                        <input type="email" className="emailInput" placeholder="Email" value={email}
                               onChange={e => setEmail(e.target.value)}/>
                        <input type="text" className="subjectInput" placeholder="Subject" value={subject}
                               onChange={e => setSubject(e.target.value)}/>
                        <textarea className="msgArea" placeholder="Your Message" value={message}
                                  onChange={e => setMessage(e.target.value)}></textarea>
                        <input type="submit" className="sendbtn" value="Send Message"/>
                        {loading && (<div className="overlay">
                                <LineWave
                                    height="100"
                                    width="100"
                                    color="#ff0000"
                                    ariaLabel="line-wave"
                                    wrapperStyle={{}}
                                    wrapperClass=""
                                    visible={true}
                                    firstLineColor=""
                                    middleLineColor=""
                                    lastLineColor=""
                                />
                            </div>)}

                    </form>)}
                </div>
            </div>
        </>);
}

export default ContactPage;
