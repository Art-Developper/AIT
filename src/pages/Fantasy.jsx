import React from "react";
import Header from "../components/Header";
import "./Fantasy.css";
import FantasyComponent from "../components/FantasySpaceComponent";
import Footer from "../components/Footer";
import MapIMG from "../assets/Map.PNG";
import Team from "../assets/Team.PNG";

const FantasySpace = () => {
  return (
    <>
      <Header/>
      <FantasyComponent></FantasyComponent>

      <Footer/>

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