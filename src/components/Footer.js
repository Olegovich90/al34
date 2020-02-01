import React, { useContext } from "react";
import { LangContext } from "../Context.js/LangContext";
import DecorationT from "../images/side/decortop.jpg";
import ".././footer.css";

const words = {
  italian: {
    indiriz: `Ristorante al 34`,
    via: `Via Mario de’ Fiori 34, (P.zza di Spagna)`,
    ind: "00187 Roma",
    orari: `Orari di apertura`,
    mes1: "Aperto tutti i giorni",
    monday: "Lunedì",
    tuesday: "Martedì - Domenica",
    social: "Social",
    partners: "Partners",
    contacts: "Contatti"
  },
  english: {
    indiriz: `Ristorante al 34`,
    via: `Via Mario de’ Fiori 34, (P.zza di Spagna)`,
    ind: "00187 Roma",
    orari: ` Opening hours`,
    mes1: "Open every day",
    monday: "Monday",
    tuesday: "Tuesday - Sunday",
    social: "Social",
    partners: "Partners",
    contacts: "Contacts"
  },
  russian: {
    indiriz: `Ristorante al 34`,
    via: `Via Mario de’ Fiori 34, (P.zza di Spagna)`,
    ind: "00187 Roma",
    orari: `Время работы`,
    mes1: "Открыт каждый день",
    monday: "Понедельник",
    tuesday: "Вторник - Воскресенье",
    social: "Мы в сети",
    partners: "Партнёры",
    contacts: "Контакты"
  },
  japaneese: {
    indiriz: `リストランテ・アル・トレンタクアットロ`,
    via: `ヴィア・マリオ・デ・フィオーリ　３４番　（スペイン広場）`,
    ind: "００１８７ローマ",
    orari: `営業時間`,
    mes1: "毎日オープン",
    monday: "月",
    tuesday: "火～日",
    social: "ソーシャル",
    partners: "パートナー",
    contacts: "お問い合わせ"
  }
};
const Footer = () => {
  const { language } = useContext(LangContext);
  const {
    partners,
    indiriz,
    via,
    ind,
    social,
    orari,
    mes1,
    monday,
    tuesday,
    contacts
  } = words[language];
  return (
    <div className="footer">
      <div className="grid-container">
        <div className="grid-x">
          <div className="large-10 large-offset-1 medium-12 small-12 column">
            <div className="grid-x">
              <div className="large-4 medium-4 small-12 column">
                <div className="content__column">
                  <img src={DecorationT} alt="" />
                  <h6>{contacts}</h6>
                  <p>
                    {indiriz}
                    <br />
                    {via}
                    <br />
                    {ind}
                  </p>

                  <p>
                    "Tel. +39 06 6795091"
                    <br /> "Fax +39 06 6786980"
                  </p>
                  <p>
                    e-mail: "
                    <a href="mailto:ristorante34@yahoo.it">
                      ristorante34@yahoo.it
                    </a>
                  </p>
                </div>
              </div>
              <div className="large-4 medium-4 small-12 column">
                <div className="content__column">
                  <img src={DecorationT} alt="" />
                  <h6>{orari}</h6>
                  <ul>
                    <li>{mes1}</li>
                    <li>
                      {monday}
                      <span> 17.30 - 23.00</span>
                    </li>
                    <li>
                      {tuesday}
                      <span> 12.30 - 23.00</span>
                    </li>
                  </ul>
                  <h6>{social}</h6>
                  <a
                    href="https://www.facebook.com/AL34ROMA"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-facebook-official"></i>
                  </a>
                  <a
                    href="http://www.tripadvisor.it/Restaurant_Review-g187791-d696430-Reviews-Al_34-Rome_Lazio.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-tripadvisor"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/ristoranteal34/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-instagram"></i>
                  </a>
                </div>
              </div>

              <div className="large-4 medium-4 small-12 column">
                <div className="content__column">
                  <img src={DecorationT} alt="" />
                  <h6>{partners}</h6>
                  <a
                    href="http://www.gramigna.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="http://www.ristoranteal34.it/images/partner/gramigna.jpg"
                      alt=""
                    />
                  </a>
                  <a
                    href="http://www.nikisresort.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="http://www.ristoranteal34.it/images/partner/nikisresort.jpg"
                      alt=""
                    />
                  </a>
                  <a
                    href="https://www.annamariapasteria.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="http://www.ristoranteal34.it/images/partner/annamariapasteria.jpg"
                      alt=""
                    />
                  </a>
                  <a
                    href="http://www.siciliadivendicari.it/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="http://www.ristoranteal34.it/images/partner/sicilianew.jpg"
                      alt=""
                    />
                  </a>
                  <a
                    href="http://www.pietredifiume.it/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="http://www.ristoranteal34.it/images/partner/pietredifiume.jpg"
                      alt=""
                    />
                  </a>
                  <a href="https://www.facebook.com/Ary95.Makeup/">
                    <img
                      src="http://www.ristoranteal34.it/images/partner/ari-makeup.jpg"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
