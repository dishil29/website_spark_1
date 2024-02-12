// Header.js
import React, { useState, useEffect } from 'react';
// import { Link } from 'react-scroll'; // If you are using React Router
// import '../Css/style4.css';
import {HashLink as Link} from 'react-router-hash-link';
// import Scrollspy from 'react-scrollspy';

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
  const [scrolled, setScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    const navbarlinks = document.querySelectorAll('#navbar .scrollto');
    const position = window.scrollY + 200;

    navbarlinks.forEach((navbarlink) => {
      if (!navbarlink.hash) return;
      const section = document.querySelector(navbarlink.hash);
      if (!section) return;
      if (position >= section.offsetTop && position <= section.offsetTop + section.offsetHeight) {
        navbarlink.classList.add('active');
      } else {
        navbarlink.classList.remove('active');
      }
    });

    const selectHeader = document.querySelector('#header');
    if (selectHeader) {
      // Checking if the scroll position is greater than 100 pixels
      if (window.scrollY > 100) {
        // Setting the scrolled state to true and adding the 'header-scrolled' class
        setScrolled(true);
        selectHeader.classList.add('header-scrolled');
      } else {
        // Setting the scrolled state to false and removing the 'header-scrolled' class
        setScrolled(false);
        selectHeader.classList.remove('header-scrolled');
      }
    }
  };

  // Adding a scroll event listener to the window, calling handleScroll on scroll
  window.addEventListener('scroll', handleScroll);

  // Cleanup: Remove the scroll event listener when the component is unmounted
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);


  return (
    <header id="header" className={`fixed-top d-flex align-items-center  header-transparent${scrolled ? 'header-scrolled' : ''}`}>
      <div className="container d-flex align-items-center justify-content-between">
        <Link to="/">
          <img  src="/favicon.png" style={{ height: '80px', width: '80px' }} alt="" className="img-fluid" />
        </Link>
        <div className="logo">
          <h1>
            <Link to="/">SPARK4AI</Link>
          </h1>
        </div>
        <nav id="navbar" className="navbar">
          <ul>
        {/* <Scrollspy items={['home', 'about', 'features', 'council', 'projects', 'speakers', 'team', 'contact']} currentClassName="active" offset={-70}> */}
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
            {/* </Scrollspy> */}
            </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
      </div>
    </header>
  );
};

export default Header;
