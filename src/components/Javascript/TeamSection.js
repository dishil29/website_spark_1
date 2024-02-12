// ... (import React, etc.)
import '../Css/style5.css';
import '../vendor/animate/animate2.css';
 import '../vendor/animate/animate1.css';
 import '../vendor/animate/animate.css';
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
// import '../vendor/isotope-layout/isotope.pkgd.min.js';
// import '../vendor/swiper/swiper-bundle.min.js';
// import './main.js';
// import '../vendor/php-email-form/validate.js';
const TeamSection = () => {
    return (
      <section id="team" className="team">
        <div className="container">
          <div className="section-title" data-aos="zoom-out">
            <h2>Team</h2>
            <p>Our Team</p>
          </div>
  
          <div className="row">
            {/* Team Members */}
            <div className="row">
              {/* Team Member 1 */}
              <div className="col-lg-4 col-md-6 d-flex align-items-center">
                <div className="member" data-aos="fade-up" data-aos-delay="100">
                  <div className="member-img">
                    <img src="/abhishek.jpg" className="img-fluid" alt="Abhishek Kumar Tiwari" />
                    <div className="social">
                      <a href="https://www.facebook.com/profile.php?id=100034049521709&mibextid=ZbWKwL"><i className="bi bi-facebook"></i></a>
                      <a href="https://instagram.com/tiwari__abhi2001?igshid=MzNlNGNkZWQ4Mg=="><i className="bi bi-instagram"></i></a>
                      <a href="https://www.linkedin.com/in/abhishek-kumar-tiwari-b24952208?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><i className="bi bi-linkedin"></i></a>
                    </div>
                  </div>
                  <div className="member-info">
                    <h4>Abhishek Kumar Tiwari</h4>
                    <span>AI Lead</span>
                  </div>
                </div>
              </div>
  
              {/* Team Member 2 */}
              <div className="col-lg-4 col-md-6 d-flex align-items-center">
                <div className="member" data-aos="fade-up" data-aos-delay="200">
                  <div className="member-img">
                    <img src="/sankalp.jpg" className="img-fluid" alt="Sankalp Patidar" />
                    <div className="social">
                      <a href="https://www.facebook.com/sankalp.patidar.3"><i className="bi bi-facebook"></i></a>
                      <a href="https://instagram.com/sankalp_patidar?igshid=OGQ5ZDc2ODk2ZA=="><i className="bi bi-instagram"></i></a>
                      <a href="https://www.linkedin.com/in/sankalp-patidar/"><i className="bi bi-linkedin"></i></a>
                    </div>
                  </div>
                  <div className="member-info">
                    <h4>Sankalp Patidar</h4>
                    <span>AI Lead</span>
                  </div>
                </div>
              </div>
  
              {/* Team Member 3 */}
              <div className="col-lg-4 col-md-6 d-flex align-items-center">
                <div className="member" data-aos="fade-up" data-aos-delay="300">
                  <div className="member-img">
                    <img src="/ashish.png" className="img-fluid" alt="Ashish Kumar" />
                    <div className="social">
                      <a href="https://www.facebook.com/profile.php?id=100009473057660"><i className="bi bi-facebook"></i></a>
                      <a href="https://www.instagram.com/ashish_gupta_akk/"><i className="bi bi-instagram"></i></a>
                      <a href="https://www.linkedin.com/in/ashish-kumar-iitkgp/"><i className="bi bi-linkedin"></i></a>
                    </div>
                  </div>
                  <div className="member-info">
                    <h4>Ashish Kumar</h4>
                    <span>AI Lead</span>
                  </div>
                </div>
              </div>
            </div>
  
            {/* More Team Members */}
            <div className="row">
              {/* Team Member 4 */}
              <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                <div className="member" data-aos="fade-up">
                  <div className="member-img">
                    <img src="raunak1.jpg"className="img-fluid" alt="Raunak Raj" style={{ height: '50%' }} />
                    <div className="social">
                      <a href="https://www.facebook.com/profile.php?id=100074308419553"><i className="bi bi-facebook"></i></a>
                      <a href="https://www.instagram.com/raunakgupta678/"><i className="bi bi-instagram"></i></a>
                      <a href="https://www.linkedin.com/in/raunak-raj-03319b227/"><i className="bi bi-linkedin"></i></a>
                    </div>
                  </div>
                  <div className="member-info">
                    <h4>Raunak Raj</h4>
                    <span>AI & Management Head</span>
                  </div>
                </div>
              </div>
  
              {/* Team Member 5 */}
              <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                <div className="member" data-aos="fade-up" data-aos-delay="100">
                  <div className="member-img">
                    <img src="/anusha.png" className="img-fluid" alt="Anusha Hitendra Borole" />
                    <div className="social">
                      <a href="https://www.facebook.com/profile.php?id=100075339798252"><i className="bi bi-facebook"></i></a>
                      <a href="https://instagram.com/anusha_1763?igshid=OGQ5ZDc2ODk2ZA=="><i className="bi bi-instagram"></i></a>
                      <a href="https://www.linkedin.com/in/anusha-borole-a4574b224?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><i className="bi bi-linkedin"></i></a>
                    </div>
                  </div>
                  <div className="member-info">
                    <h4>Anusha Hitendra Borole</h4>
                    <span>AI & Design Head</span>
                  </div>
                </div>
              </div>
  
              {/* Team Member 6 */}
              <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                <div className="member" data-aos="fade-up" data-aos-delay="200">
                  <div className="member-img">
                    <img src="/priyansh1.jpg" className="img-fluid" alt="Priyansh Agrawal" />
                    <div className="social">
                      <a href="https://www.facebook.com/profile.php?id=100075516824922&mibextid=LQQJ4d"><i className="bi bi-facebook">
                        </i></a>
                        <a href="https://instagram.com/priyansh_.agrawal?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr">
                        <i className="bi bi-instagram"></i></a>
                        <a href="https://www.linkedin.com/in/priyansh-agrawal-6a05a222a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"><i className="bi bi-linkedin"></i></a>
                      </div>
                    </div>
                    <div className="member-info">
                      <h4>Priyansh Agrawal</h4>
                      <span>AI & Sponshorship Head</span>
                    </div>
                  </div>
                </div>
    
                {/* Team Member 7 */}
                <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                  <div className="member" data-aos="fade-up" data-aos-delay="300">
                    <div className="member-img">
                      <img src="risabh.jpg" className="img-fluid" alt="Rishabh Mishra" />
                      <div className="social">
                        <a href="https://www.facebook.com/profile.php?id=100015090407802"><i className="bi bi-facebook"></i></a>
                        <a href="https://www.instagram.com/rishabhm0110/?hl=en"><i className="bi bi-instagram"></i></a>
                        <a href="https://www.linkedin.com/in/rishabh-mishra-0454a322b/"><i className="bi bi-linkedin"></i></a>
                      </div>
                    </div>
                    <div className="member-info">
                      <h4>Rishabh Mishra</h4>
                      <span>AI & Event Head</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    };
    
    export default TeamSection;
    