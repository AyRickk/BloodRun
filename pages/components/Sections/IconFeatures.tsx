import React, { useCallback, memo } from 'react';

import '../../../styles/icon-features.css';
interface IconFeaturesProps {
    unit: 'km' | 'tours';
    backgroundColor?: string;
}

const IconFeatures: React.FC<IconFeaturesProps> = memo(({ unit, backgroundColor }) => {
    const convertUnit = useCallback((distance: number) => {
        return unit === 'tours' ? distance / 7.2 : distance;
    }, [unit]);

    const displayUnit = useCallback((distance: number) => {
        return unit === 'tours' && distance === 1 ? 'tour' : unit;
    }, [unit]);

    return (
        <div className="icon-features" style={{ background: backgroundColor }}>
            <div className="title">3 courses<br/>différentes</div>
            {['handi', 'course', 'marche'].map((type, index) => (
                <div className={type} key={type}>
                    <img className={type + "Img"} src={`/goute_${type}.svg`} alt={`${type} blood run`}/>
                    <div className="text">
                        <div className="name">{type.charAt(0).toUpperCase() + type.slice(1)}</div>
                        <div className="info">{convertUnit(index === 0 ? 14.4 : 7.2)} {displayUnit(convertUnit(index === 0 ? 14.4 : 7.2))}</div>
                    </div>
                </div>
            ))}
        </div>
    );
});

export default IconFeatures;