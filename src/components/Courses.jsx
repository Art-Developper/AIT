import React from "react";
import "./Courses.css"; 
import Web from "../assets/Capture.PNG"
import UI from "../assets/Capture_1.PNG"
import Graphic from "../assets/Capture_2.PNG"
import SMM from "../assets/Capture_3.PNG"

const courses = [
  {
    title: "WEB ծրագրավորում",
    duration: "8 ամիս",
    tags: ["Անհատական", "Օֆլայն"],
    image: Web,
  },
  {
    title: "UI/UX դիզայն",
    duration: "2 ամիս",
    tags: ["Անհատական", "Օֆլայն"],
    image: UI,
  },
  {
    title: "Գրաֆիկ դիզայն",
    duration: "2 ամիս",
    tags: ["Անհատական", "Օֆլայն / Օնլայն"],
    image: Graphic,
  },
  {
    title: "SMM",
    duration: "2 ամիս",
    tags: ["Օնլայն"],
    image: SMM,
  },
];

const Courses = () => {
  return (
    <div className="course-section">
      <h2 className="section-title">Մեր դասընթացները</h2>
      <div className="card-grid">
        {courses.map((course, index) => (
          <div className="card" key={index}>
            <div className="card-left">
              <div className="tags">
                {course.tags.map((tag, i) => (
                  <p key={i}>{tag}</p>
                ))}
              </div>
              <h1 className="title">{course.title}</h1>
              <div className="duration">
                <i className="fa-regular fa-clock"></i>
                <p>{course.duration}</p>
              </div>
            </div>
            <div className="card-right">
              <img src={course.image} alt={course.title} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;