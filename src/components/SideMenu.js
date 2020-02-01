import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ItFl from "../images/pdf/it.png";
import GbFl from "../images/pdf/gb.png";
import RuFl from "../images/pdf/ru.png";
import JapFl from "../images/pdf/jp.png";

import { LangContext } from "../Context.js/LangContext";
import ".././navbar.css";
import ".././vendor.css";
const words = {
  italian: {
    dedicato: "Dedicato a Walter Casalini",
    home: "Home",
    about: "About",
    menu: "Menu",
    gallery: "Gallery",
    contact: "Contact"
  },
  english: {
    dedicato: "Dedicated to Walter Casalini",
    home: "Home",
    about: "About",
    menu: "Menu",
    gallery: "Gallery",
    contact: "Contact"
  },
  russian: {
    dedicato: "Посвящается Вальтеру Казалини",
    home: "Главная",
    about: "О нас",
    menu: "Меню",
    gallery: "Галлерея",
    contact: "Контакты"
  },
  japaneese: {
    dedicato: "ヴァルテル・カサリーニへ",
    home: "ホーム",
    about: "アバウト",
    menu: "メニュー",
    gallery: "ギャラリー",
    contact: "お問い合わせ"
  }
};
const SideMenu = () => {
  const { language, changeLanguage } = useContext(LangContext);
  const { dedicato, home, about, menu, gallery, contact } = words[language];
  return (
    <div className="entry__menu show">
      <nav>
        <ul>
          <li>
            <Link to="/" className="linknavbar">
              {home}
            </Link>
          </li>
          <li>
            <Link to="/about" className="linknavbar">
              {about}
            </Link>
          </li>
          <li>
            <Link to="/menu" className="linknavbar">
              {menu}
            </Link>
          </li>
          <li>
            <Link to="/gallery" className="linknavbar">
              {gallery}
            </Link>
          </li>
          <li>
            <Link to="/contact" className="linknavbar">
              {contact}
            </Link>
          </li>
        </ul>
      </nav>
      <div className="more__option"></div>
      <span>{dedicato}</span>
      <div className="language">
        <img
          src={ItFl}
          alt=""
          onClick={() => changeLanguage("italian")}
          className="ita"
        />
        <img
          src={GbFl}
          alt=""
          onClick={() => changeLanguage("english")}
          className="eng"
        />
        <img
          src={RuFl}
          alt=""
          onClick={() => changeLanguage("russian")}
          className="rus"
        />
        <img
          src={JapFl}
          alt=""
          onClick={() => changeLanguage("japaneese")}
          className="jap"
        />
      </div>
    </div>
  );
};

export default SideMenu;
