import React from 'react'
import logo from '../assets/logo.jpg'

const Hero: React.FC = () => {
  return (
  <section className="hero">
    <div className='hero__content'>
      <img src={logo} alt="Visteriya Foodflorist logo" className='hero__logo' />
      <h1 className='hero__title'>Visteriya Foodflorist</h1>
      <p className='hero__subtitle'>Їстівні букети, створені з любов'ю</p>
      <a href="https://www.instagram.com/visteriya_foodflorist/" target="_blank" className='hero__btn'>
      Instagram</a>
    </div>
    <svg className="hero__wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    <path fill="#f0f6ff" fillOpacity="1" d="M0,224L80,202.7C160,181,320,139,480,144C640,149,800,203,960,208C1120,213,1280,171,1360,149.3L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
  </svg>
  </section>
  );
};

export default Hero