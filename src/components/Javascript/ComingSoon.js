// ComingSoon.js

import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import '../Css/style5.css';
import '../Css/styles.css';
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
const ComingSoon = () => {
  return (
    <div className="main-area center-text">
      <div className="display-table">
        <div className="display-table-cell">
          <h1 className="title font-white"><b>Coming Soon</b></h1>
          <p className="desc font-white">
            We are currently working on the AI Council website.
            We will be back shortly. Thank you for your patience.
          </p>

          <Link to="/notify" className="notify-btn"><b>NOTIFY ME</b></Link>
          
          <ul className="social-btn font-white">
            <li><a href="https://www.facebook.com/profile.php?id=61552039076712&mibextid=ZbWKwL">facebook</a></li>
            <li><a href="https://www.linkedin.com/company/spark4ai/">linkedin</a></li>
            {/* Add other social media links as needed */}
            <li><a href="https://instagram.com/spark4ai.iitkgp?igshid=NjIwNzIyMDk2Mg==">instagram</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
