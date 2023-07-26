import React from 'react';
import Chevron from '../Chevron';

interface HeroProps {
    image?: string;
}

const Hero: React.FC<HeroProps> = ({ image }) => (

    <div className="hero">
        <div className="hero-image">
            <img src={image}/>
        </div>
    </div>
);

export default Hero;
