import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="container">
      <h1>Ararat IT</h1>
      <p className="description">
        Դարձեք հաջողակ IT-մասնագետ և սկսեք կատարելագործել ձեր հմտությունները<br />
        մեր դասընթացների հետ:
      </p>

      <div className="course-buttons">
        <button>WEB ծրագրավորում</button>
        <button>UI/UX դիզայն</button>
        <button>Գրաֆիկ դիզայն</button>
        <button>SMM</button>
        <button>AIT Kids</button>
      </div>

      <div className="action-buttons">
        <button className="secondary">Անցնել խորհրդատվության</button>
      </div>
    </div>
  );
};

export default Hero;
