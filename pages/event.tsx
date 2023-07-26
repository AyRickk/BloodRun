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
                <Hero image="/bghero.jpg"/>
                <SectionTitle
                    overlineText="Blood run"
                    headlineText="L’évènement"
                    paragraphText={[
                        "Une course pédestre qui est différente dans l'esprit de celles que l'on peut faire tous les week-ends.",
                        <br/>,
                        "Elle a l'ambition de rassembler le plus grand monde possible, elle est ouverte aux valides, aux handi sports en fauteuils, et cette année, nous espérons accueillir des malvoyants qui courent en binôme avec leur guide."
                    ]}
                    type="event"
                />
            </div>
            <MediaFeature
                images={['/afficheRecto2023.jpg', '/afficheVerso2023.jpg']}
                variant='doubleImage'
                backgroundColor='linear-gradient(180deg, rgba(242, 242, 242, 1) 0%, rgba(255, 255, 255, 1) 100%)'
            />

            <MediaFeature
                images={['/handiStart.png']}
                headlineText='Le projet'
                text={[
                    "Une course organisée en partenariat avec Handibou et l'AVAC club d'athlétisme de la Vallée du Gapeau.",
                    <br/>,
                    <br/>,
                    "L'objectif est de réunir un large public afin de sensibiliser autour du don du sang, du handicap et afin de promouvoir la santé à travers le sport."
                ]}
                variant='imageLeft'
                backgroundColor='linear-gradient(180deg, rgba(242, 242, 242, 1) 0%, rgba(255, 255, 255, 1) 100%)'
            />


            <MediaFeature
                images={['/commercants.png']}
                headlineText='Notre objectif'
                text={[
                    "Mobilisés derrière la cause du Don de Sang, nous retrouvons les commerçants, les producteurs du village et les entreprises locales dans la continuité de la dynamique de la Fête de la Figue.",
                    <br/>,
                    <br/>,
                    "Nos premières éditions ont été un succès. nous souhaitons que la course devienne le rendez-vous incontournable de la rentrée !"]}
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
                overlineText="Blood run 2023"
                headlineText="TOUS EN ROUGE !"
                text="N’oubliez pas : Je marche, je cours et je roule avec un tee shirt rouge."
                buttonText="S’inscrire"
                buttonHref="https://sportips.fr/BLOOD23/"/>
            <Footer/>
        </>
    );
};

export default EventPage;
