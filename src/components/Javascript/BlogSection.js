// ... (import React, etc.)
import '../Css/style5.css';
// import '../vendor/animate.css/animate.min.css';
// // import '../vendor/aos/aos.css';
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
const BlogSection = () => {
    return (
      <section id="speakers">
        <div className="container" data-aos="fade-up">
          <div className="section-title" data-aos="zoom-out">
            <h2>Latest News</h2>
            <p>Blogs</p>
          </div>
  
          <div className="row">
            {/* Blog 1 */}
            <div className="col-lg-4 col-md-6">
              <div className="speaker1" data-aos="fade-up" data-aos-delay="100">
                <img src="/NLP.jpg" alt="Speaker 1" className="img-fluid" />
                <div className="details">
                  <h3><a href="https://www.analyticsvidhya.com/blog/2022/01/nlp-tutorials-part-i-from-basics-to-advance/">NLP_Basics to Advance</a></h3>
                  <p>Analytics Vidhya</p>
                  <div className="social">
                    <a href="https://www.analyticsvidhya.com/blog/2022/01/nlp-tutorials-part-i-from-basics-to-advance/">View Blog <i className="bi bi-arrow-right-circle-fill" style={{ paddingLeft: '20px' }}></i></a>
                  </div>
                </div>
              </div>
            </div>
  
            {/* Blog 2 */}
            <div className="col-lg-4 col-md-6">
              <div className="speaker1" data-aos="fade-up" data-aos-delay="100">
                <img src="/blog6.webp" alt="Speaker 2" className="img-fluid" />
                <div className="details">
                  <h3><a href="https://deepgram.com/learn/visualizing-and-explaining-transformer-models-from-the-ground-up">Visualizing Transformers</a></h3>
                  <p>Deepgram</p>
                  <div className="social">
                    <a href="https://deepgram.com/learn/visualizing-and-explaining-transformer-models-from-the-ground-up">View Blog <i className="bi bi-arrow-right-circle-fill" style={{ paddingLeft: '20px' }}></i></a>
                  </div>
                </div>
              </div>
            </div>
  
            {/* Blog 3 */}
            <div className="col-lg-4 col-md-6">
              <div className="speaker1" data-aos="fade-up" data-aos-delay="100">
                <img src="/bag.jpg" alt="Speaker 3" className="img-fluid" />
                <div className="details">
                  <h3><a href="https://victorzhou.com/blog/bag-of-words/">Bag of words word embedding</a></h3>
                  <p>Victorzhou</p>
                  <div className="social">
                    <a href="https://victorzhou.com/blog/bag-of-words/">View Blog <i className="bi bi-arrow-right-circle-fill" style={{ paddingLeft: '20px' }}></i></a>
                  </div>
                </div>
              </div>
            </div>
  
            {/* Blog 4 */}
            <div className="col-lg-4 col-md-6">
              <div className="speaker1" data-aos="fade-up" data-aos-delay="100">
                <img src="/time.jpg" alt="Speaker 4" className="img-fluid" />
                <div className="details">
                  <h3><a href="https://machinelearningmastery.com/lstm-for-time-series-prediction-in-pytorch/">Time series forecasting using LSTM</a></h3>
                  <p>Machine Learning Majestry</p>
                  <div className="social">
                    <a href="https://machinelearningmastery.com/lstm-for-time-series-prediction-in-pytorch/">View Blog <i className="bi bi-arrow-right-circle-fill" style={{ paddingLeft: '20px' }}></i></a>
                  </div>
                </div>
              </div>
            </div>
  
            {/* Blog 5 */}
            <div className="col-lg-4 col-md-6">
              <div className="speaker1" data-aos="fade-up" data-aos-delay="100">
                <img src="./AtoZ.png" alt="Speaker 5" className="img-fluid" />
                <div className="details">
                  <h3><a href="https://www.analyticsvidhya.com/blog/2021/06/support-vector-machine-better-understanding/">Support Vector Machine A-Z</a></h3>
                  <p>Analytics Vidhya</p>
                  <div className="social">
                    <a href="https://www.analyticsvidhya.com/blog/2021/06/support-vector-machine-better-understanding/">View Blog <i className="bi bi-arrow-right-circle-fill" style={{ paddingLeft: '20px' }}></i></a>
                  </div>
                </div>
              </div>
            </div>
  
            {/* Blog 6 */}
            <div className="col-lg-4 col-md-6">
              <div className="speaker1" data-aos="fade-up" data-aos-delay="100">
                <img src="/Blogging.jpg" alt="Speaker 6" className="img-fluid" />
                <div className="details">
                  <h3><a href="https://www.hostinger.in/tutorials/chatgpt-for-blogging">How to use chatgpt for blogging</a></h3>
                  <p>Hostinger</p>
                  <div className="social">
                    <a href="https://www.hostinger.in/tutorials/chatgpt-for-blogging">View Blog <i className="bi bi-arrow-right-circle-fill" style={{ paddingLeft: '20px' }}></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default BlogSection;
  