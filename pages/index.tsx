import '../styles/home.css';
import React from "react";
import Navbar from './components/Sections/Navbar';
import CustomHead from './components/CustomHead';
import Footer from "./components/Sections/Footer";
import SectionTitle from './components/Sections/SectionTitle';
import Hero from './components/Sections/Hero';
import Banner from './components/Sections/Banner';
import IconFeatures from './components/Sections/IconFeatures';
import MediaFeature from './components/Sections/MediaFeature';
import {KEYS} from "eslint-visitor-keys";

const HomePage: React.FC = () => {
        return (
            <>
                <CustomHead title="The Blood Run | Accueil"/>
                <Navbar/>
                <div className="home-page">
                    <Hero image="/bghero.jpg" alt="The Blood Run 2023 départ handisport"/>
                    <SectionTitle
                        imgSrc="/logoBloodRun.png" alt="The Blood Run 2023 logo"
                        paragraphText={[
                            <span key="line1">La course annuelle pour promouvoir le don du sang.</span>,
                            <br key="break"/>,
                            <span key="line2">The Blood Run 2023 le 03 septembre prochain à Sollies Pont !</span>
                        ]}
                        buttonText="En savoir plus"
                        buttonHref="/event"
                    />


                </div>
                <IconFeatures unit="km"/>

                <MediaFeature
                    images={["/winimg.png"]}
                    alt="The Blood Run Gagnants"
                    overlineText="3 septembre 2023"
                    headlineText="5ème édition"
                    text={["La grande course de la rentrée revient avec l'ambition de rassembler le plus grand monde possible.",
                        <br key="break"/>,
                        "Cette année, nous espérons accueillir des malvoyants qui courent en binôme avec leur guide !"
                    ]}
                    buttonText="s’inscrire"
                    buttonHref="https://sportips.fr/BLOOD23/"
                    variant="imageLeft"
                />

                <MediaFeature
                    images={["/benevoles.png"]}
                    alt="The Blood Run Bénévoles et aide"
                    overlineText="Une autre façon de participer"
                    headlineText="Devenez bénévoles"
                    text={["Afin d’assurer une organisation sans failles, nous avons besoin de 100 bénévoles.",
                        <br key="break"/>,
                        "Contactez nous au 06 85 93 41 12."
                    ]}
                    buttonText="Nous contacter"
                    buttonHref="/contact"
                    variant="imageRight"
                />

                <Banner
                    image="/bgbanner.jpg"
                    alt="The Blood Run 2023 coureur"
                    overlineText="Blood run 2023"
                    headlineText="prêts, feu, partez"
                    text="N’attendez plus pour vous inscrire à la Blood Run 2023 !"
                    buttonText="S’inscrire"
                    buttonHref="https://sportips.fr/BLOOD23/"
                />

                <Footer/>
            </>
        )
            ;
    }
;

export default HomePage;
