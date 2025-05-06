import { FaInstagram, FaViber, FaTiktok, FaPhoneAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="contact">
      <h2>Контакти</h2>
      <p>Ми завжди на зв'язку! Оберіть зручний спосіб зв’язатися з нами.</p>
      <div className="contact__contacts">
        <a href="https://instagram.com/visteriya_foodflorist" target="_blank" rel="noopener noreferrer">
          <FaInstagram /> Instagram
        </a>
        <a href="viber://chat?number=+380959283556" target="_blank" rel="noopener noreferrer">
          <FaViber /> Viber
        </a>
        <a href="https://www.tiktok.com/@olha_tovkun?_t=ZM-8vrCPTkqErN" target="_blank" rel="noopener noreferrer">
          <FaTiktok /> TikTok
        </a>
        <a href="tel:+380959283556">
          <FaPhoneAlt /> Подзвонити
        </a>
      </div>
    </section>
  );
};

export default Contact;