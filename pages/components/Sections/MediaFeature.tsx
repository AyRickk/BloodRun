import React from 'react';
import Check from '../Check';
import Chevron from '../Chevron';

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
                                           variant,
                                           backgroundColor,
                                           hasSeparator,
                                           alt
                                       }) => {
    const isDoubleImage = variant === 'doubleImage';
    const isImageRight = variant === 'imageRight';
    const hasChecks = checks && checks.length > 0;

    return (
        <div className={`media-feature ${variant}`} id={`media-feature-${isImageRight ? 1 : 2}`}
             style={{background: backgroundColor}}>
            {isDoubleImage ? (
                images?.map((image, index) => (
                    <img key={index} className={`affiche ${index === 0 ? 'afficheRecto2023' : 'afficheVerso2023'}`}
                         src={image}
                         alt={alt}/>
                ))
            ) : (
                <>
                    {!isImageRight && (
                        <img className="image" src={images ? images[0] : ""} alt={alt}/>
                    )}
                    <div className="H2-preset" style={{gap: checks || buttonHref && buttonText ? '15px' : '0'}}>
                        <div className="H2-preset-text">
                            <div className="header-group">
                                {overlineText && <div className="overline">{overlineText}</div>}
                                <div className="headline">{headlineText}</div>
                            </div>
                            {!hasChecks && <div className="paragraph">{text}</div>}
                        </div>
                        {hasChecks && <div className="check-list">
                            {checks?.map((check, index) => (
                                <div key={index} className="check">
                                    <Check/>
                                    <div className="check-text">{check}</div>
                                </div>
                            ))}
                        </div>}
                        {buttonText && buttonHref && (
                            <a href={buttonHref} className="button">
                                <div className="button-text">{buttonText}</div>
                                <Chevron/>
                            </a>
                        )}
                    </div>
                    {isImageRight && (
                        <img className="image" src={images ? images[0] : ""} alt={alt}/>
                    )}
                    {hasSeparator && <div className="line"></div>}
                </>
            )}
        </div>


    );
};

export default MediaFeature;
