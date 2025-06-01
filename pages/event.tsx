import '../styles/home.css';
import '../styles/event.css';
import React from "react";

import Navbar from './components/Sections/Navbar';
import CustomHead from './components/CustomHead';
import Footer from "./components/Sections/Footer";
import Hero from './components/Sections/Hero';
import SectionTitle from './components/Sections/SectionTitle';
import MediaFeature from './components/Sections/MediaFeature';
import MapComponent from './components/Sections/MapComponent';
import OrganizationTeam from './components/Sections/OrganizationTeam';
import Banner from './components/Sections/Banner';
import IconFeatures from './components/Sections/IconFeatures';

const EventPage: React.FC = () => {

    const team = [
        {role: 'Organisateur', name: ['François roché']},
        {role: 'Responsable sécurité', name: ['David gauthier']},
        {role: 'Responsable logistique', name: ['Alban maestracci']},
        {role: 'Secrétaire', name: ['Sylvie Maestracci']},
        {role: 'Responsable handi fauteils', name: ['Pascal Veillet']},
        {role: 'Responsable lots / sponsors', name: ['Christelle gauthier']},
        {role: 'Accueil bénévoles et ravitaillements', name: ['Veronique Roché']},
        {
            role: 'apéritifs et repas',
            name: ['Sylvie Maestracci /', 'Christelle gauthier /', 'Veronique Roché'],
            isFoodMember: true
        }
    ];


    const steps = [
        'départ devant le chateau',
        'Traversée du village',
        'direction le Hameau du logis neuf',
        'la Tour. Chemin des Pachiquous',
        'direction chemin des fourches',
        'Retour par le CTM. Rond-point de la figue, Avenue des palmiers',
        'Arrivée devant le château'


    ];


    return (
        <>
            <CustomHead title="The Blood Run | L'évènement"/>
            <Navbar/>
            <div className="home-page">
                <Hero image="/bghero.jpg" alt="The Blood Run 2025 départ handisport"/>
                <SectionTitle
                    overlineText="Blood run"
                    headlineText="L’évènement"
                    paragraphText={[
                        <span key="line1">Une course pédestre qui est différente dans l'esprit de celles que l'on peut faire tous les week-ends.</span>,
                        <br key="break"/>,
                        <span key="line2">Elle a l'ambition de rassembler le plus grand monde possible, elle est ouverte aux valides, aux handi sports en fauteuils, et cette année, nous espérons accueillir des malvoyants qui courent en binôme avec leur guide.</span>
                    ]}
                    type="event"
                />
            </div>
            <MediaFeature
                images={['/recto2025.jpg', '/verso2025.jpg']}
                alt='affiches The Blood Run 2025 Sollies Pont'
                variant='doubleImage'
                backgroundColor='linear-gradient(180deg, rgba(242, 242, 242, 1) 0%, rgba(255, 255, 255, 1) 100%)'
            />

            <MediaFeature
                images={['/handiStart.png']}
                alt='The Blood Run départ handisport'
                headlineText='Le projet'
                text={[
                    <span key="line1">Une course organisée en partenariat avec Handibou et l'AVAC club d'athlétisme de la Vallée du Gapeau.</span>,
                    <br key="break1"/>,
                    <br key="break2"/>,
                    <span key="line2">L'objectif est de réunir un large public afin de sensibiliser autour du don du sang, du handicap et afin de promouvoir la santé à travers le sport.</span>
                ]}
                variant='imageLeft'
                backgroundColor='linear-gradient(180deg, rgba(242, 242, 242, 1) 0%, rgba(255, 255, 255, 1) 100%)'
            />


            <MediaFeature
                images={['/chateau.png']}
                alt='The Blood Run commerçants Sollies Pont'
                headlineText='Notre objectif'
                text={[
                    <span key="line1">Mobilisés derrière la cause du Don de Sang, nous retrouvons les commerçants, les producteurs du village et les entreprises locales dans la continuité de la dynamique de la Fête de la Figue.</span>,
                    <br key="break1"/>,
                    <br key="break2"/>,
                    <span key="line2">Nos premières éditions ont été un succès. nous souhaitons que la course devienne le rendez-vous incontournable de la rentrée !</span>
                        ]}
                variant='imageRight'
            />
            <MapComponent
                src='https://connect.garmin.com/modern/course/embed/177567622'
                steps={steps}/>
            <IconFeatures
                unit="tours"
                backgroundColor='#ffffff'
            />
            <MediaFeature
                images={['/croixRouge.png']}
                alt='The Blood Run croix rouge et sponsors'
                headlineText='quelques chiffres'
                checks={[
                    '7 membres de l’organisation',
                    '100 bénévoles',
                    '9 policiers municipaux',
                    'croix rouge',
                    'personnel CCFF'
                ]}
                variant='imageRight'
                hasSeparator={true}
            />


            <OrganizationTeam team={team}/>
            <Banner
                image="/bgbanner.jpg"
                alt="The Blood Run 2025 coureur"
                overlineText="Blood run 2025"
                headlineText="TOUS EN ROUGE !"
                text="N’oubliez pas : Je marche, je cours et je roule avec un tee shirt rouge."
                buttonText="S'inscrire"
                buttonHref="https://sportips.fr/inscription/BLOOD25"/>
            <Footer/>
        </>
    );
};

export default EventPage;
