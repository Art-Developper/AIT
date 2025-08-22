import React from "react";
import "./Mission.css";


export default function Mission() {
  return (
    <section className="mission-section">
      <h2 className="section-title">Մեր նպատակը</h2>
      <div className="mission-grid">
        {/* Left: images & text */}
        <div className="mission-left">
          <p className="mission-description">
            Ապակենտրոնացնել դարաշրջանի IT կրթությունը և դարձնել այն հասանելի ոչ միայն Երևանում, այլ նաև նրա սահմաններից դուրս
          </p>
        </div>

        {/* Right: boxes */}
        <div className="mission-right">
          <div className="mission-box">
            <div className="icon">10/10</div>
            <p>
              Ստեղծել որակյալ կադրեր աշխատաշուկայի զարգացման համար և համալրել
              նրանցով մեր դպրոցին կից Fantasy Space ընկերությունը:
            </p>
          </div>
          <div className="mission-box">
            <div className="icon">↷</div>
            <p>
              Զարգացնել Արարատի մարզի IT ենթակառուցվածքը նորարարությամբ և կրթական հնարավորություններով։
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}