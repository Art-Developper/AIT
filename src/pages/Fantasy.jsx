import React from "react";
import Header from "../components/Header";
import "./Fantasy.css";
import FantasyComponent from "../components/FantasySpaceComponent";
import FantasyFeatures from "../components/FantasyFeatures";
import FantasyMap from "../components/FantasyMap";
import Footer from "../components/Footer";
import Team from "../assets/Team.PNG";

const FantasySpace = () => {
  return (
    <>
      <Header/>
      <FantasyComponent></FantasyComponent>
      <FantasyFeatures></FantasyFeatures>
      <FantasyMap></FantasyMap>
      <Footer/>

     

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