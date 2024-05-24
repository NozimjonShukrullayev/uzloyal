import "./Contact.css";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-about-cards">
        <div className="contact-card">
          <div className="contact-card-icons">
            <IoLocation className="contact-icon" />
          </div>
          <div className="contact-card-texts">
            <h3 className="contact-title">Ofis Manzili</h3>
            <span className="contact-description">{`Toshkent shahar, Yakkasaroy tumani, Zanjirbog' tor ko'chasi, 7-uy.`}</span>
          </div>
        </div>
        <div className="contact-card">
          <div className="contact-card-icons">
            <MdEmail className="contact-icon" />
          </div>
          <div className="contact-card-texts">
            <h3 className="contact-title">Elektron Pochta</h3>
            <span className="contact-description">loyalxat@gmail.com</span>
          </div>
        </div>
        <div className="contact-card">
          <div className="contact-card-icons">
            <FaPhoneVolume className="contact-icon" />
          </div>
          <div className="contact-card-texts">
            <h3 className="contact-title">Telefon raqami</h3>
            <span className="contact-description">+998901319544</span>
          </div>
        </div>
      </div>
      <div className="contact-location-section">
        <div className="contact-location-card">
          <div className="location-titles">
            <h3 className="location-title">Biror savolingiz bormi?</h3>
            <span className="location-desc">{`Biz bilan bog'laning, sizga yordam beramiz!`}</span>
          </div>
          <div className="location-form">
            <form action="">
              <div className="form-inputs">
                <input
                  type="text"
                  placeholder="Ismingiz"
                  className="form-input"
                />
                <input
                  type="email"
                  placeholder="Emailingiz"
                  className="form-input"
                />
                <input
                  type="text"
                  placeholder="Telefon raqamingiz"
                  className="form-input"
                />
              </div>
              <textarea
                placeholder="Muammongizni batafsil yozing"
                rows={10}
                className="form-textarea form-input"
              ></textarea>
              <div className="form-buttons">
                <button className="form-btn">{`Jo'natish`}</button>
              </div>
            </form>
            <div className="location-iframe-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d668.9057100008553!2d69.26127671191493!3d41.298017121905744!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDE3JzUxLjciTiA2OcKwMTUnNDAuOCJF!5e0!3m2!1sen!2sus!4v1716547356394!5m2!1sen!2sus"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
