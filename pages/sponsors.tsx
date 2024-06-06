import '../styles/home.css';
import '../styles/event.css';
import '../styles/institutions.css';
import React from "react";

import Navbar from './components/Sections/Navbar';
import CustomHead from './components/CustomHead';
import Footer from "./components/Sections/Footer";
import Hero from './components/Sections/Hero';
import SectionTitle from './components/Sections/SectionTitle';
import InstitutionSection from "./components/Sections/InstitutionSection";

const SponsorsPage: React.FC = () => {

    const institutions = [
        {
            src: "./institutions/dds.png",
            alt: "Blood Run Partenaire Donneurs de Sange de la Vallée du Gapeau",
        },
        {src: "./institutions/handibou.png", alt: "Blood Run Partenaire Handibou"},
        {src: "./institutions/avag.png", alt: "Blood Run Partenaire Avag"},
        {src: "./institutions/mairie.png", alt: "Blood Run Partenaire Mairie de Sollies Pont"},
        {src: "./institutions/oms.png", alt: "Blood Run Partenaire OMS Sollies Pont"},
    ];

    const sponsors = [
        {src: "./institutions/ca.png", alt: "Blood Run Sponsors Credit Agricole"},
        {src: "./institutions/fe.png", alt: "Blood Run Sponsors Fe"},
        {src: "./institutions/fpi.png", alt: "Blood Run Sponsors Fpi"},
        {src: "./institutions/biocoop.png", alt: "Blood Run Sponsors Biocoop"},
        {src: "./institutions/sportips.png", alt: "Blood Run Sponsors Sportips"},
        {src: "./institutions/intercaves.png", alt: "Blood Run Sponsors Intercaves"},
        {src: "./institutions/le_fromage_rit.png", alt: "Blood Run Sponsors Le Fromage Rit"},
        {src: "./institutions/renault_sanna.png", alt: "Blood Run Sponsors Renault Sanna"},
        // {src: "./institutions/intermarche.png", alt: "Blood Run Sponsors Intermarche"},
        {src: "./institutions/tdr.png", alt: "Blood Run Sponsors Tdr"},
        {src: "./institutions/faconc.png", alt: "Blood Run Sponsors Façonc"},
        // {src: "./institutions/parthenaise.png", alt: "Blood Run Sponsors Parthenaise"},
        {src: "./institutions/argos.png", alt: "Blood Run Sponsors Argos"},
        // {src: "./institutions/renault.png", alt: "Blood Run Sponsors Renault"},
        {src: "./institutions/residencePrivee.png", alt: "Blood Run Sponsors Residence Privee"},
    ];



    return (
        <>
            <CustomHead title="The Blood Run | Les sponsors"/>
            <Navbar/>
            <div className="home-page">
                <Hero image="/bghero.jpg" alt="The Blood Run 2023 départ handisport"/>
                <SectionTitle
                    overlineText="Blood run"
                    headlineText="Les partenaires"
                    paragraphText={[
                        "La liste de nos partenaires et sponsors.",
                        <br/>,
                        <br/>,
                        "C'est grâce à eux que nous pouvons organiser cet évènement dans notre magnifique ville de Sollies Pont."
                    ]}
                    type="event"
                />
            </div>
            <InstitutionSection institutions={institutions}
                                title="Les partenaires institutionnels"
                                backgroundColor="background: linear-gradient(180deg, #F2F2F2 0%, #FFF 32.32%);"/>


            <InstitutionSection institutions={sponsors}
                                title="Les sponsors"
                                backgroundColor="background: #FFF;"/>

            <Footer/>
        </>
    );
};

export default SponsorsPage;
