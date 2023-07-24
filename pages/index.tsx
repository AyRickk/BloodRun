import '../styles/home.css';
import React from "react";

import Navbar from './components/Navbar';
import CustomHead from './components/CustomHead';
import Chevron from "./components/Chevron";
import Footer from "./components/Footer";

const HomePage: React.FC = () => {

    return (
        <>


            <CustomHead title="Accueil | Blood Run"/>
            <Navbar/>
            <div className="home-page">
                <div className="hero">
                    <div className="hero-image">
                        <img src="/bghero.jpg"/>
                    </div>

                </div>


                <div className="H1-preset">
                    <div className="H1-preset-text">
                        <img className="brlogo" src="logoBloodRun.png"/>


                        <div className="paragraph">
                            La course annuelle pour promouvoir le don du sang.
                            <br/>
                            Prochaine édition le 03 septembre 2023 !
                        </div>
                    </div>

                    <a href="/event" className="button">
                        <div className="button-text">En savoir plus</div>

                        <Chevron/>
                    </a>
                </div>


            </div>

            <div className="icon-features">
                <div className="title">3 courses<br/>différentes</div>

                <div className="handi">
                    <div className="wheelchair">
                        <img src="/wheelchairIcon.png"/>
                    </div>

                    <div className="text">
                        <div className="name">Handi</div>

                        <div className="info">14.4 km</div>
                    </div>
                </div>

                <div className="running">
                    <img className="runner" src="/runningIcon.png"/>

                    <div className="text">
                        <div className="name">Course</div>

                        <div className="info">7.2 km</div>
                    </div>
                </div>

                <div className="walk">
                    <img className="walker" src="/walkingIcon.png"/>

                    <div className="text">
                        <div className="name">Marche</div>

                        <div className="info">7.2 KM</div>
                    </div>
                </div>
            </div>

            <div className="media-feature" id="media-feature-1">

                <img className="image" src="/winimg.png"/>


                <div className="H2-preset">
                    <div className="H2-preset-text">
                        <div className="header-group">
                            <div className="overline">3 septembre 2023</div>

                            <div className="headline">5ème édition</div>
                        </div>

                        <div className="paragraph">
                            La grande course de la rentrée revient avec l'ambition de
                            rassembler le plus grand monde possible. <br/>Cette année, nous
                            espérons accueillir des malvoyants qui courent en binôme avec leur
                            guide !
                        </div>
                    </div>

                    <a href="https://sportips.fr/BLOOD23/" className="button">
                        <div className="button-text">s’inscrire</div>

                        <Chevron/>
                    </a>
                </div>
            </div>

            <div className="media-feature" id="media-feature-2">
                {/*<div className="H2-preset">*/}
                {/*    <div className="H2-preset-text">*/}
                {/*        <div className="header-group">*/}
                {/*            <div className="overline">blood run 2022</div>*/}

                {/*            <div className="headline">quelques chiffres</div>*/}
                {/*        </div>*/}
                {/*    </div>*/}

                {/*    <div className="check-list">*/}
                {/*        <div className="check">*/}
                {/*            <svg*/}
                {/*                className="frame"*/}
                {/*                width="20"*/}
                {/*                height="20"*/}
                {/*                viewBox="0 0 20 20"*/}
                {/*                fill="none"*/}
                {/*                xmlns="http://www.w3.org/2000/svg"*/}
                {/*            >*/}
                {/*                <path*/}
                {/*                    d="M0 9.60164L1.315 8.24664L7.76 12.0958L18.8725 1.65747L20 2.7858L8.33333 18.3241L0 9.60164Z"*/}
                {/*                    fill="#121212"*/}
                {/*                />*/}
                {/*            </svg>*/}

                {/*            <div className="check-text">180 participants</div>*/}
                {/*        </div>*/}

                {/*        <div className="check">*/}
                {/*            <svg*/}
                {/*                className="frame"*/}
                {/*                width="20"*/}
                {/*                height="20"*/}
                {/*                viewBox="0 0 20 20"*/}
                {/*                fill="none"*/}
                {/*                xmlns="http://www.w3.org/2000/svg"*/}
                {/*            >*/}
                {/*                <path*/}
                {/*                    d="M0 9.60164L1.315 8.24664L7.76 12.0958L18.8725 1.65747L20 2.7858L8.33333 18.3241L0 9.60164Z"*/}
                {/*                    fill="#121212"*/}
                {/*                />*/}
                {/*            </svg>*/}

                {/*            <div className="check-text">7 handi fauteuils</div>*/}
                {/*        </div>*/}

                {/*        <div className="check">*/}
                {/*            <svg*/}
                {/*                className="frame"*/}
                {/*                width="20"*/}
                {/*                height="20"*/}
                {/*                viewBox="0 0 20 20"*/}
                {/*                fill="none"*/}
                {/*                xmlns="http://www.w3.org/2000/svg"*/}
                {/*            >*/}
                {/*                <path*/}
                {/*                    d="M0 9.60164L1.315 8.24664L7.76 12.0958L18.8725 1.65747L20 2.7858L8.33333 18.3241L0 9.60164Z"*/}
                {/*                    fill="#121212"*/}
                {/*                />*/}
                {/*            </svg>*/}

                {/*            <div className="check-text">...€ récoltés</div>*/}
                {/*        </div>*/}
                {/*    </div>*/}

                {/*    <a href="/results" className="button">*/}
                {/*        <div className="button-text">Résultats</div>*/}

                {/*        <svg*/}
                {/*            className="chevron"*/}
                {/*            width="20"*/}
                {/*            height="20"*/}
                {/*            viewBox="0 0 20 20"*/}
                {/*            fill="none"*/}
                {/*            xmlns="http://www.w3.org/2000/svg"*/}
                {/*        >*/}
                {/*            <path*/}
                {/*                d="M7.83333 16.6666C7.5 16.6666 7.16667 16.5 7 16.3333C6.5 15.8333 6.5 15 7 14.5L11.5 9.99996L7 5.49996C6.5 4.99996 6.5 4.16663 7 3.66663C7.5 3.16663 8.33333 3.16663 8.83333 3.66663L14.3333 8.99996C14.8333 9.49996 14.8333 10.3333 14.3333 10.8333L8.83333 16.1666C8.5 16.5 8.16667 16.6666 7.83333 16.6666Z"*/}
                {/*                fill="#EEEEEE"*/}
                {/*            />*/}
                {/*        </svg>*/}
                {/*    </a>*/}
                {/*</div>*/}
                <div className="H2-preset">
                    <div className="H2-preset-text">
                        <div className="header-group">
                            <div className="overline">Une autre façon de participer</div>

                            <div className="headline">Devenez bénévoles</div>
                        </div>

                        <div className="paragraph">
                            Afin d’assurer une organisation sans failles, nous avons besoin de 100 bénévoles.
                            <br/>
                            Contactez nous au 06 85 93 41 12.

                        </div>
                    </div>

                    <a href="/contact" className="button">
                        <div className="button-text">Nous contacter</div>

                        <Chevron/>
                    </a>
                </div>

                <img className="image" src="/benevoles.png"/>

            </div>

            <div className="banner">
                <div className="banner-image">
                    <img src="/bgbanner.jpg"/>


                </div>

                <div className="H1-preset-middle">
                    <div className="H1-preset-text-middle">
                        <div className="header-group">
                            <div className="overline">Blood run 2023</div>

                            <div className="headline">prêts, feu, partez</div>
                        </div>

                        <div className="paragraph">
                            N’attendez plus pour vous inscrire à la Blood Run 2023 !
                        </div>
                    </div>

                    <a href="https://sportips.fr/BLOOD23/" className="button">
                        <div className="button-text">S’inscrire</div>

                        <Chevron/>
                    </a>
                </div>
            </div>

            <Footer/>


        </>
    )
        ;
};

export default HomePage;