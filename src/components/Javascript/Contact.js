import React from 'react';
import '../Css/style5.css';
// import '../vendor/animate.css/animate.min.css';
// import '../vendor/aos/aos.css';
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
import '../vendor/animate/animate2.css';
 import '../vendor/animate/animate1.css';
 import '../vendor/animate/animate.css';
const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">

        <div className="section-title" data-aos="zoom-out">
          <h2>Contact</h2>
          <p>Contact Us</p>
        </div>

        <div className="row mt-5">

          <div className="col-lg-4" data-aos="fade-right">
            <div className="info">
              <div className="address">
                <i className="bi bi-geo-alt"></i>
                <h4>Location:</h4>
                <p>IIT Kharagpur, Kharagpur, West Bengal</p>
              </div>

              <div className="email">
                <i className="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>SPARK4AI.iitkgp@gmail.com</p>
              </div>

              <div className="phone">
                <i className="bi bi-phone"></i>
                <h4>Call:</h4>
                <p>+91 9693878306</p>
              </div>

            </div>

          </div>

          <div className="col-lg-8 mt-5 mt-lg-0" data-aos="fade-left">

            <form action="/contact" method="post" role="form" className="php-email-form">
              {/* CSRF token for security */}
              <input type="hidden" name="csrfmiddlewaretoken" value="{% csrf_token %}" />

              <div className="row">
                <div className="col-md-6 form-group">
                  <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                </div>
              </div>
              <div className="form-group mt-3">
                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
              </div>
              <div className="form-group mt-3">
                <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div className="text-center"><button type="submit">Send Message</button></div>
            </form>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;
