import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import IslamicCourses from "./components/IslamicCourses/IslamicCourses";
import ContactUs from "./components/Pages/ContactUs/ContactUs";
import Plans from "./components/Pages/fee-and-plans/fee-and-plans";
import AboutUs from "./components/Pages/AboutUs/AboutUs";
import PrivacyPolicy from "./components/Pages/PrivacyPolicy/PrivacyPolicy";
import FreeTrail from "./components/Pages/FreeTrail/FreeTrail";
import Navbar from "./components/Homepage/comp/Nav/navbar";
import FreeEBooks from "./components/free-e-books/free-e-books";
// import Navbar from "./components/Navbar/Navbar"; // Navigation Component

export default function App() {
  return (
    <Router>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/islamic-courses" element={<IslamicCourses />} />
        <Route path="/contacts" element={<ContactUs />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/freetrail" element={<FreeTrail />} />
        <Route path="/free-e-books" element={<FreeEBooks />} />
      </Routes>
    </Router>
  );
}
