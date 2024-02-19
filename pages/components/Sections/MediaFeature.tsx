import React from 'react';
import Link from "next/link";
import Chevron from "../Chevron";
import Check from "../Check";

interface Props {
    images?: string[];
    overlineText?: string;
    headlineText?: string;
    text?: React.ReactNode;
    checks?: string[];
    buttonText?: string;
    buttonHref?: string;
    variant?: 'doubleImage' | 'imageRight' | 'imageLeft';
    backgroundColor?: string;
    hasSeparator?: boolean;
    alt?: string;
}

const MediaFeature: React.FC<Props> = ({
                                           images,
                                           overlineText,
                                           headlineText,
                                           text,
                                           checks,
                                           buttonText,
                                           buttonHref,
                                           variant = 'imageLeft', // valeur par défaut
                                           backgroundColor,
                                           hasSeparator,
                                           alt
                                       }) => {
    const isImageOnRight = variant === 'imageRight';
    const isDoubleImage = variant === 'doubleImage';

    return (
        <div className={`media-feature ${variant}`} style={{background: backgroundColor}}>
            {isDoubleImage && renderDoubleImages()}
            {!isDoubleImage && (
                <>
                    {!isImageOnRight && renderSingleImage()}
                    {renderTextSection()}
                    {isImageOnRight && renderSingleImage()}
                </>
            )}
            {hasSeparator && <div className="line"></div>}
        </div>
    );

    function renderSingleImage() {
        return images && images.length > 0 && (
            <img className="image" src={images[0]} alt={alt}/>
        );
    }

    function renderDoubleImages() {
        return (
            <div className="double-images-container">
                {images?.map((image, index) => (
                    <img key={index} className={`affiche ${index === 0 ? 'afficheRecto2023' : 'afficheVerso2023'}`}
                         src={image} alt={alt}/>
                ))}
            </div>
        );
    }

    function renderTextSection() {
        return (
            <div className="H2-preset" style={{gap: checks || (buttonText && buttonHref) ? '15px' : '0'}}>
                <div className="H2-preset-text">
                    <div className="header-group">
                        {overlineText && <div className="overline">{overlineText}</div>}
                        {headlineText && <div className="headline">{headlineText}</div>}
                    </div>
                    {!checks && <div className="paragraph">{text}</div>}
                </div>
                {checks && <div className="check-list">
                    {checks.map((check, index) => (
                        <div key={index} className="check">
                            <Check/>
                            <div className="check-text">{check}</div>
                        </div>
                    ))}
                </div>}
                {buttonText && buttonHref && (
                    <Link href={buttonHref}>
                        <div className="button">
                            <span className="button-text">{buttonText}</span>
                            <Chevron/>
                        </div>
                    </Link>
                )}
            </div>
        );
    }
};

export default MediaFeature;
