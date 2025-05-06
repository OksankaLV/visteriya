import React from 'react'
import aboutImage from '../assets/about.jpg'

const About: React.FC = () => {
  return <section className="about">
      <div className="about__container">
        <div className='about__text'>
        <h2>Про Visteriya</h2>
        <p>
          Привіт! Я, Ольга, засновниця бренду "Visteriya Foodflorist"
          Ми створюємо їстівні букети, що поєднують красу флористики та смачні інгредієнти.
          Кожен набір — індивідуальний, з турботою і натхненням.
        </p>
        <p>
          Обирайте для подарунка, події чи просто — щоб порадувати себе. 
          Замовлення 2-3 дні до дати. Доставка таксі, кур'єр.
        </p>
        <a href="/gallery" className='button'>Переглянути букети</a>
      </div>
      <div className='about__image'>
        <img src={aboutImage} alt="Засновниця Vistery" />
      </div>
      </div>
  </section>
}

export default About
