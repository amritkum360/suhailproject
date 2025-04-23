import React, { useState, useEffect } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
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
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <style>
        {`
        .sticky-nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: white;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        .custom-nav-link {
          position: relative;
          padding-top: 12px;
          padding-bottom: 8px;
          color: #4b5563;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .custom-nav-link:hover {
          color: #166534;
        }

        .custom-nav-link::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 0%;
          height: 4px;
          background-color: #166534;
          transition: width 0.3s ease;
        }

        .custom-nav-link:hover::before,
        .custom-nav-link.active::before {
          width: 100%;
        }

        .custom-nav-link.active {
          font-weight: 600;
          color: #000000;
        }
        
        .dropdown-container {
          position: relative;
        }
        
        .dropdown-menu {
          position: absolute;
          width: 900px;
          left: 50%;
          transform: translateX(-50%);
          top: 100%;
          background: white;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
          border-radius: 0.5rem;
          padding: 1.5rem;
          display: none;
          z-index: 50;
          border-top: 4px solid #166534;
          margin-top: 8px;
        }
        
        .dropdown-container:hover .dropdown-menu {
          display: flex;
        }
        
        .submenu-item {
          transition: all 0.2s ease;
          padding: 4px 0;
          display: block;
          color: #4b5563;
          text-decoration: none;
        }
        
        .submenu-item:hover {
          color: #166534;
          transform: translateX(4px);
        }
        
        .dropdown-column {
          flex: 1;
          min-width: 250px;
          padding: 0 1rem;
        }
        
        .dropdown-title {
          font-weight: bold;
          font-size: 0.875rem;
          margin-bottom: 0.75rem;
          text-transform: uppercase;
          color: #374151;
        }

        /* Mobile Sidebar Styles */
        .mobile-sidebar {
          position: fixed;
          top: 0;
          left: 0;
          width: 80%;
          max-width: 300px;
          height: 100vh;
          background: white;
          box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
          z-index: 1000;
          transform: translateX(-100%);
          transition: transform 0.3s ease-out;
          overflow-y: auto;
          padding: 20px;
        }

        .mobile-sidebar.open {
          transform: translateX(0);
        }

        .sidebar-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          z-index: 999;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease;
        }

        .sidebar-backdrop.open {
          opacity: 1;
          pointer-events: all;
        }

        .mobile-menu-item {
          padding: 12px 0;
          border-bottom: 1px solid #eee;
          color: #333;
          display: block;
        }

        .mobile-dropdown-content {
          padding-left: 15px;
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease;
        }

        .mobile-dropdown-content.open {
          max-height: 1000px;
        }

        .mobile-submenu-item {
          padding: 8px 0;
          display: block;
          color: #555;
        }
        `}
      </style>

      {/* Mobile Sidebar Backdrop */}
      <div 
        className={`sidebar-backdrop ${sidebarOpen ? 'open' : ''}`} 
        onClick={toggleSidebar}
      />

      {/* Mobile Sidebar */}
      <div className={`mobile-sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="flex justify-between items-center mb-6">
          <img style={{ width: '60px', height: 'auto' }} src="/logo.png" alt="Logo" />
          <button onClick={toggleSidebar} className="text-gray-500 hover:text-gray-700">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="space-y-2">
          <a href="/" className="mobile-menu-item" onClick={toggleSidebar}>Home</a>
          <a href="/AboutUs" className="mobile-menu-item" onClick={toggleSidebar}>About</a>
          
          {/* Mobile Courses Dropdown */}
          <div>
            <button 
              className="mobile-menu-item w-full text-left flex justify-between items-center"
              onClick={() => handleDropdownToggle('courses')}
            >
              Courses
              <span>{dropdownOpen === 'courses' ? '−' : '+'}</span>
            </button>
            <div className={`mobile-dropdown-content ${dropdownOpen === 'courses' ? 'open' : ''}`}>
              <h4 className="font-bold mt-2 mb-1 text-sm">Quran Classes</h4>
              <a href="/noorani-qaida" className="mobile-submenu-item" onClick={toggleSidebar}>Noorani Qaida course</a>
              <a href="/online-quran-reading" className="mobile-submenu-item" onClick={toggleSidebar}>Online Quran Reading</a>
              <a href="/quran-classes-for-adults" className="mobile-submenu-item" onClick={toggleSidebar}>Quran classes for adults</a>
              <a href="/quran-classes-for-begginers" className="mobile-submenu-item" onClick={toggleSidebar}>Quran classes for beginners</a>
              <a href="/quran-classes-for-kids" className="mobile-submenu-item" onClick={toggleSidebar}>Quran classes for kids</a>
              <a href="/quran-classes-for-females" className="mobile-submenu-item" onClick={toggleSidebar}>Quran classes for females</a>
              <a href="/quran-reading-courses-for-kids" className="mobile-submenu-item" onClick={toggleSidebar}>Quran reading Course For Kids</a>
              <a href="/quran-tajweed-course-for-kids" className="mobile-submenu-item" onClick={toggleSidebar}>Quran Tajweed Course For Kids</a>
              <a href="/" className="mobile-submenu-item" onClick={toggleSidebar}>Sunni Online courses</a>
              <a href="/quran-ijazah-course" className="mobile-submenu-item" onClick={toggleSidebar}>Quran Ijazah Course</a>
              <a href="/quran-qirat-classes" className="mobile-submenu-item" onClick={toggleSidebar}>Quran Qirat classes</a>
              <a href="/online-quran-memorization-classes" className="mobile-submenu-item" onClick={toggleSidebar}>Learn Quran Memorization</a>
              <a href="/learn-read-quran-online" className="mobile-submenu-item" onClick={toggleSidebar}>Learn Quran reading Basics</a>
              
              <h4 className="font-bold mt-3 mb-1 text-sm">Arabic Course</h4>
              <a href="/online-arabic-grammar-course" className="mobile-submenu-item" onClick={toggleSidebar}>Online Arabic Grammar Course</a>
              <a href="/egyptian-arabic-language-course" className="mobile-submenu-item" onClick={toggleSidebar}>Egyptian Arabic language course</a>
              <a href="/online-arabic-classes" className="mobile-submenu-item" onClick={toggleSidebar}>Learn Arabic Language</a>
              <a href="/conversational-arabic-course" className="mobile-submenu-item" onClick={toggleSidebar}>Learn Arabic Conversation</a>
              
              <h4 className="font-bold mt-3 mb-1 text-sm">Islamic Courses</h4>
              <a href="/islamic-studies-courses" className="mobile-submenu-item" onClick={toggleSidebar}>Islamic studies courses</a>
              <a href="/new-muslim-converts-course" className="mobile-submenu-item" onClick={toggleSidebar}>New Muslim Converts Course</a>
              <a href="/quran-tafseer-course" className="mobile-submenu-item" onClick={toggleSidebar}>Quran Tafseer Course</a>
              <a href="/the-five-pillars-of-islam-course" className="mobile-submenu-item" onClick={toggleSidebar}>The Five Pillars of Islam</a>
            </div>
          </div>

          <a href="/plans" className="mobile-menu-item" onClick={toggleSidebar}>Pricing</a>
          <a href="/contacts" className="mobile-menu-item" onClick={toggleSidebar}>Contacts</a>
          
          <button
            className="w-full mt-4 px-4 py-2 border border-green-700 rounded-full hover:bg-green-700 hover:text-white transition"
            onClick={() => {
              navigate('/freetrail');
              toggleSidebar();
            }}
            style={{backgroundColor:'#144d45', color:'white'}}
          >
            FREE TRIAL
          </button>
        </div>
      </div>

      {/* Desktop Navbar */}
      <nav className={`${isSticky ? 'sticky-nav' : ''}`}>
        <div className="container-fluid" style={{ backgroundColor: isSticky ? 'white' : '#fff5e9', padding: '0 15px' }}>
          <div className="flex items-center justify-between" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0px 0' }}>
            <a className="navbar-brand" href="/">
              <img style={{ width: '80px', height: 'auto' }} src="/logo.png" alt="Logo" />
            </a>

            <button
  className="d-md-none"
  onClick={toggleSidebar}
  aria-label="Toggle navigation"
  style={{
    backgroundColor: "black",
    border: "none",
    padding: "8px 12px",
    borderRadius: "6px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
    color: "white"
  }}
>
  <GiHamburgerMenu size={24} />
</button>

            <div className="hidden md:flex md:items-center md:space-x-8 text-[16px] font-medium">
              <a href="/" className={`custom-nav-link ${isActive('/') ? 'active' : ''}`}>Home</a>

              <a href="/AboutUs" className={`custom-nav-link ${isActive('/AboutUs') ? 'active' : ''}`}>
                About 
              </a>

              {/* Courses Dropdown */}
              <div className="dropdown-container">
                <button className="custom-nav-link flex items-center font-medium">
                  Courses <span className="ml-1">▾</span>
                </button>
                <div className="dropdown-menu">
                  {/* Quran Classes */}
                  <div className="dropdown-column">
                    <h4 className="dropdown-title">Quran Classes</h4>
                    <ul className="space-y-2">
                      <li><a href="/noorani-qaida" className="submenu-item">Noorani Qaida course</a></li>
                      <li><a href="/online-quran-reading" className="submenu-item">Online Quran Reading</a></li>
                      <li><a href="/quran-classes-for-adults" className="submenu-item">Quran classes for adults</a></li>
                      <li><a href="/quran-classes-for-begginers" className="submenu-item">Quran classes for beginners</a></li>
                      <li><a href="/quran-classes-for-kids" className="submenu-item">Quran classes for kids</a></li>
                      <li><a href="/quran-classes-for-females" className="submenu-item">Quran classes for females</a></li>
                      <li><a href="/quran-reading-courses-for-kids" className="submenu-item">Quran reading Course For Kids</a></li>
                      <li><a href="/quran-tajweed-course-for-kids" className="submenu-item">Quran Tajweed Course For Kids</a></li>
                      <li><a href="/" className="submenu-item">Sunni Online courses</a></li>
                      <li><a href="/quran-ijazah-course" className="submenu-item">Quran Ijazah Course</a></li>
                      <li><a href="/quran-qirat-classes" className="submenu-item">Quran Qirat classes</a></li>
                      <li><a href="/online-quran-memorization-classes" className="submenu-item">Learn Quran Memorization</a></li>
                      <li><a href="/learn-read-quran-online" className="submenu-item">Learn Quran reading Basics</a></li>
                    </ul>
                  </div>

                  {/* Arabic Course */}
                  <div className="dropdown-column">
                    <h4 className="dropdown-title">Arabic Course</h4>
                    <ul className="space-y-2">
                      <li><a href="/online-arabic-grammar-course" className="submenu-item">Online Arabic Grammar Course</a></li>
                      <li><a href="/egyptian-arabic-language-course" className="submenu-item">Egyptian Arabic language course</a></li>
                      <li><a href="/online-arabic-classes" className="submenu-item">Learn Arabic Language</a></li>
                      <li><a href="/conversational-arabic-course" className="submenu-item">Learn Arabic Conversation</a></li>
                    </ul>
                  </div>

                  {/* Islamic Courses */}
                  <div className="dropdown-column">
                    <h4 className="dropdown-title">Islamic Courses</h4>
                    <ul className="space-y-2">
                      <li><a href="/islamic-studies-courses" className="submenu-item">Islamic studies courses</a></li>
                      <li><a href="/new-muslim-converts-course" className="submenu-item">New Muslim Converts Course</a></li>
                      <li><a href="/quran-tafseer-course" className="submenu-item">Quran Tafseer Course</a></li>
                      <li><a href="/the-five-pillars-of-islam-course" className="submenu-item">The Five Pillars of Islam</a></li>
                    </ul>
                  </div>
                </div>
              </div>

              <a href="/plans" className={`custom-nav-link ${isActive('/plans') ? 'active' : ''}`}>Pricing</a>

              <a href="/contacts" className={`custom-nav-link ${isActive('/contacts') ? 'active' : ''}`}>Contacts</a>
            </div>

            {/* Free Trial Button */}
            <div className="hidden md:flex items-center">
              <button
                className="ml-4 px-4 py-2 rounded-full hover:bg-green-700 hover:text-white transition"
                onClick={() => navigate('/freetrail')}
                style={{backgroundColor:'#144d45', color:'white', fontWeight:'600', fontSize:'18px'}}
              >
                FREE TRIAL
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}