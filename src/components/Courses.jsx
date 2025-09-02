import React from "react";
import "./Courses.css"; 
import Web from "../assets/Capture.PNG";
import UI from "../assets/Capture_1.PNG";
import Graphic from "../assets/Capture_2.PNG";
import SMM from "../assets/Capture_3.PNG";
import CourseCard from "./CoursesCard";

const courses = [
  { title: "WEB ծրագրավորում", duration: "8 ամիս", tags: ["Անհատական", "Օֆլայն"], image: Web },
  { title: "UI/UX դիզայն", duration: "2 ամիս", tags: ["Անհատական", "Օֆլայն"], image: UI },
  { title: "Գրաֆիկ դիզայն", duration: "2 ամիս", tags: ["Անհատական", "Օֆլայն / Օնլայն"], image: Graphic },
  { title: "SMM", duration: "2 ամիս", tags: ["Օնլայն"], image: SMM },
];

const Courses = () => {
  return (
    <div className="course-section">
      <h2 className="section-title">Մեր դասընթացները</h2>
      <div className="card-grid">
        {courses.map((course, index) => (
          <CourseCard
            key={index}
            title={course.title}
            duration={course.duration}
            tags={course.tags}
            image={course.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Courses;