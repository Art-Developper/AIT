import React from "react";
import "./Fantasy.css";
import Fantasy from "../assets/FantasySpace.PNG";
import MapIMG from "../assets/Map.PNG";
import Team from "../assets/Team.PNG";

const FantasySpace = () => {
  return (
    <>
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Fantasy Space</h1>
          <p className="hero-subtitle">
            AIT-ին կից գործում է Fantasy Space ծրագրավորման ընկերությունը՝
            նորարար պրոֆեսիոնալների թիմ, ովքեր կյանքի են կոչում ամենաանհնարին
            ֆանտազիաները։ Թվային տիեզերքում Fantasy Space-ը հանդիսանում է այն
            առաջնորդող աստղը, որն ուղղորդում է ընկերություններին դեպի հաջողություն:
          </p>
          <div className="hero-actions">
            <button className="btn-primary">Իմանալ ավելին</button>
          </div>
        </div>

        <div>
          <img src={Fantasy} alt="Fantasy Space" className="hero-image" />
        </div>
      </section>

      <section className="features-section">
        <h2 className="features-title">
          <b>Fantasy Space</b>-ի մասին բազմաթիվ{" "}
          <span className="gradient-text">տվյալներ</span>
        </h2>

        <div className="features-cards">
          <div className="feature-card">
            <h3>20</h3>
            <p>Հոգանոց պրոֆեսիոնալների թիմ</p>
          </div>
          <div className="feature-card">
            <h3>10,000+</h3>
            <p>ներբեռնում ունեցող հավելվածների ստեղծում</p>
          </div>
          <div className="feature-card">
            <h3>40+</h3>
            <p>Հաջողված պրոյեկտներ</p>
          </div>
          <div className="feature-card">
            <h3>12+</h3>
            <p>Ոլորտ, որոնց հետ համագործակցում ենք</p>
          </div>
        </div>
      </section>

      <section className="clients-map-section">
        <h2 className="clients-map-title">Հաճախորդների աշխարհագրությունը</h2>
        <p className="clients-map-subtitle">
          Fantasy Space-ը համագործակցում է ավելի քան 10 տարբեր երկրներում
          գտնվող ընկերությունների հետ
        </p>

        <div className="map-wrapper">
          <img src={MapIMG} alt="Fantasy Space Map" className="map-image" />
        </div>
      </section>

      <section className="team-section">
        <div className="team-content">
          <h2 className="team-title">
            <b>Fantasy Space</b> թիմ
          </h2>
          <p className="team-description">
            Fantasy Space ընկերությունում բացառապես աշխատում են պրոֆեսիոնալներ,
            ովքեր հաջողությամբ ավարտել են AIT ծրագրավորման դասընթացը և հիմա
            համագործակցում են միջազգային ընկերությունների հետ:
          </p>
          <button className="btn-primary">Իմանալ ավելին</button>
        </div>
        <div className="team-photo">
          <img src={Team} alt="Fantasy Space Team" />
        </div>
      </section>
    </>
  );
};

export default FantasySpace;