import React, { useContext } from "react";
import { LangContext } from "../Context.js/LangContext";
import foto from "../images/Pages/gallery.jpeg";
import { gallery } from "../images/Gallery/Data";

const words = {
  italian: {
    title: "Galleria",
    message: `Vi presentiamo il locale e alcuni dei nostri piatti.`,
    nicola: `Nicola`
  },
  english: {
    title: "Gallery",
    message: `We present you a place and some of our plates.`,
    nicola: ` Nicola`
  },
  russian: {
    title: "Галерея",

    message: `Представляем Вам наше место и некоторые из наших блюд`,
    nicola: `Никола`
  },
  japaneese: {
    title: "ギャラリー",

    message: `レストラン内と一部メニューの紹介`,
    nicola: `Nicola`
  }
};

const Gallery = () => {
  const fotos = gallery.map(foto => (
    <div className="large-3 medium-3 small-12 column" key={foto.id}>
      <a href={foto.url} target="_blank" rel="noopener noreferrer">
        <div
          className="gallery__item"
          style={{
            backgroundImage: `url(${foto.url})`
          }}
        ></div>
      </a>
    </div>
  ));
  const { language } = useContext(LangContext);
  const { title, message } = words[language];
  return (
    <div>
      <img src={foto} alt="" className="hero__page hero__page--gallery" />
      <div className="grid-container">
        <div className="page__container page__container--home">
          <div className="grid-x">
            <div className="large-12 medium-12 small-12 column">
              <div className="main__content">
                <div className="grid-x">
                  <div className="large-12 medium-12 small-12 column">
                    <h2> {title}</h2>
                    <p>{message}</p>
                  </div>
                </div>
                <div className="container__gallery">
                  <div className="grid-x">{fotos}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
