import { FaFacebookF } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div id="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand__info">
            <h3 className="brand__title">LOYAL advokatlik byurosi</h3>
            <p className="brand__description">Biz Sizga mukammal yordam bera oladigan eng yaxshi yuridik firmamiz!</p>
            <div className="footer__social__media">
              <a href="https://www.facebook.com/people/Advokat-uzbekistan-24/61554269997134/?mibextid=ZbWKwL" target={"_blank"}><span><FaFacebookF className="footer__social" /></span></a>
              <a className="social__media" href="https://t.me/uz_loyal" target={"_blank"}><span><FaTelegramPlane className="footer__social" /></span></a>
              <a className="social__media" href="https://www.instagram.com/advokat_uzbekistan_24/" target={"_blank"}><span><FaInstagram className="footer__social" /></span></a>
            </div>
          </div>
          <div className="footer__links">
            <h4>Havolalar</h4>
            <ul>
              <li><Link className="footer__link" to={"/"}>Asosiy</Link></li>
              <li><Link className="footer__link" to={"/about"}>Biz haqimizda</Link></li>
              <li><Link className="footer__link" to={"/services"}>Xizmatlar</Link></li>
              <li><Link className="footer__link" to={"/blog"}>Bizning maqolalar</Link></li>
              <li><Link className="footer__link" to={"/news"}>Yangiliklar</Link></li>
              <li><Link className="footer__link" to={"/resources"}>Hujjat Namunalari</Link></li>
              <li><Link className="footer__link" to={"/faq"}>Savollarga javoblar</Link></li>
              <li><Link className="footer__link" to={"/contact"}>Bog'lanish</Link></li>
            </ul>
          </div>
          <div className="footer__services">
            <h4>Xizmatlar</h4>
            <ul>
              <li><Link className="footer__link" to={"/contact"}>Oila huquqi</Link></li>
              <li><Link className="footer__link" to={"/contact"}>Shaxsiy zarar</Link></li>
              <li><Link className="footer__link" to={"/contact"}>Shaxsiy zarar</Link></li>
              <li><Link className="footer__link" to={"/contact"}>Jinoyat huquqi</Link></li>
              <li><Link className="footer__link" to={"/contact"}>Ta'lim huquqi</Link></li>
              <li><Link className="footer__link" to={"/contact"}>Biznes huquqi</Link></li>
              <li><Link className="footer__link" to={"/contact"}>Uy-joy huquqi</Link></li>   
            </ul>
          </div>
        </div>
        <hr />
        <div className="footer__copyright__terms">
          <div className="copyright">
            <p>Copyright © 2023 Loyal.uz. All rights reserved.</p>
          </div>
          <div className="terms">
            <Link className="terms__link" to={"/privacy"}>Privace & Policy</Link>
            <Link className="terms__link" to={"/terms"}>Terms</Link>
            <Link className="terms__link" to={"/about"}>About us</Link>
            <Link className="terms__link" to={"/faq"}>FAQ</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;