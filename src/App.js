import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Javascript/Header';
import HeroSection from './components/Javascript/HeroSection';
import AboutSection from './components/Javascript/AboutSection';
import FeaturesSection from './components/Javascript/FeaturesSection';
import BlogSection from './components/Javascript/BlogSection';
import TeamSection from './components/Javascript/TeamSection';
import Contact from './components/Javascript/Contact';
import Footer from './components/Javascript/Footer';
import ComingSoon from './components/Javascript/ComingSoon';
import ComingSoon2 from './components/Javascript/ComingSoon2';
// pages new 
import Login from './components/pages/login';
import Signup from './components/pages/signup';
import { useAuthContext } from './components/hooks/useAuthContext'
//extra imports
import 'bootstrap-icons/font/bootstrap-icons.css';
import './components/Css/style5.css';
import './components/vendor/animate/animate2.css';
 import './components/vendor/animate/animate1.css';
 import './components/vendor/animate/animate.css';
// import './components/Javascript/main.js';
// import './components/vendor/animate.css/animate.min.css';
// import './components/vendor/aos/aos.css';
//  import './components/vendor/bootstrap/css/bootstrap.min.css';
//  import './components/vendor/bootstrap-icons/bootstrap-icons.css'; 
//  import './components/vendor/boxicons/css/boxicons.min.css';
//  import './components/vendor/glightbox/css/glightbox.min.css';
//  import './components/vendor/remixicon/remixicon.css';
//  import './components/vendor/swiper/swiper-bundle.min.css';
// //import './components/vendor/aos/aos.js';
//  import './components/vendor/bootstrap/js/bootstrap.bundle.min.js';
//  import './components/vendor/glightbox/js/glightbox.min.js';
//  import './components/vendor/isotope-layout/isotope.pkgd.min.js';
// import '../vendor/swiper/swiper-bundle.min.js';
// import './main.js';
// import './components/vendor/php-email-form/validate.js';
const Home = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <BlogSection />
      <TeamSection />
      <Contact />
      <Footer />
    </div>
  );
};

const App = () => {
  const { user } = useAuthContext() 

  return (
    <Router>
        <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<AboutSection />} /> */}
        <Route path="/features" element={<FeaturesSection />} />
        <Route path="/projects" element={ user ? <ComingSoon2 /> : <Navigate to="/login" />} />
        <Route path="/blog" element={<BlogSection />} />
        <Route path="/team" element={<TeamSection />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/council" element={<ComingSoon />} />
        <Route path="/signup" element={!user ? <Signup /> : <Navigate to="/" />} />
        <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
      </Routes>
    </Router>
    
  );
};

export default App;

