import React from 'react';


interface OrganizationTeamProps {
    team: Member[];
}

interface Member {
    role: string;
    name: string[];
    isFoodMember?: boolean;
}

const OrganizationTeam: React.FC<OrganizationTeamProps> = ({ team }) => {
    return (
        <div className="team">
            <div className="team-title">L’organisation</div>
            <div className="members">
                {team.map((member, index) => (
                    <div key={index} className="member">
                        <div className="member-role">{member.role}</div>
                        <div className={member.isFoodMember ? "food-members" : ""}>
                            {Array.isArray(member.name) && member.name.map((name, index) => (
                                <div key={index} className="member-name">{name}</div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OrganizationTeam;
