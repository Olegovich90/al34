import React, { useContext } from "react";
import { LangContext } from "../Context.js/LangContext";
import foto from "../images/Pages/contact.jpeg";
import Validation from "../components/Validation";
import DecorationT from "../images/side/decortop.jpg";
import DecorationB from "../images/side/decorbot.png";

const words = {
  italian: {
    whereweare: "Dove siamo",
    indiriz: `Ristorante al 34`,
    via: `Via Mario de’ Fiori 34, (P.zza di Spagna)`,
    ind: "00187 Roma",
    orari: `Orari di apertura`,
    mes1: "Aperto tutti i giorni",
    monday: "Lunedì",
    tuesday: "Martedì - Domenica"
  },
  english: {
    whereweare: "Where we are",
    indiriz: `Ristorante al 34`,
    via: `Via Mario de’ Fiori 34, (P.zza di Spagna)`,
    ind: "00187 Roma",
    orari: ` Opening hours`,
    mes1: "Open every day",
    monday: "Monday",
    tuesday: "Tuesday - Sunday"
  },
  russian: {
    indiriz: `Ristorante al 34`,
    via: `Via Mario de’ Fiori 34, (P.zza di Spagna)`,
    ind: "00187 Roma",
    orari: `Время работы`,
    mes1: "Открыт каждый день",
    monday: "Понедельник",
    tuesday: "Вторник - Воскресенье"
  },
  japaneese: {
    whereweare: "住所",
    indiriz: `リストランテ・アル・トレンタクアットロ`,
    via: `ヴィア・マリオ・デ・フィオーリ　３４番　（スペイン広場）`,
    ind: "００１８７ローマ",
    orari: `営業時間`,
    mes1: "毎日オープン",
    monday: "月",
    tuesday: "火～日"
  }
};
const Contact = () => {
  const { language } = useContext(LangContext);
  const { via, ind, indiriz, whereweare, orari, mes1, monday, tuesday } = words[
    language
  ];
  return (
    <div>
      <img src={foto} alt="" className="hero__page hero__page--contact" />
      <div className="grid-container">
        <div className="page__container page__container--contact">
          <div className="grid-x">
            <div className="large-9 medium-7 small-12 column">
              <div className="main__content">
                <div className="grid-x">
                  <div className="large-6 medium-6 small-12 column">
                    <h2>{whereweare}</h2>
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
                  <div className="large-6 medium-6 small-12 column">
                    <h2>{orari}</h2>
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
                  </div>
                </div>
                <div className="clear__section"></div>
                <div className="where__contact">
                  <div>
                    <div style={{ width: "100%" }}>
                      <iframe
                        title="contactmap"
                        width="100%"
                        height="250"
                        src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=Al%2034%2C%20restaurant%2C%20Rome%2C%20Italy+(Ristorante%20al%2034)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
                        frameBorder="0"
                        scrolling="no"
                        marginHeight="0"
                        marginWidth="0"
                      >
                        <a href="https://www.maps.ie/coordinates.html">
                          find my coordinates
                        </a>
                      </iframe>
                    </div>
                    <br />
                  </div>
                </div>
              </div>
            </div>

            <div className="large-3 medium-5 small-12 column">
              <div className="sidebar__content">
                <img src={DecorationT} alt="" />
                <Validation />
                <img src={DecorationB} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
