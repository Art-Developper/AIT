import React from "react";
import "./JoinCTA.css";
import rocketImage from "../assets/Capture_9.PNG";

const JoinCTA = () => {
  return (
    <section className="join-section">
      <div className="join-container">
        <div className="join-left">
          <img src={rocketImage} alt="Rocket Illustration" />
        </div>
        <div className="join-right">
          <h2 className="join-title">Չգիտես է ինչ մասնագիտություն ընտրել</h2>
          <p className="join-description">
            Արի՛ մեր մասնագիտական խորհուրդը լսելու և պարզելու՝ թե SS դաշտի որ մասնագիտությունն է քեզ ամենահամապատասխանը։
          </p>
          <button className="join-button">Խաղալ</button>
        </div>
      </div>
    </section>
  );
};

export default JoinCTA;