import React from "react";
import { FaEnvelope, FaPhone, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import Footer from "../../Homepage/comp/Footer/Footer";

const ContactUs = () => {
  return (
    <>
      <div className="container my-5">
        <h2 className="text-center fw-bold">CONTACT US</h2>
        <div className="text-center mb-4">
          <hr className="mx-auto" style={{ width: "50px", height: "3px", backgroundColor: "goldenrod", border: "none" }} />
        </div>

<div className="row align-items-center">
  {/* Left Side - Image */}
  <div className="col-md-4 text-center mb-4 mb-md-0 order-1 order-md-1">
    <img
      src="/quran-2.png"
      alt="Contact Illustration"
      className="img-fluid"
      style={{ maxWidth: "100%", height: "auto" }}
    />
  </div>

  {/* Right Side - Contact Form */}
  <div className="col-md-4 order-2 order-md-3 mb-4 mb-md-0">
    <h4 className="fw-bold">Ask a question</h4>
    <p>Fill in the contact form & we’ll be back to you.</p>
    <hr style={{ width: "50px", height: "3px", backgroundColor: "goldenrod", border: "none" }} />

    <form>
      <div className="mb-3">
        <input type="text" className="form-control" placeholder="Your Name (ex. Ahmad Muhammad)" />
      </div>
      <div className="mb-3">
        <input type="email" className="form-control" placeholder="Your Email (ex. Ahmad@gmail.com)" />
      </div>
      <div className="mb-3">
        <input type="tel" className="form-control" placeholder="Your Phone (ex. +44 786 011 1111)" />
      </div>
      <div className="mb-3">
        <textarea className="form-control" rows="3" placeholder="Your Message"></textarea>
      </div>
      <button type="submit" className="btn btn-success w-100 fw-bold">SEND MESSAGE</button>
    </form>
  </div>

  {/* Middle Section - Contact Info (Moves Below on Mobile) */}
  <div className="col-md-4 bg-dark text-white p-4 rounded mb-4 mb-md-0 order-3 order-md-2">
    <h4 className="fw-bold">Communicate with us</h4>
    <p>You may reach us by email, a call, WhatsApp, or through our social media channels.</p>
    
    <div className="mb-3">
      <FaEnvelope className="me-2" /> info@eilaf101.com
    </div>
    <div className="mb-3">
      <FaPhone className="me-2" /> +1 (845) 643-229
    </div>

    <h5 className="fw-bold mt-3">Connect With Us:</h5>
    <div className="d-flex gap-3">
      <a href="#" className="text-white"><FaFacebook size={24} /></a>
      <a href="#" className="text-white"><FaTwitter size={24} /></a>
      <a href="#" className="text-white"><FaInstagram size={24} /></a>
      <a href="#" className="text-white"><FaLinkedin size={24} /></a>
      <a href="#" className="text-white"><FaYoutube size={24} /></a>
    </div>
  </div>
</div>
</div>

      <Footer />
    </>
  );
};

export default ContactUs;