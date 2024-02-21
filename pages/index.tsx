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
import {SpeedInsights} from '@vercel/speed-insights/next';

const HomePage: React.FC = () => {
        return (
            <>
                <CustomHead title="The Blood Run | Accueil"/>
                <Navbar/>
                <div className="home-page">
                    <Hero image="/bghero.jpg" alt="The Blood Run 2024 départ handisport"/>
                    <SectionTitle
                        imgSrc="/Logo_Text.svg" alt="The Blood Run 2024 logo"
                        paragraphText={[
                            <span key="line1">La course annuelle pour promouvoir le don du sang.</span>,
                            <br key="break"/>,
                            <span key="line2">The Blood Run 2024 le 08 septembre prochain à Sollies Pont !</span>
                        ]}
                        buttonText="En savoir plus"
                        buttonHref="/event"
                    />


                </div>
                <IconFeatures unit="km"/>

                <MediaFeature
                    images={["/winimg.png"]}
                    alt="The Blood Run Gagnants"
                    overlineText="8 septembre 2024"
                    headlineText="6ème édition"
                    text={["La grande course de la rentrée revient avec l'ambition de rassembler le plus grand monde possible.",
                        <br key="break"/>,
                        "Les inscriptions ouvriront bientôt. Restez connectés ! En attendant, découvrez les photos de l'édition précédente."
                    ]}
                    buttonText="La Galerie"
                    buttonHref="https://galerie.bloodrun.fr"
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
                    alt="The Blood Run 2024 coureur"
                    overlineText="Blood run 2024"
                    headlineText="prêts, feu, partez"
                    text="Les inscriptions à la Blood Run 2024 ouvriront bientôt !"
                    buttonText="Galerie photos"
                    buttonHref="https://galerie.bloodrun.fr"
                />

                <Footer/>
                <SpeedInsights/>
            </>
        )
            ;
    }
;

export default HomePage;
