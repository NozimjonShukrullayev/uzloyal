import { Link } from "react-router-dom";
// import { useQuery } from "react-query";
import { PiTelegramLogoBold } from "react-icons/pi";
import { AiOutlineFacebook } from "react-icons/ai";
import { GrInstagram } from "react-icons/gr";
import { FiMenu } from "react-icons/fi";
import { FaXmark } from "react-icons/fa6";
import logo from "../../assets/static/img/logo.png";
import "./Header.css";
import { useState } from "react";

// async function getServices() {
//   // const response = await fetch("https://");
// }

function Header() {
  // const { isLoading, error, data } = useQuery("services", () => getServices);

  const [isActiveMenu, setIsActiveMenu] = useState(false);

  const openMenu = () => {
    setIsActiveMenu(true);
  }
  const closeMenu = () => {
    setIsActiveMenu(false);
  }

  return (
    <>
      <div id="header">
        <div className="container">
          <div className="header__grid">
            <div className="logo__box">
              <Link>
                <img src={logo} alt="logo" />
              </Link>
            </div>
            <div className="header__info__language">
              <div className="header__socials">
                <a className="social__media" href="https://t.me/uz_loyal" target={"_blank"}>
                  <PiTelegramLogoBold />
                </a>
                <a className="social__media" href="https://www.facebook.com/people/Advokat-uzbekistan-24/61554269997134/?mibextid=ZbWKwL" target={"_blank"}>
                  <AiOutlineFacebook />
                </a>
                <a className="social__media" href="https://www.instagram.com/advokat_uzbekistan_24/" target={"_blank"}>
                  <GrInstagram />
                </a>
                <a className="phone" href="tel:+998901319544">
                  +998 90 131 95 44
                </a>
              </div>
              <div className="header__work__time">
                <span>Dushanba-Juma, 09:00 dan 18:00 gacha Toshkent</span>
              </div>
              <div className="languages">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAApgAAAKYB3X3/OAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAESSURBVEiJ7ZWxSsRQEEXPTF7MGlZYRVhYCzs/wcKf8VfEwsZqf0Kws/cLFDt/wCZiQNDVjVk2yRsL3YBdUjzExdvNK+69w+XOEzMjJDQo+1oIuNMrbgTGACqwt+2T/E2Xy5o2HKdI7TGnCEDt6RScQe4EDlfkx0cL7h4c2cvPxUapZ1Yq6YYRR8bzvNviAvtuNUxGnjgy7rP2icQZSQwiYPZlQqQTd4vWytNMEYGDcQPA1sBovFDVECmogqoR9UzNDcvXdri8hsluxU7tiT4ErQxVcAZpAXEDLoJh2V1A5mfTrJ+nfpCiKIJW+e8XLXyT/fT8MaSAnFwMgobs3jcXIfnXIWTglu9zHQC5/P/Jvy7wCe5MURzvEV3pAAAAAElFTkSuQmCC" alt="" />
                <img src="https://cdn-icons-png.flaticon.com/128/555/555417.png" alt="" />
                <img src="https://cdn-icons-png.flaticon.com/128/5111/5111624.png" alt="" />
                <img src="https://cdn-icons-png.flaticon.com/128/555/555451.png" alt="" />
                <img src="https://cdn-icons-png.flaticon.com/128/555/555560.png" alt="" />
              </div>
            </div>
            <div className="header__top__navbar">
              <Link className="top__nav__link active" to={'/contact'}>Maslahat olish</Link>
              <Link className="top__nav__link" to={'/'}>Asosiy</Link>
              <Link className="top__nav__link" to={'/about'}>Biz haqimizda</Link>
              <Link className="top__nav__link" to={'/contact'}>Bog'lanish</Link>
              <Link className="top__nav__link" to={'/blog'}>Bizning maqolalar</Link>
            </div>
          </div>
        </div>
        <div className="header__navbar">
          <div className="container">
            <button className={`menu__toggle`} onClick={openMenu}><FiMenu /></button>
          </div>
          <Link className="navbar__link" to={"/news"}>YANGILIKLAR</Link>
          <Link className="navbar__link" to={"/library"}>YURIDIK KUTUBXONA</Link>
          <Link className="navbar__link" to={"/services"}>XIZMATLAR</Link>
          <Link className="navbar__link" to={"/resources"}>HUJJAT NAMUNALARI</Link>
        </div>
      </div>
      <div className={`media__menu ${isActiveMenu && 'active'}`}>
        <button className="menu__x" onClick={closeMenu}><FaXmark /></button>
        <Link onClick={closeMenu} className="menu__link" to={'/'}>Asosiy</Link>
        <Link onClick={closeMenu} className="menu__link" to={'/about'}>Biz haqimizda</Link>
        <Link onClick={closeMenu} className="menu__link" to={"/services"}>Xizmatlar</Link>
        <Link onClick={closeMenu} className="menu__link" to={'/blog'}>Bizning maqolalar</Link>
        <Link onClick={closeMenu} className="menu__link" to={"/news"}>Yangiliklar</Link>
        <Link onClick={closeMenu} className="menu__link" to={'/faq'}>Savollarga Javoblar</Link>
        <Link onClick={closeMenu} className="menu__link" to={'/contact'}>Bog'lanish</Link>
      </div>
    </>
  )
}

export default Header;