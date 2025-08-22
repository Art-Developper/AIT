import React, { useState } from "react";
import "./App.css";
import JoinCTA from "./components/JoinCTA.jsx";
import MainSection from "./components/MainSection.jsx";
import Mission from "./components/Mission.jsx";
import Header from "./components/Header.jsx";
import CoursesPage from "./components/pages/CoursesPage.jsx";
import Footer from "./components/Footer.jsx";
import WhyChoose from "./components/Whychose.jsx";
import Courses from "./components/Courses.jsx";
import Certificate from "./components/Certificate.jsx";
import Contact from "./components/Contact.jsx";
import PrivacyPolicy from "./components/pages/PrivacyPolicy.jsx";
import ContactPage from "./components/pages/ContactPage.jsx";
import FantasySpace from "./components/pages/Fantasy.jsx";
import AboutUs from "./components/pages/AboutUs.jsx"

function App() {
  const [currentPage, setCurrentPage] = useState("main");

  const handleNavigate = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Header onNavigate={handleNavigate} />

      <main>
        {currentPage === "main" && (
          <>
            <MainSection />
            <WhyChoose />
            <Courses />
            <Mission />
            <JoinCTA />
            <Certificate />
            <Contact />
          </>
        )}

        {currentPage === "courses" && <CoursesPage />}
        {currentPage === "policy" && <PrivacyPolicy />}
        {currentPage === "contact" && <ContactPage />}
        {currentPage === "fantasy" && <FantasySpace />}
        {currentPage === "AboutUS" && <AboutUs />}
      </main>

      <Footer />
    </>
  );
}

export default App;