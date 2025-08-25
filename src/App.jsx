import React, { useState } from "react";
import "./App.css";
import JoinCTA from "./components/JoinCTA.jsx";
import MainSection from "./components/MainSection.jsx";
import Mission from "./components/Mission.jsx";
import Header from "./components/Header.jsx";
import CoursesPage from "./pages/CoursesPage.jsx";
import Footer from "./components/Footer.jsx";
import WhyChoose from "./components/Whychose.jsx";
import Courses from "./components/Courses.jsx";
import Certificate from "./components/Certificate.jsx";
import Contact from "./components/Contact.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import FantasySpace from "./pages/Fantasy.jsx";
import AboutUs from "./pages/AboutUs.jsx"

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