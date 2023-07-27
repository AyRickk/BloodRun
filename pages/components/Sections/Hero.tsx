import React from 'react';

interface HeroProps {
    image?: string;
    alt?: string;
}

const Hero: React.FC<HeroProps> = ({image, alt}) => (

    <div className="hero">
        <div className="hero-image">
            <img src={image} alt={alt}/>
        </div>
    </div>
);

export default Hero;
