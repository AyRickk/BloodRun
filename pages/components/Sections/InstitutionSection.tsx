import React from 'react';

interface InstitutionProps {
    institutions: {
        src: string;
        alt: string;
    }[];
    title?: string;
    backgroundColor?: string;
}

const InstitutionSection: React.FC<InstitutionProps> = ({ institutions, title, backgroundColor }) => (
    <div className="institutions-section" style={{ background: backgroundColor }}>
        <div className="institutions-title">{title}</div>

        <div className="institutions">
            {institutions.map((institution, index) => (
                <img
                    key={index}
                    src={institution.src}
                    alt={institution.alt}
                />
            ))}
        </div>
    </div>
);

export default InstitutionSection;
