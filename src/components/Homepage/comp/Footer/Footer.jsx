import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css"; // Custom styles
import { FaEnvelope, FaWhatsapp, FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container py-4">
        <div className="row">
          {/* About Section */}
          <div className="col-md-4">
            <h5 className="footer-title">ATIA</h5>
            <p className="footer-text">
            ATIA is a professional online platform to learn Quran, Arabic Language, and Islamic Studies 
              for kids & adults through one-to-one online sessions provided by native Arab male & female tutors.
            </p>
          </div>

          {/* Contacts Section */}
          <div className="col-md-4 mt-4 mt-md-0">
            <h5 className="footer-title">CONTACTS</h5>
            <p className="footer-text">
              <FaEnvelope className="footer-icon" /> altrchelp@gmail.com
            </p>
            <p className="footer-text">
              <FaWhatsapp className="footer-icon" /> +91 8011995819
              ,+91 79065 90970
            </p>
            <h6 className="footer-subtitle mt-4 mt-md-0">Connect With Us:</h6>
            <div className="social-icons">
              <FaFacebook className="social-icon" />
              <FaInstagram className="social-icon" />
              <FaTwitter className="social-icon" />
              <FaLinkedin className="social-icon" />
              <FaYoutube className="social-icon" />
            </div>
          </div>

          {/* Useful Links Section */}
          <div className="col-md-4 mt-4 mt-md-0">
            <h5 className="footer-title">USEFUL LINKS</h5>
            <ul className="footer-links">
              <li><a href="/freetrail">Free Trial</a></li>
              <li><a href="/AboutUs">About Us</a></li>
              <li><a href="/islamic-courses">Islamic Courses</a></li>
              <li><a href="/privacy-policy">Privacy Policy</a></li>
              <li><a href="/plans">Pricing</a></li>
              <li><a href="/contacts">Contacts</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        Copyright 2025 © <span className="footer-highlight">ATIA</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
