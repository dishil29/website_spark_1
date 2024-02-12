import React from 'react';
import '../Css/style5.css';
// import '../vendor/animate.css/animate.min.css';
//  import '../vendor/aos/aos.css';
import '../vendor/animate/animate2.css';
 import '../vendor/animate/animate1.css';
 import '../vendor/animate/animate.css';
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
const HeroSection = () => {
  return (
    <section id="hero" className="d-flex flex-column justify-content-end align-items-center">
      <div id="heroCarousel" data-bs-interval="5000" className="container carousel carousel-fade" data-bs-ride="carousel">

        {/* Slide 1 */}
        <div className="carousel-item active">
          <div className="carousel-container">
            <h2 className="animate__animated animate__fadeInDown">Welcome to <span style={{ color: '#BF8C5D' }}>SPARK4AI</span></h2>
            <p className="animate__animated animate__fadeInUp">
              SPARK4AI is your gateway to the world of Artificial Intelligence. We're a dynamic AI club dedicated to
              fueling your passion for cutting-edge technology. Through workshops, collaborative projects, and
              immersive experiences, we empower students to dive headfirst into the exciting realm of AI.
            </p>
            <a href="#about" className="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="carousel-item">
          <div className="carousel-container">
            <h2 className="animate__animated animate__fadeInDown">COLLABORATIVE <span style={{ color: '#BF8C5D' }}>PROJECTS</span></h2>
            <p className="animate__animated animate__fadeInUp">
              Collaborate with a team of 4-5 AI enthusiasts on practical projects, receive bi-weekly updates for continuous
              learning, and earn AI Council-endorsed certificates. Benefit from mentorship by seasoned experts in the field
              for guidance throughout your journey.
            </p>
            <a href="#features" className="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="carousel-item">
          <div className="carousel-container">
            <h2 className="animate__animated animate__fadeInDown"><span style={{ color: '#BF8C5D' }}>AI</span> COUNCIL</h2>
            <p className="animate__animated animate__fadeInUp">
              The Artificial Intelligence Council is a collaborative consortium of artificial intelligence organizations from
              various colleges, with select IITs taking the lead. This council was established with a clear mission to
              spearhead advancements and innovations in the field of AI within India.
            </p>
            <a href="/council" className="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a>
          </div>
        </div>

        <a className="carousel-control-prev" href="#heroCarousel" role="button" data-bs-slide="prev">
          <span className="carousel-control-prev-icon bx bx-chevron-left" aria-hidden="true"></span>
        </a>

        <a className="carousel-control-next" href="#heroCarousel" role="button" data-bs-slide="next">
          <span className="carousel-control-next-icon bx bx-chevron-right" aria-hidden="true"></span>
        </a>
      </div>

      <svg className="hero-waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28" preserveAspectRatio="none">
        <defs>
          <path id="wave-path" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"></path>
        </defs>
        <g className="wave1">
          <use xlinkHref="#wave-path" x="50" y="3" fill="rgba(255,255,255, .1)"></use>
        </g>
        <g className="wave2">
          <use xlinkHref="#wave-path" x="50" y="0" fill="rgba(255,255,255, .2)"></use>
        </g>
        <g className="wave3">
          <use xlinkHref="#wave-path" x="50" y="9" fill="#fff"></use>
        </g>
      </svg>
    </section>
  );
};

export default HeroSection;
