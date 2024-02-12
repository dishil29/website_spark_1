// src/components/FeaturesSection.js
import React from 'react';
import '../Css/style5.css';
// import { RiGpsLine } from 'react-icons/ri';
// import { RiTerminalWindowLine } from 'react-icons/ri';
// import { RiBodyScanLine } from 'react-icons/ri';
// import { RiGroupLine } from 'react-icons/ri';
//  import '../vendor/animate/animate.css';
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
const FeaturesSection = () => {
  return (
    <section id="features" className="features">
      <div className="container">
        <div className="section-title" data-aos="zoom-out">
          <h2>Services</h2>
          <p>What we do offer</p>
        </div>
        <ul className="nav nav-tabs row d-flex">
          {/* Tab 1 */}
          <li className="nav-item col-3" data-aos="zoom-in">
            <a className="nav-link active show" data-bs-toggle="tab" href="#tab-1">
            <i class="ri-group-line"></i>
              <h4 className="d-none d-lg-block">Collaborative Projects</h4>
            </a>
          </li>

          {/* Tab 2 */}
          <li className="nav-item col-3" data-aos="zoom-in" data-aos-delay="100">
            <a className="nav-link" data-bs-toggle="tab" href="#tab-2">
            <i class="ri-gps-line"></i>

              <h4 className="d-none d-lg-block">Roadmap to Artificial Intelligence</h4>
            </a>
          </li>

          {/* Tab 3 */}
          <li className="nav-item col-3" data-aos="zoom-in" data-aos-delay="200">
            <a className="nav-link" data-bs-toggle="tab" href="#tab-3">
            <i class="ri-body-scan-line"></i>
              <h4 className="d-none d-lg-block">AI Events & Workshops</h4>
            </a>
          </li>

          {/* Tab 4 */}
          <li className="nav-item col-3" data-aos="zoom-in" data-aos-delay="300">
            <a className="nav-link" data-bs-toggle="tab" href="#tab-4">
            <i class="ri-terminal-window-line"></i>

              <h4 className="d-none d-lg-block">Hackathons</h4>
            </a>
          </li>
        </ul>

        <div className="tab-content" data-aos="fade-up">
          {/* Tab 1 Content */}
          <div className="tab-pane active show" id="tab-1">
            <div className="row">
              <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
              <h3>AI Project Collaboration and Learning Support</h3>
                <p>
                  Join forces with a team of 4-5 enthusiasts to work on real-world AI projects. Regular updates will be
                  shared
                  every 15 days, ensuring progress and learning. Upon successful completion, certificates endorsed by
                  the AI
                  Council will be awarded. You'll also receive mentorship from experienced seniors, professors, and
                  industry
                  leaders with deep subject knowledge to guide you along the way.
                </p>
                <ul>
                  <li><i class="ri-check-double-line"></i> Get a collaborative platform and structured framework to work
                    on AI projects.</li>
                  <li><i class="ri-check-double-line"></i> Certificates of completion from Professors, AI Council, and
                    Industry leaders.</li>
                  <li><i class="ri-check-double-line"></i> Receive mentorship from experienced seniors, professors, and
                    industry leaders.
                  </li>
                </ul>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 text-center">
             <img src="/feature-1.png" alt="" className="img-fluid" style={{ marginTop: '-50px' }} />
              </div>
            </div>
          </div>

          {/* Tab 2 Content */}
          <div className="tab-pane" id="tab-2">
            <div className="row">
              <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
              <h3>Comprehensive AI Upskilling Roadmap</h3>
                <p>
                  Embark on your AI journey through our upskilling programs. We've meticulously curated a detailed
                  roadmap,
                  encompassing the finest resources for mastering various AI domains. Our roadmap is a comprehensive
                  guide to
                  help you navigate the world of artificial intelligence effectively.

                </p>
                
                <ul>
                  <li><i class="ri-check-double-line"></i> Get a structured roadmap with relevant content to upskill
                    yourself in AI.</li>
                  <li><i class="ri-check-double-line"></i> Expert-curated roadmap covering domains like NLP, DL, ML, and
                    more.

                  </li>
                  <li><i class="ri-check-double-line"></i> Easy access to these resources directly from our website.
                  </li>
                  <li><i class="ri-check-double-line"></i> Start your AI journey with our comprehensive upskilling
                    programs.</li>
                </ul>
              
              </div>
              <div className="col-lg-6 order-1 order-lg-2 text-center">
              <img src="/feature-2.png" alt="" class="img-fluid"/>
              </div>
            </div>
          </div>

          {/* Tab 3 Content */}
          <div className="tab-pane" id="tab-3">
            <div className="row">
              <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
              <h3>Fueling AI Enthusiasm with Vibrant Events</h3>
                <p>
                  We're dedicated to fostering AI enthusiasm. Our calendar is filled with engaging activities such as
                  hackathons,
                  workshops, and speaker sessions. These events cater to our internal community as well as reach far and
                  wide
                  across India through strategic sponsor partnerships. Join us to be a part of the AI revolution!
                </p>
                <ul>
                  <li><i class="ri-check-double-line"></i> Engaging AI activities including hackathons, workshops, and
                    speaker sessions.</li>
                  <li><i class="ri-check-double-line"></i> Dive into the world of AI with hands-on workshops and
                    learning sessions.
                  </li>
                  <li><i class="ri-check-double-line"></i>
                    Events cater to our internal community and reach across India through partnerships.
                  </li>
                  <li><i class="ri-check-double-line"></i> Join the AI revolution by participating in our exciting
                    events.
                  </li>

                </ul>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 text-center">
              <img src="./feature-3.png" alt="" class="img-fluid"/>
              </div>
            </div>
          </div>

          {/* Tab 4 Content */}
          <div className="tab-pane" id="tab-4">
            <div className="row">
              <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
              <h3>Thriving in AI Hackathons: Engage, Collaborate, Showcase and Learn</h3>
                <p>
                  We actively participate in AI hackathons organized by various clubs, organizations, and the esteemed
                  AI Council. These competitions provide a valuable platform to test our practical AI knowledge,
                  collaborate with peers, showcase our skills on a broader stage, and gain recognition in the field.
                </p>
                 
                <ul>
                  <li><i class="ri-check-double-line"></i> Actively participate in AI hackathons organized by various
                    entities. </li>
                  <li><i class="ri-check-double-line"></i> Test and showcase your practical AI knowledge on a broader
                    stage.
                  </li>
                  <li><i class="ri-check-double-line"></i> Collaborate with peers and experts in competitive AI
                    challenges.
                  </li>
                  <li><i class="ri-check-double-line"></i> Enhance your AI skills through hands-on hackathon engagement.
                  </li>
                </ul>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 text-center">
                <img src="./feature-4.png" alt="" class="img-fluid" style={{marginTop: '-60px'}}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
