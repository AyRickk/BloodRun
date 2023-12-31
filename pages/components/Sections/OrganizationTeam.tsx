import React from 'react';

interface Member {
    role: string;
    name?: string[];
    isFoodMember?: boolean;
}

interface OrganizationTeamProps {
    team: Member[];
}

const OrganizationTeam: React.FC<OrganizationTeamProps> = ({ team = [] }) => {
    return (
        <div className="team">
            <div className="team-title">L’organisation</div>
            <div className="members">
                {team.map((member, index) => {
                    const { role, isFoodMember = false, name = [] } = member;
                    return (
                        <div key={index} className="member">
                            <div className="member-role">{role}</div>
                            <div className={isFoodMember ? "food-members" : ""}>
                                {name.map((name, index) => (
                                    <div key={index} className="member-name">{name}</div>
                                ))}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

OrganizationTeam.defaultProps = {
    team: []
};

export default OrganizationTeam;
