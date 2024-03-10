// Header.js
import React, { useState } from 'react';
// import { Link } from 'react-scroll'; // If you are using React Router
// import '../Css/style4.css';
import {HashLink as Link} from 'react-router-hash-link';
// import Scrollspy from 'react-scrollspy';
// import Sidebar from './Sidebar';
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as FaIcons from 'react-icons/fa';

import '../Css/style5.css';
import '../Images/favicon.png';
import '../vendor/animate/animate2.css';
 import '../vendor/animate/animate1.css';
 import '../vendor/animate/animate.css';
//  import './main.js';
// import '../vendor/animate.css/animate.min.css';
// // import '../vendor/aos/aos.css';
// import '../vendor/bootstrap/css/bootstrap.min.css';
// import '../vendor/bootstrap-icons/bootstrap-icons.css';
// import '../vendor/boxicons/css/boxicons.min.css';
// import '../vendor/glightbox/css/glightbox.min.css';
// import '../vendor/remixicon/remixicon.css';
// import '../vendor/swiper/swiper-bundle.min.css';
// import '../vendor/aos/aos.js';
// import '../vendor/bootstrap/js/bootstrap.bundle.min.js';
// import '../vendor/glightbox/js/glightbox.min.js';
// import '../vendor/isotope-layout/isotope.pkgd.min.js';
// import '../vendor/swiper/swiper-bundle.min.js';
// import './main.js';
// import '../vendor/php-email-form/validate.js';

const Header = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <header id="header" className={`fixed-top d-flex align-items-center  header-transparent`}>
      <div className="container d-flex align-items-center justify-content-between">
        <Link to="/">
          <img  src="/favicon.png" style={{ height: '80px', width: '80px' }} alt="" className="img-fluid" />
        </Link>
        <div className="logo">
          <h1>
            <Link to="/">SPARK4AI</Link>
          </h1>
        </div>
        <nav id="navbar" className={`navbar${isDropdownOpen ? ' navbar-mobile' : ''}`}>
          <ul>
            <li>
              <Link to="/"  className="nav-link scrollto active">
                Home
              </Link>
            </li>
            <li>
              <Link smooth to="#about" className="nav-link scrollto">
                About
              </Link>
            </li>
            <li>
              <Link smooth to="#features" className="nav-link scrollto">
                Services
              </Link>
            </li>
            <li>
              <Link to="/council" className="nav-link scrollto">
                AI Council
              </Link>
            </li>
            <li>
              <Link to="/projects" className="nav-link scrollto">
                Projects
              </Link>
            </li>
            <li>
              <Link smooth to="#speakers" className="nav-link scrollto">
                Blog
              </Link>
            </li>
            <li>
              <Link smooth to="#team" className="nav-link scrollto">
                Team
              </Link>
            </li>
            <li>
              <Link smooth to="#contact" className="nav-link scrollto">
                Contact
              </Link>
            </li>
          </ul>
          {/* <i className={`bi bi-list mobile-nav-toggle ${isDropdownOpen ? 'bi-x' : ''}`} onClick={toggleDropdown}></i> */}
          <i className={`bi bi-list mobile-nav-toggle  dropdown ${isDropdownOpen ? 'bi-x' : ''}`} onClick={toggleDropdown}></i>

          {isDropdownOpen && (
            <div className="navbar-mobile div">
              <li>
                <Link to="/" className="scrollto ">
                <FaIcons.FaTimes onClick={toggleDropdown} />
                </Link>
              </li>
              <li>
                <Link to="/" className="scrollto "onClick={() => setDropdownOpen(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link smooth to="#about" onClick={() => setDropdownOpen(false)}className="scrollto ">
                  About
                </Link>
              </li>
              <li>
                <Link smooth to="#features" onClick={() => setDropdownOpen(false)}className="scrollto ">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/council" className="scrollto ">
                  AI Council
                </Link>
              </li>
              <li>
                <Link to="/projects" className="scrollto ">
                  Projects
                </Link>
              </li>
              <li>
                <Link smooth to="#speakers" onClick={() => setDropdownOpen(false)}className="scrollto ">
                  Blog
                </Link>
              </li>
              <li>
                <Link smooth to="#team" onClick={() => setDropdownOpen(false)}className="scrollto ">
                  Team
                </Link>
              </li>
              <li>
                <Link smooth to="#contact" onClick={() => setDropdownOpen(false)}className="scrollto ">
                  Contact
                </Link>
              </li>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
