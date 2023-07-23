import Head from 'next/head';
import React, {useEffect, FormEvent} from 'react';
import {useState} from 'react';
import isEmail from 'validator/lib/isEmail';
import {useRouter} from 'next/router';
import '../styles/contact.css';
import '../styles/navbar.css';

const ContactPage: React.FC = () => {
    const {query} = useRouter();
    const [showMenu, setShowMenu] = useState(false);
    const [showIcon, setShowIcon] = useState(true);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
        setShowIcon(!showIcon);
        if (!showMenu) {
            document.body.classList.add('noScroll');
        } else {
            document.body.classList.remove('noScroll');
        }
    };

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
            <Head>
                <title>Blood Run</title>
                <link rel="icon" type="image/png" href="/logo-ddn-1.png" />
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link href="https://cdn.jsdelivr.net/npm/remixicon@3.2.0/fonts/remixicon.css" rel="stylesheet"/>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
                      integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
                      crossOrigin="anonymous" referrerPolicy="no-referrer"/>
            </Head>
            <header className="header">
                <nav className="nav">
                    <div className="nav__data">
                        <a href="" className="logo">
                            <img src="logo-ddn-1.png"/>
                            <div className="logo-text">
                                Donneurs de sang<br/>Vallée du gapeau
                            </div>
                        </a>

                        <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
                            <i className={`ri-menu-line nav__burger ${showIcon ? 'show-icon' : 'hide-icon'}`}></i>
                            <i className={`ri-close-line nav__close ${showIcon ? 'hide-icon' : 'show-icon'}`}></i>
                        </div>
                    </div>

                    <div className={`nav__menu ${showMenu ? 'show-menu' : ''}`} id="nav-menu">
                        <ul className="nav__list">
                            <li className="nav__link"><a href="/"><span>Accueil</span></a></li>
                            <li className="nav__link"><a href="/about"><span>A propos</span></a></li>
                            <li className="nav__link"><a href="/results"><span>Résultats</span></a></li>
                            <li className="nav__link"><a href="/contact"><span>Contact</span></a></li>

                            {/* ... the rest of your links and dropdowns ... */}
                        </ul>
                    </div>
                </nav>
            </header>
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
