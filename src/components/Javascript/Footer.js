import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../Css/style5.css';
import '../vendor/animate/animate2.css';
 import '../vendor/animate/animate1.css';
 import '../vendor/animate/animate.css';

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
// // import '../vendor/isotope-layout/isotope.pkgd.min.js';
// // import '../vendor/swiper/swiper-bundle.min.js';
// // import './main.js';
// import '../vendor/php-email-form/validate.js';
const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <h3 style={{ color: '#E6D8A0' }}>SPARK4AI</h3>
        <p>Spark your way to AI excellence!!</p>
        <div className="social-links">
          <a href="https://www.facebook.com/profile.php?id=61552039076712&mibextid=ZbWKwL" className="facebook">
            <i className="bx bxl-facebook"></i>
          </a>
          <a href="https://instagram.com/SPARK4AI.iitkgp?igshid=NjIwNzIyMDk2Mg==" className="instagram">
            <i className="bx bxl-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/company/SPARK4AI/" className="linkedin">
            <i className="bx bxl-linkedin"></i>
          </a>
        </div>
        <div className="copyright">
          &copy; Copyright <strong><span>SPARK4AI</span></strong>. All Rights Reserved
        </div>
        <div className="credits">
          Designed by <a href="https://bootstrapmade.com/">SPARK4AI</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
