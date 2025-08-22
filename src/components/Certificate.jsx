import React from "react";
import "./Certificate.css";
import certificateImg from "../assets/Capture_4.PNG";

const Certificate = () => {
  return (
    <section className="certificate-section">
      <div className="certificate-container">
        <div className="certificate-left">
          <h2 className="title">Սերտիֆիկատ</h2>
          <p className="certificate-text">
            Դասընթացի ավարտին դուք կունենաք ակադեմիական փաստաթուղթ, որը արդարացնում է ձեր ոլորտում ձեռքբերումները կամ մասնագիտական սերտիֆիկացումը։
          </p>
        </div>

        <div className="certificate-brace">❴</div>

        <div className="certificate-right">
          <img src={certificateImg} alt="AIT School սերտիֆիկատ" />
        </div>
      </div>
    </section>
  );
};

export default Certificate;
