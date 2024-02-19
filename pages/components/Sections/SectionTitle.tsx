import React from 'react';
import Chevron from '../Chevron';
import Link from "next/link";

interface SectionTitleProps {
    overlineText?: string;
    headlineText?: string;
    paragraphText?: React.ReactNode;
    imgSrc?: string;
    buttonText?: string;
    buttonHref?: string;
    type?: string;
    alt?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
                                                       overlineText,
                                                       headlineText,
                                                       paragraphText,
                                                       imgSrc,
                                                       buttonText,
                                                       buttonHref,
                                                       type,
                                                       alt
                                                   }) => {

    return (
        <div className={`H1-preset ${type || ''}`}>
            <div className="H1-preset-text">
                {imgSrc && <img className="brlogo" src={imgSrc} alt={alt || 'Image'}/>}
                {(overlineText || headlineText) && (
                    <div className="header-group">
                        {overlineText && <div className="overline">{overlineText}</div>}
                        {headlineText && <h1 className="headline">{headlineText}</h1>}
                    </div>
                )}
                {paragraphText && <div className="paragraph">{paragraphText}</div>}
            </div>
            {buttonText && buttonHref && (
                <Link href={buttonHref} className="button">
                    <div className="button-text">{buttonText}</div>
                    <Chevron/>
                </Link>
            )}
        </div>
    );
};

export default SectionTitle;
