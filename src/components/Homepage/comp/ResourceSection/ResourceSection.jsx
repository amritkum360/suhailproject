import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./ResourceSection.css"; // Custom styling
import { useNavigate } from "react-router-dom";

const ResourceSection = () => {

  const navigate = useNavigate()
  return (
    <div className="container py-5">
      <div className="row g-4">
        {/* First Card - Download e-Books */}
        <div className="col-md-6">
          <div className="resource-card" style={{ backgroundImage: "url('https://eilaf101.com/wp-content/uploads/2023/08/9999-1024x675.jpg')" }}>
            <div className="overlay">
              <h4>Download best Islamic e-Books free</h4>
              <button className="btn btn-warning fw-bold" onClick={()=>navigate('/free-e-books')} >DOWNLOAD NOW</button>
            </div>
          </div>
        </div>

        {/* Second Card - Listen to Quran */}
        <div className="col-md-6">
          <div className="resource-card" style={{ backgroundImage: "url('https://eilaf101.com/wp-content/uploads/2023/08/Free-Quran-Recitations-1-1024x576.jpg')" }}>
            <div className="overlay">
              <h4>Listen to Quran free</h4>
              <button className="btn btn-warning fw-bold">LISTEN NOW</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourceSection;
