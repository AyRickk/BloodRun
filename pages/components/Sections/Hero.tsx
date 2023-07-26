import React from 'react';

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
