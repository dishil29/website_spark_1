import React, { useEffect } from 'react';
import Isotope from 'isotope-layout';
import AOS from 'aos';

// import 'aos/dist/aos.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'boxicons/css/boxicons.min.css';
// import 'glightbox/css/glightbox.min.css';
// import 'swiper/swiper-bundle.min.css';
// import 'animate.css/animate.min.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';
// import 'remixicon/remixicon.css';
// import 'swiper/swiper-bundle.min.js'; // Import Swiper JS separately (if needed)
// import './main.js'; // Make sure to adjust the path to main.js
// import 'php-email-form/validate.js'; // Make sure to adjust the path to validate.js
import Swiper from '../vendor/swiper/swiper-bundle.min.js';

const YourComponent = () => {
  useEffect(() => {
    const initIsotope = () => {
      const portfolioContainer = document.querySelector('.portfolio-container');
      if (portfolioContainer) {
        const portfolioIsotope = new Isotope(portfolioContainer, {
          itemSelector: '.portfolio-item',
        });

        const portfolioFilters = document.querySelectorAll('#portfolio-flters li');

        const handleFilterClick = (e) => {
          e.preventDefault();
          portfolioFilters.forEach((el) => {
            el.classList.remove('filter-active');
          });
          e.currentTarget.classList.add('filter-active');

          portfolioIsotope.arrange({
            filter: e.currentTarget.getAttribute('data-filter'),
          });
          portfolioIsotope.on('arrangeComplete', () => {
            AOS.refresh();
          });
        };

        portfolioFilters.forEach((filter) => {
          filter.addEventListener('click', handleFilterClick);
        });
      }
    };

    const initListeners = () => {
      const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
      if (mobileNavToggle) {
        mobileNavToggle.addEventListener('click', (e) => {
          const navbar = document.querySelector('#navbar');
          navbar.classList.toggle('navbar-mobile');
          e.currentTarget.classList.toggle('bi-list');
          e.currentTarget.classList.toggle('bi-x');
        });
      }

      const scrollto = (el) => {
        const header = document.querySelector('#header');
        const offset = header.offsetHeight;

        const elementPos = document.querySelector(el).offsetTop;
        window.scrollTo({
          top: elementPos - offset,
          behavior: 'smooth',
        });
      };

      // const handleScroll = () => {
      //   const navbarlinks = document.querySelectorAll('#navbar .scrollto');
      //   const position = window.scrollY + 200;
      //   navbarlinks.forEach((navbarlink) => {
      //     if (!navbarlink.hash) return;
      //     const section = document.querySelector(navbarlink.hash);
      //     if (!section) return;
      //     if (position >= section.offsetTop && position <= section.offsetTop + section.offsetHeight) {
      //       navbarlink.classList.add('active');
      //     } else {
      //       navbarlink.classList.remove('active');
      //     }
        // });

        const selectHeader = document.querySelector('#header');
        if (selectHeader) {
          if (window.scrollY > 100) {
            selectHeader.classList.add('header-scrolled');
          } else {
            selectHeader.classList.remove('header-scrolled');
          }
        }

        const backtotop = document.querySelector('.back-to-top');
        if (backtotop) {
          if (window.scrollY > 100) {
            backtotop.classList.add('active');
          } else {
            backtotop.classList.remove('active');
          }
        }
      };

      // Add more listeners as needed...

      // Scroll with offset on links with a class name .scrollto
      document.addEventListener('click', (e) => {
        if (e.target.classList.contains('scrollto')) {
          e.preventDefault();

          const navbar = document.querySelector('#navbar');
          if (navbar.classList.contains('navbar-mobile')) {
            navbar.classList.remove('navbar-mobile');
            const navbarToggle = document.querySelector('.mobile-nav-toggle');
            navbarToggle.classList.toggle('bi-list'); 
            navbarToggle.classList.toggle('bi-x');
          }
          // scrollto(e.target.hash);
        }
      }, true);

      // Scroll with offset on page load with hash links in the URL
      // window.addEventListener('load', () => {
      //   if (window.location.hash) {
      //     const targetElement = document.querySelector(window.location.hash);
      //     if (targetElement) {
      //       scrollto(window.location.hash);
      //     }
      //   }
      // });
    

    const initSwipers = () => {
      // Initialize your Swipers here
      // Example:
      new Swiper('.portfolio-details-slider', {
        speed: 400,
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true,
        },
      });

      new Swiper('.testimonials-slider', {
        speed: 600,
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        slidesPerView: 'auto',
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true,
        },
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        },
      });
    };

    // Initialize Isotope
    initIsotope();
    // Initialize other listeners
    initListeners();
    // Initialize AOS
    AOS.init();
    // Initialize Swipers
    initSwipers();

    // Event listeners
    window.addEventListener('load', () => {
      // handleScroll();
    });

    window.addEventListener('scroll', () => {
      // handleScroll();
    });

    // Cleanup
    return () => {
      const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
      if (mobileNavToggle) {
        mobileNavToggle.removeEventListener('click', () => {});
      }

      // Remove more listeners as needed...
    };
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <div>
      {/* Your component's JSX structure goes here */}
    </div>
  );
};

export default YourComponent;
