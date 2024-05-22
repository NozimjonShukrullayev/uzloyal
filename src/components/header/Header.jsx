import { Link } from "react-router-dom";
import { PiTelegramLogoBold } from "react-icons/pi";
import { AiOutlineFacebook } from "react-icons/ai";
import { GrInstagram } from "react-icons/gr";
import logo from "../../assets/static/img/logo.png";
import "./Header.css";

function Header() {
  return (
    <div id="header">
      <div className="container">
        <div className="header__grid">
          <div className="logo__box">
            <img src={logo} alt="logo" />
          </div>
          <div className="header__info__language">
            <div className="header__socials">
              <a className="social__media" href="#">
                <PiTelegramLogoBold />
              </a>
              <a className="social__media" href="#">
                <AiOutlineFacebook />
              </a>
              <a className="social__media" href="#">
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
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAApgAAAKYB3X3/OAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAESSURBVEiJ7ZWxSsRQEEXPTF7MGlZYRVhYCzs/wcKf8VfEwsZqf0Kws/cLFDt/wCZiQNDVjVk2yRsL3YBdUjzExdvNK+69w+XOEzMjJDQo+1oIuNMrbgTGACqwt+2T/E2Xy5o2HKdI7TGnCEDt6RScQe4EDlfkx0cL7h4c2cvPxUapZ1Yq6YYRR8bzvNviAvtuNUxGnjgy7rP2icQZSQwiYPZlQqQTd4vWytNMEYGDcQPA1sBovFDVECmogqoR9UzNDcvXdri8hsluxU7tiT4ErQxVcAZpAXEDLoJh2V1A5mfTrJ+nfpCiKIJW+e8XLXyT/fT8MaSAnFwMgobs3jcXIfnXIWTglu9zHQC5/P/Jvy7wCe5MURzvEV3pAAAAAElFTkSuQmCC" alt="" />
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAApgAAAKYB3X3/OAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAESSURBVEiJ7ZWxSsRQEEXPTF7MGlZYRVhYCzs/wcKf8VfEwsZqf0Kws/cLFDt/wCZiQNDVjVk2yRsL3YBdUjzExdvNK+69w+XOEzMjJDQo+1oIuNMrbgTGACqwt+2T/E2Xy5o2HKdI7TGnCEDt6RScQe4EDlfkx0cL7h4c2cvPxUapZ1Yq6YYRR8bzvNviAvtuNUxGnjgy7rP2icQZSQwiYPZlQqQTd4vWytNMEYGDcQPA1sBovFDVECmogqoR9UzNDcvXdri8hsluxU7tiT4ErQxVcAZpAXEDLoJh2V1A5mfTrJ+nfpCiKIJW+e8XLXyT/fT8MaSAnFwMgobs3jcXIfnXIWTglu9zHQC5/P/Jvy7wCe5MURzvEV3pAAAAAElFTkSuQmCC" alt="" />
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAApgAAAKYB3X3/OAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAESSURBVEiJ7ZWxSsRQEEXPTF7MGlZYRVhYCzs/wcKf8VfEwsZqf0Kws/cLFDt/wCZiQNDVjVk2yRsL3YBdUjzExdvNK+69w+XOEzMjJDQo+1oIuNMrbgTGACqwt+2T/E2Xy5o2HKdI7TGnCEDt6RScQe4EDlfkx0cL7h4c2cvPxUapZ1Yq6YYRR8bzvNviAvtuNUxGnjgy7rP2icQZSQwiYPZlQqQTd4vWytNMEYGDcQPA1sBovFDVECmogqoR9UzNDcvXdri8hsluxU7tiT4ErQxVcAZpAXEDLoJh2V1A5mfTrJ+nfpCiKIJW+e8XLXyT/fT8MaSAnFwMgobs3jcXIfnXIWTglu9zHQC5/P/Jvy7wCe5MURzvEV3pAAAAAElFTkSuQmCC" alt="" />
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAApgAAAKYB3X3/OAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAESSURBVEiJ7ZWxSsRQEEXPTF7MGlZYRVhYCzs/wcKf8VfEwsZqf0Kws/cLFDt/wCZiQNDVjVk2yRsL3YBdUjzExdvNK+69w+XOEzMjJDQo+1oIuNMrbgTGACqwt+2T/E2Xy5o2HKdI7TGnCEDt6RScQe4EDlfkx0cL7h4c2cvPxUapZ1Yq6YYRR8bzvNviAvtuNUxGnjgy7rP2icQZSQwiYPZlQqQTd4vWytNMEYGDcQPA1sBovFDVECmogqoR9UzNDcvXdri8hsluxU7tiT4ErQxVcAZpAXEDLoJh2V1A5mfTrJ+nfpCiKIJW+e8XLXyT/fT8MaSAnFwMgobs3jcXIfnXIWTglu9zHQC5/P/Jvy7wCe5MURzvEV3pAAAAAElFTkSuQmCC" alt="" />
              {/* <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgA…XMnzqMCGF/F+xHunh6g+JRCqV8GnIrAAAAABJRU5ErkJggg==" alt="" />
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgA…/JVgGraARC4xWLWlZL28owEz8wnD3LAAAAABJRU5ErkJggg==" alt="" />
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgA…qAeMNBvXRomKYWzAKBh4AANS2DCY8GhUuAAAAAElFTkSuQmCC" alt="" />
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgA…8FlALDP2iguYWjIKBBwAjgldkxe732wAAAABJRU5ErkJggg==" alt="" /> */}
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
        <Link className="navbar__link" to={"/"}>YANGILIKLAR</Link>
        <Link className="navbar__link" to={"/"}>YURIDIK KUTUBXONA</Link>
        <Link className="navbar__link" to={"/"}>XIZMATLAR</Link>
        <Link className="navbar__link" to={"/"}>HUJJAT NAMUNALARI</Link>
      </div>
    </div>
  )
}

export default Header;