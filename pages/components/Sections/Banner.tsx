import React from 'react';
import Chevron from '../Chevron';
import Link from "next/link";

interface BannerProps {
    image?: string;
    overlineText?: string;
    headlineText?: string;
    text?: string;
    buttonText?: string;
    buttonHref: string;
    alt?: string;
}

const Banner: React.FC<BannerProps> = ({image, overlineText, headlineText, text, buttonText, buttonHref, alt}) => (
    <div className="banner">
        <div className="banner-image">
            <img src={image} alt={alt}/>
        </div>
        <div className="H1-preset-middle">
            <div className="H1-preset-text-middle">
                <div className="header-group">
                    <div className="overline">{overlineText}</div>
                    <div className="headline">{headlineText}</div>
                </div>
                <div className="paragraph">{text}</div>
            </div>
            <Link href={buttonHref} className="button">
                <div className="button-text">{buttonText}</div>
                <Chevron/>
            </Link>
        </div>
    </div>
);

export default Banner;
