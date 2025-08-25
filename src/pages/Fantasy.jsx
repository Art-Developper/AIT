import React from "react";
import Header from "../components/Header";
import FantasyComponent from "../components/FantasySpaceComponent";
import FantasyFeatures from "../components/FantasyFeatures";
import FantasyMap from "../components/FantasyMap";
import FantasyTeam from "../components/FantasyTeam";
import Footer from "../components/Footer";


const FantasySpace = () => {
  return (
    <>
      <Header/>
      <FantasyComponent></FantasyComponent>
      <FantasyFeatures></FantasyFeatures>
      <FantasyMap></FantasyMap>
      <FantasyTeam></FantasyTeam>
      <Footer/>
    </>
  );
};

export default FantasySpace;