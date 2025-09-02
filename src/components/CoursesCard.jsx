import React from "react";

const CourseCard = ({ title, duration, tags, image }) => {
  return (
    <div className="card">
      <div className="card-left">
        <div className="tags">
          {tags.map((tag, i) => (
            <p key={i}>{tag}</p>
          ))}
        </div>
        <h1 className="title">{title}</h1>
        <div className="duration">
          <i className="fa-regular fa-clock"></i>
          <p>{duration}</p>
        </div>
      </div>
      <div className="card-right">
        <img src={image} alt={title} />
      </div>
    </div>
  );
};

export default CourseCard;