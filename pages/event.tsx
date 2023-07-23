import '../styles/home.css';
import '../styles/event.css';
import React from "react";

import Navbar from './components/Navbar';
import CustomHead from './components/CustomHead';
import Chevron from "./components/Chevron";
import Footer from "./components/Footer";
import Check from "./components/Check";

const HomePage: React.FC = () => {

    return (
        <>


            <CustomHead title="L'évènement"/>
            <Navbar/>
            <div className="home-page">
                <div className="hero">
                    <div className="hero-image">
                        <img src="/bghero.jpg"/>
                    </div>

                </div>
                <div className="H1-preset event">
                    <div className="H1-preset-text">
                        <div className="header-group">
                            <div className="overline">Blood run</div>

                            <div className="headline">L’évènement</div>
                        </div>

                        <div className="paragraph">
                            Une course pédestre qui est différente dans l'esprit de celles que
                            l'on peut faire tous les week-ends.
                            <br/>
                            Elle a l'ambition de rassembler le
                            plus grand monde possible, elle est ouverte aux valides. aux handi
                            sports en fauteuils, et cette année, nous espérons accueillir des
                            malvoyants qui courent en binôme avec leur guide.
                        </div>
                    </div>
                </div>


            </div>


            <div className="media-feature event" id="media-feature-1">

                <img className="image" src="/handiStart.png"/>


                <div className="H2-preset">
                    <div className="H2-preset-text">
                        <div className="header-group">

                            <div className="headline">Le projet</div>
                        </div>

                        <div className="paragraph">
                            Une course organisée en partenariat avec Handibou et l'AVAC
                            club d'athlétisme de la Vallée du Capeau.
                            <br/>
                            <br/>
                            L'objectif est de réunir un large public afin de sensibiliser autour du don du sang, du
                            handicap et afin de
                            promouvoir la santé à travers le sport.
                        </div>
                    </div>

                </div>
            </div>

            <div className="media-feature" id="media-feature-2">
                <div className="H2-preset">
                    <div className="H2-preset-text">
                        <div className="header-group">

                            <div className="headline">Notre objectif</div>
                        </div>

                        <div className="paragraph">
                            Mobilisés derrière la cause du Don de Sang. nous retrouvons les
                            commerçants. les producteurs du village et les entreprises locales dans la
                            continuité de la dynamique de la Fête de la Figue.
                            <br/>
                            <br/>
                            Nos premières éditions ont été un succès. nous souhaitons que la course
                            devienne le rendez-vous incontournable de la rentrée !

                        </div>
                    </div>


                </div>

                <img className="image" src="/commercants.png"/>

            </div>

            <div className="map-section">
                <iframe src='https://connect.garmin.com/modern/course/embed/177567622' width='465' height='548' frameBorder='0' />

                <div className="map-text">
                    <div className="map-headline">
                        <div className="map-header-group">
                            <div className="map-title">Le parcours 7.2km</div>
                        </div>
                    </div>

                    <div className="steps">
                        <div className="step">
                            <Check/>

                            <div className="step-text">départ devant le chateau</div>
                        </div>

                        <div className="step">
                            <Check/>

                            <div className="step-text">Traversée du village</div>
                        </div>

                        <div className="step">
                            <Check/>

                            <div className="step-text">direction le Hameau du logis neuf</div>
                        </div>

                        <div className="step">
                            <Check/>

                            <div className="step-text">
                                la Tour. Chemin des Pachiquous
                            </div>
                        </div>

                        <div className="step">
                            <Check/>

                            <div className="step-text">
                                direction chemin des fourches
                            </div>
                        </div>

                        <div className="step">
                            <Check/>

                            <div
                                className="step-text"
                            >
                                Retour par le CTM. Rond-point de la figue, Avenue des palmiers
                            </div>
                        </div>

                        <div className="step">
                            <Check/>

                            <div className="step-text">Arrivée devant le château</div>
                        </div>
                    </div>
                </div>

                <div className="line"></div>
            </div>

            <div className="icon-features event">
                <div className="title">3 courses<br/>différentes</div>

                <div className="handi">
                    <div className="wheelchair">
                        <img src="/wheelchairIcon.png"/>
                    </div>

                    <div className="text">
                        <div className="name">Handi</div>

                        <div className="info">2 tours</div>
                    </div>
                </div>

                <div className="running">
                    <img className="runner" src="/runningIcon.png"/>

                    <div className="text">
                        <div className="name">Course</div>

                        <div className="info">1 tour</div>
                    </div>
                </div>

                <div className="walk">
                    <img className="walker" src="/walkingIcon.png"/>

                    <div className="text">
                        <div className="name">Marche</div>

                        <div className="info">1 tour</div>
                    </div>
                </div>
            </div>

            <div className="media-feature" id="media-feature-2">
                <div className="H2-preset">
                    <div className="H2-preset-text">
                        <div className="header-group">


                            <div className="headline">quelques chiffres</div>
                        </div>
                    </div>

                    <div className="check-list">
                        <div className="check">
                            <Check/>

                            <div className="check-text">7 membres de l’organisation</div>
                        </div>

                        <div className="check">
                            <Check/>

                            <div className="check-text">100 bénévoles</div>
                        </div>

                        <div className="check">
                            <Check/>

                            <div className="check-text">9 policiers municipaux</div>
                        </div>

                        <div className="check">
                            <Check/>

                            <div className="check-text">croix rouge</div>
                        </div>

                        <div className="check">
                            <Check/>

                            <div className="check-text">personnel CCFF</div>
                        </div>
                    </div>


                </div>


                <img className="image" src="/croixRouge.png"/>

                <div className="line"></div>

            </div>

            <div className="team">
                <div className="team-title">L’organisation</div>

                <div className="members">
                    <div className="member">
                        <div className="member-role">Organisateur</div>

                        <div className="member-name">François roché</div>
                    </div>

                    <div className="member">
                        <div className="member-role">Responsable sécurité</div>

                        <div className="member-name">David gauthier</div>
                    </div>

                    <div className="member">
                        <div className="member-role">Responsable logistique</div>

                        <div className="member-name">Alban maestracci</div>
                    </div>

                    <div className="member">
                        <div className="member-role">Secrétaire</div>

                        <div className="member-name">Sylvie Maestracci</div>
                    </div>

                    <div className="member">
                        <div className="member-role">Responsable handi fauteils</div>

                        <div className="member-name">Pascal Veillet</div>
                    </div>

                    <div className="member">
                        <div className="member-role">Responsable lots / sponsors</div>

                        <div className="member-name">Christelle gauthier</div>
                    </div>

                    <div className="member">
                        <div className="member-role">
                            Accueil bénévoles et ravitaillements
                        </div>

                        <div className="member-name">Veronique Roché</div>
                    </div>

                    <div className="member">
                        <div className="member-role">apéritifs et repas</div>

                        <div className="food-members">
                            <div className="member-name food-member">Sylvie Maestracci /</div>

                            <div className="member-name food-member">Christelle gauthier /</div>

                            <div className="member-name food-member">Veronique Roché</div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="banner">
                <div className="banner-image">
                    <img src="/bgbanner.jpg"/>


                </div>

                <div className="H1-preset-middle">
                    <div className="H1-preset-text-middle">
                        <div className="header-group">
                            <div className="overline">Blood run 2023</div>

                            <div className="headline">TOUS EN ROUGE !</div>
                        </div>

                        <div className="paragraph">
                            N’oubliez pas : Je marche, je cours et je roule avec un tee shirt rouge.
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