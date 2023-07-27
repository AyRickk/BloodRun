import React from 'react';

interface IconFeaturesProps {
    unit: 'km' | 'tours';
    backgroundColor?: string;
}

const IconFeatures: React.FC<IconFeaturesProps> = ({ unit, backgroundColor }) => {

    const convertUnit = (distance: number) => {
        if (unit === 'tours') {
            return distance / 7.2; // as 1 tour = 7.2 km
        } else {
            return distance;
        }
    }

    const displayUnit = (distance: number) => {
        if (unit === 'tours' && distance === 1) {
            return 'tour'; // sans 's'
        } else {
            return unit;
        }
    }

    return (
        <div className="icon-features" style={{ background: backgroundColor }}>
            <div className="title">3 courses<br/>différentes</div>

            <div className="handi">
                <div className="wheelchair">
                    <img src="/wheelchairIcon.png" alt="course handisport blood run"/>
                </div>
                <div className="text">
                    <div className="name">Handi</div>
                    <div className="info">{convertUnit(14.4)} {displayUnit(convertUnit(14.4))}</div>
                </div>
            </div>

            <div className="running">
                <img className="runner" src="/runningIcon.png" alt="course à pied blood run"/>
                <div className="text">
                    <div className="name">Course</div>
                    <div className="info">{convertUnit(7.2)} {displayUnit(convertUnit(7.2))}</div>
                </div>
            </div>

            <div className="walk">
                <img className="walker" src="/walkingIcon.png" alt="marche nordique blood run"/>
                <div className="text">
                    <div className="name">Marche</div>
                    <div className="info">{convertUnit(7.2)} {displayUnit(convertUnit(7.2))}</div>
                </div>
            </div>
        </div>
    );
};

export default IconFeatures;
