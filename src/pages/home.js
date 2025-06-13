import React, { useState, useEffect } from 'react';
import './home.css';
import dentalHero from './assets/dental-hero.jpg';

import makkaLogo from './assets/makka.png';
import megaLogo from './assets/mega.png';
import sihaLogo from './assets/alfurat.png';

const logos = [
  { id: 1, src: makkaLogo, alt: 'Makka Dental' },
  { id: 2, src: megaLogo, alt: 'Mega Dental' },
  { id: 3, src: sihaLogo, alt: 'Al Furaat Dental' },
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % logos.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + logos.length) % logos.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % logos.length);
  };

  return (
    <div className="home">
      <div className="hero-section">
        <img src={dentalHero} alt="Dental Hero" className="hero-image" />
        <div className="hero-text">
          <h1>Welcome to Our Dental Clinics</h1>
          <p>Professional care across all branches of Mogadishu</p>
        </div>
      </div>

                  <h2> Our branches</h2>
      {/* Horizontal Flex Slider */}
      <div className="logo-slider-row">
        <button className="slider-arrow" onClick={handlePrev}>
          &#10094;
        </button>
      
        <img
          src={logos[currentIndex].src}
          alt={logos[currentIndex].alt}
          className="logo-image"
        />

        <button className="slider-arrow" onClick={handleNext}>
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Home;
