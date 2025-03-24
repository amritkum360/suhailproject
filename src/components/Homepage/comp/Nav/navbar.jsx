import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleDropdownToggle = (dropdownId) => {
    setDropdownOpen(dropdownOpen === dropdownId ? null : dropdownId);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Function to check if a link is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      {/* Main Navbar */}
      <nav className={`navbar navbar-expand-lg navbar-light ${isSticky ? 'sticky' : ''}`} style={{ padding: '0' }}>
  <div
    className="container-fluid"
    style={{ backgroundColor: isSticky ? 'white' : '#fff5e9' }} // Conditional background color
  >
          <a className="navbar-brand" href="/"><img style={{ width: '80px', height: 'auto' }} src="/logo.png" alt="" /></a>
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleSidebar}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${sidebarOpen ? 'show' : ''}`} id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className={`nav-link ${isActive('/') ? 'active' : ''}`} aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${isActive('/AboutUs') ? 'active' : ''}`} href="/AboutUs">About</a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/islamic-courses"
                  onClick={(e) => {
                    e.preventDefault();
                    handleDropdownToggle('courses');
                  }}
                >
                  Courses
                </a>
                <ul className={`dropdown-menu ${dropdownOpen === 'courses' ? 'show' : ''}`} aria-labelledby="navbarDropdownCourses">
                  {/* Quran Classes Section */}
                  <li className="dropdown-section">
                    <h6 className="dropdown-header">Quran Classes</h6>
                    <a className="dropdown-item" href="#">QURAN RECITATION WITH TAJWEED</a>
                    <a className="dropdown-item" href="#">ISLAMIC STUDIES</a>
                    <a className="dropdown-item" href="#">LEARN DAILY SUPPLICATION</a>
                    <a className="dropdown-item" href="#">QURAN TAFSEER</a>
                    <a className="dropdown-item" href="#">ARABIC CLASSES</a>
                    <a className="dropdown-item" href="#">ADVANCE TAJWEED</a>
                    <a className="dropdown-item" href="#">Quran Memorization(HIFZ)</a>
                    <a className="dropdown-item" href="#">NOORANI QAIDA</a>
                    <a className="dropdown-item" href="#">LEARN TEN QIRATS</a>
                    <a className="dropdown-item" href="#">Urdu Classes</a>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <a className={`nav-link ${isActive('/plans') ? 'active' : ''}`} href="/plans">Pricing</a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${isActive('/contacts') ? 'active' : ''}`} href="/contacts">Contacts</a>
              </li>
            </ul>
            <form className="d-flex">
              <button
                className="btn btn-outline-success"
                type="button"
                onClick={() => navigate('/freetrail')}
              >
                FREE TRIAL
              </button>
            </form>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div className={`mobile-sidebar ${sidebarOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={toggleSidebar}>×</button>
        <form className="d-flex">
          <button
            className="btn"
            style={{ color: 'white', borderColor: 'white', borderRadius: '20px', padding: '10px 20px', background: '#19473c' }}
            type="button"
            onClick={() => navigate('/freetrail')}
          >
            FREE TRIAL
          </button>
        </form>
        <br />
        <br />
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className={`nav-link ${isActive('/') ? 'active' : ''}`} href="/" onClick={toggleSidebar}>Home</a>
          </li>
          <li className="nav-item">
            <a className={`nav-link ${isActive('/AboutUs') ? 'active' : ''}`} href="/AboutUs" onClick={toggleSidebar}>About</a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="/islamic-courses"
              id="mobileDropdownCourses"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Courses
            </a>
            <ul className="dropdown-menu" aria-labelledby="mobileDropdownCourses">
              <li><h6 className="dropdown-header">Quran Classes</h6></li>
              <a className="dropdown-item" href="#">QURAN RECITATION WITH TAJWEED</a>
              <a className="dropdown-item" href="#">ISLAMIC STUDIES</a>
              <a className="dropdown-item" href="#">LEARN DAILY SUPPLICATION</a>
              <a className="dropdown-item" href="#">QURAN TAFSEER</a>
              <a className="dropdown-item" href="#">ARABIC CLASSES</a>
              <a className="dropdown-item" href="#">ADVANCE TAJWEED</a>
              <a className="dropdown-item" href="#">Quran Memorization(HIFZ)</a>
              <a className="dropdown-item" href="#">NOORANI QAIDA</a>
              <a className="dropdown-item" href="#">LEARN TEN QIRATS</a>
              <a className="dropdown-item" href="#">Urdu Classes</a>
            </ul>
          </li>
          <li className="nav-item">
            <a className={`nav-link ${isActive('/plans') ? 'active' : ''}`} href="/plans" onClick={toggleSidebar}>Pricing</a>
          </li>
          <li className="nav-item">
            <a className={`nav-link ${isActive('/contacts') ? 'active' : ''}`} href="/contacts" onClick={toggleSidebar}>Contacts</a>
          </li>
        </ul>
      </div>

      {/* Overlay for mobile sidebar */}
      {sidebarOpen && <div className="overlay" onClick={toggleSidebar}></div>}

      {/* Custom CSS for mobile sidebar and overlay */}
      <style jsx>{`
        .mobile-sidebar {
          position: fixed;
          top: 0;
          left: -250px;
          width: 250px;
          height: 100%;
          background-color: #19473c; /* Green background */
          transition: left 0.3s ease;
          z-index: 1000;
          padding: 20px;
          box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
        }
        .mobile-sidebar.open {
          left: 0;
        }
        .close-btn {
          background: none;
          border: none;
          font-size: 24px;
          position: absolute;
          right: 10px;
          top: 10px;
          cursor: pointer;
          color: #c2912e; /* Yellow color */
        }
        .overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          z-index: 999;
        }
        .courses-dropdown {
          display: flex;
          flex-direction: row;
          width: 100%;
        }
        .dropdown-section {
          flex: 1;
          padding: 0 10px;
        }
        nav.navbar.sticky {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    background-color: white !important; /* Force white background */
  }
        @media (max-width: 992px) {
          .courses-dropdown {
            flex-direction: column;
          }

          /* Mobile Sidebar Menu Styles */
          .mobile-sidebar {
            padding: 20px;
          }

          .mobile-sidebar .nav-link {
            color: #c2912e !important; /* Yellow text color */
            display: block;
            padding: 10px;
            text-decoration: none;
            transition: background-color 0.3s ease-in-out;
          }

          .mobile-sidebar .nav-link.active {
            background-color: #c2912e !important; /* Yellow background for active link */
            color: #19473c !important; /* Green text for active link */
          }

          .mobile-sidebar .nav-link:hover {
            background-color: #c2912e !important; /* Yellow on hover */
            color: #19473c !important; /* Green text on hover */
          }

          /* Dropdown Items */
          .mobile-sidebar .dropdown-menu {
            background-color: #19473c; /* Green background */
          }

          .mobile-sidebar .dropdown-item {
            color: #c2912e !important; /* Yellow text color */
          }

          .mobile-sidebar .dropdown-item:hover {
            background-color: #c2912e !important; /* Yellow hover */
            color: #19473c !important; /* Green text on hover */
          }
        }
      `}</style>
    </>
  );
}