import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import ItFl from "../images/pdf/it.png";
import GbFl from "../images/pdf/gb.png";
import RuFl from "../images/pdf/ru.png";
import JapFl from "../images/pdf/jp.png";
import logo from "../images/Pages/logo.png";
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
const Navbar = () => {
  const { language, changeLanguage } = useContext(LangContext);
  const { dedicato, home, about, menu, gallery, contact } = words[language];
  const [clicked, setClicked] = useState(false);
  const menuClick = () => {
    setClicked(!clicked);
  };
  return (
    <div>
      <div className="sticky-wrapper" id="sticky-wrapper">
        <div className="header__site">
          <div className="grid-container">
            <div className="grid-x">
              <div className="large-12 medium-12 small-12 column">
                <header>
                  <img src={logo} alt="" className="logo" />

                  <div
                    className={clicked ? "mobile__menu shrink" : "mobile__menu"}
                    onClick={menuClick}
                  >
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                  </div>
                  <div className="content__nav">
                    <div className="more__option">
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
                  </div>
                </header>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={clicked ? "entry__menu show" : "entry__menu"}
        onClick={menuClick}
      >
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
        <div className="more__option">
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
      </div>
    </div>
  );
};

export default Navbar;
