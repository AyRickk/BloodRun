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
                    <Hero image="/bghero.jpg" alt="The Blood Run 2025 départ handisport"/>
                    <SectionTitle
                        imgSrc="/logo_text_2025.svg" alt="The Blood Run 2025 logo"
                        paragraphText={[
                            <span key="line1">La course annuelle pour promouvoir le don du sang.</span>,
                            <br key="break"/>,
                            <span key="line2">The Blood Run 2025 le 07 septembre prochain à Sollies Pont !</span>
                        ]}
                        buttonText="En savoir plus"
                        buttonHref="/event"
                    />
                </div>
                <IconFeatures unit="km"/>

                <MediaFeature
                    images={["/podium.png"]}
                    alt="The Blood Run Gagnants"
                    overlineText="7 septembre 2025"
                    headlineText="Inscriptions ouvertes !"
                    text={["Plus possible de donner un certificat médical, une nouvelle procédure est instaurée par la FFA: le Parcours Prévision Santé à remplir sur le site de la fédération.",
                        <br key="break"/>,
                        <br key="break"/>,
                        "Plus d'infos sur le lien ci-dessous."
                    ]}
                    buttonText="S'inscrire"
                    buttonHref="https://sportips.fr/inscription/BLOOD25"
                    variant="imageLeft"
                />

                <MediaFeature
                    images={["/depart.png"]}
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
                    alt="The Blood Run 2025 coureur"
                    overlineText="Blood run 2025"
                    headlineText="prêts, feu, partez"
                    text="Les inscriptions à la Blood Run 2025 sont désormais ouvertes !"
                    buttonText="S'inscrire"
                    buttonHref="https://sportips.fr/inscription/BLOOD25"
                />

                <Footer/>
                <SpeedInsights/>
            </>
        )
            ;
    }
;

export default HomePage;
