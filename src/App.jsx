import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import CoursesPage from "./pages/CoursesPage.jsx";
import AboutUS from "./pages/AboutUs.jsx";
// import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
// import ContactPage from "./pages/ContactPage.jsx";
// import FantasySpace from "./pages/Fantasy.jsx";
import AboutUs from "./pages/AboutUs.jsx"

function App() {

  return (
    <>



        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/aboutus" element={<AboutUS/>} />
          </Routes>
        </BrowserRouter>

    </>
  );
}

export default App;