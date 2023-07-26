import React from 'react';
import Check from '../Check';

interface MapComponentProps {
    steps?: string[];
    src?: string;
}

const MapComponent: React.FC<MapComponentProps> = ({ steps, src }) => (
    <div className="map-section">
        <iframe className="map" src={src} frameBorder='0' />
        <div className="map-text">
            <div className="map-headline">
                <div className="map-header-group">
                    <div className="map-title">Le parcours 7.2km</div>
                </div>
            </div>
            <div className="steps">
                {steps?.map((step, index) => (
                    <div key={index} className="step">
                        <Check/>
                        <div className="step-text">{step}</div>
                    </div>
                ))}
            </div>
        </div>
        <div className="line"></div>
    </div>
);

export default MapComponent;
