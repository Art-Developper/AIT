import React from "react";

const TeamMemberCard = ({ name, position, img }) => {
  return (
    <div className="team-card">
      <div className="team-image-container">
        <img src={img} alt={name} className="team-image" />
      </div>
      <h3 className="team-name">{name}</h3>
      <p className="team-position">{position}</p>
    </div>
  );
};

export default TeamMemberCard;