// TeamCard.js
import React from "react";
import "../styles/TeamCard.css"; // Import specific styles for TeamCard component

const TeamCard = ({ name, role, image }) => {
    return (
        <div className="team-card">
            <img src={image} alt={`${name}'s profile`} className="team-card-image" />
            <div className="team-card-content">
                <h3 className="team-card-name">{name}</h3>
                <p className="team-card-role">{role}</p>
            </div>
        </div>
    );
};

export default TeamCard;
