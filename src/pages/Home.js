import React, { useContext } from "react";
import foto from "../images/Pages/home.jpeg";
import CocktailMenu from "../images/pdf/CocktailMenu.pdf";
import Cocktail from "../images/side/Cocktail.jpg";
import DecorationT from "../images/side/decortop.jpg";
import DecorationB from "../images/side/decorbot.png";
import Accademia from "../images/side/Accademia.jpg";
import GruppoNew from "../images/side/gruppo-new.jpg";
import { Link } from "react-router-dom";
import { LangContext } from "../Context.js/LangContext";
import ".././main.css";
import ".././vendor.css";
const words = {
  italian: {
    title1: "Ristorante al 34",
    title2: "La nostra cucina",
    article1: `Tutto è iniziato nel 1968, anno in cui Walter Casalini, dopo aver ceduto lo storico albergo di famiglia, l'Hotel Internazionale di Milano Marittima, aperto nel dopoguerra da pioniere della riviera romagnola, ha dato vita, a Roma, nella storica Via Mario dè Fiori, al Ristorante 'Al 34'.
    Insieme alla moglie Maria Luisa e al figlio Nicola, creatore della gran parte dei magnifici piatti che potete trovare qui da noi, il Ristorante viene portato avanti fin d'allora con cura, tradizione ed innovazione.`,
    article2: `La nostra cucina è quella tradizionale, romana ed italiana, ma nello stesso tempo anche molto creativa; questo grazie all'attenzione dei proprietari e alla genialità del figlio Nicola Casalini, i quali hanno saputo stare al passo coi tempi, cercando di poter dare al cliente la più alta e vasta scelta dei prodotti, senza però influire mai sulla qualità.

    La politica del '34, da quando ha aperto nel 1968 ad oggi, è stata sempre quella di offrire al cliente "il meglio" a prezzi ragionevoli. Il nostro Menu offre davvero un’infinità di piatti.`,
    readMore: "Continua",
    whereweare: "Dove siamo",
    message: "Dal 13 Gennaio al 10 Febbraio il ristorante chiude per lavori",
    menudownload: "Scarica il nuovo menu dei cocktail e distillati!",
    indiriz: `Ristorante al 34`,
    via: `Via Mario de’ Fiori 34, (P.zza di Spagna)`,
    ind: "00187 Roma"
  },
  english: {
    title1: "Ristorante al 34",
    title2: "Our specialities",
    article1: `All has started in 1968, in that year Mr. Walter Casalini sold the Hotel Internazionale, located on the Romagna Adriatic Coast “Milano Marittima”, that he founded as a pioneer after the second world war. He then decided to move to Rome and founded the Restaurant Al 34, in the historical center of the city in Via Mario de Fiori.

    Today the restaurant keeps running it’s activity maintained by Maria Luisa and the son, Nicola, a creator of a lot of the dishes we offer. They maintain on the restaurant with great care and respecting traditions while also innovating.`,
    article2: ` Our cuisine can be described as traditional italian and roman but at the same time very creative. All this is owing to Nicola Casalini’s genius mind and his constant attention of the owners to the client’s satisfaction, always having a wide variety of dishes keeping always the high quality standards.

    The policy of the Ristorante al 34 is the same since it’s opening, we offer to the client the best at a reasonable price.In our menu you can find plenty of dishes to choose from...`,
    readMore: "About",
    whereweare: "Where we are",
    message:
      "From January 13th to February 10th the restaurant will be closed for renovations",
    menudownload: "Download the new cocktail and spirits menu!",
    indiriz: `Ristorante al 34`,
    via: `Via Mario de’ Fiori 34, (P.zza di Spagna)`,
    ind: "00187 Roma"
  },
  russian: {
    title1: "Ristorante al 34",
    title2: "О нашей кухне",
    article1: `Всё началось в далёком 1968 году, когда Вальтер Казалини решил оставить свой феноменальный отель «Интернациональ» на живописном побережье адриатики Милано-Мариттима (Романья), открытый им в послевоенные годы, и дал жизнь новому ресторану «34» в самом сердце Рима, на улице Марио де Фиори. Сегодня ресторан «34» всё также продолжает радовать своих посетителей благодаря супруге Вальтера Марие Луизе и сыну Николе - создателю большинства восхитительных блюд, которые можно у нас отведать.`,
    article2: `Кухню ресторана «34» можно охарактеризовать как традиционно римскую и итальянскую, в то же время всегда очень творческую, благодаря неустанному вниманию хозяев и изобретательности Николы Казалини. Эти люди всегда старались предложить клиенту обширный выбор блюд, при этом никогда не снижая их качества. С самого открытия ресторана «34» в 1968 году его политика остается прежней и по сей день - это постоянное стремление предложить лучшее по умеренной цене.`,
    readMore: "Продолжить",
    whereweare: "Наш адрес",
    message: "С 13 января по 10 февраля ресторан будет закрыт на ремонт.",
    menudownload:
      "Скачайте новое меню коктейлей и спиртных напитков ресторана 34 !",
    indiriz: `Ristorante al 34`,
    via: `Via Mario de’ Fiori 34, (P.zza di Spagna)`,
    ind: "00187 Roma"
  },
  japaneese: {
    title1: "リストランテ　アル・トレンタクアットロ",
    title2: "料理",
    article1: `すべては１９６８年に始まった。当時、エミリア・ローマニャの海岸沿いで戦後に建設された、ミラノ・マリッティマのホテル・インテルナツォナーレを売ったヴァルテル　カサリーニは、ローマで長い歴史を持つマリオ・デ・フィオーリ通りで「リストランテ　アル・トレンタクアットロ」をオープン。

    妻のマリア・ルイサと、ここで味わえる様々なメニューの大部分を創作したオーナーの息子、ニコーラの協力で、レストランは当時から伝統と改新をもとに営まれてきました。`,
    article2: `オーナーと息子の二コラ　カサリーニを中心として、ローマとイタリアの伝統的な料理をベースに、常に新しいビジョンを持って良質な材料とバラエティ豊かなメニューでお客様をお迎えいたしております。

    １９６８年開業当時から、今日に渡って「トレンタクアットロ」のポリシーは、妥当な価格設定ながら「ベスト」を尽くす事です。`,
    readMore: "続け",
    whereweare: "住所",
    message: "1月13日から2月10日まで、レストランは改装のため休業します",
    menudownload:
      "新しいレストラン34のカクテルメニューをダウンロードしてください！",
    indiriz: `リストランテ・アル・トレンタクアットロ`,
    via: `ヴィア・マリオ・デ・フィオーリ　３４番　（スペイン広場）`,
    ind: "００１８７ローマ"
  }
};
const Home = () => {
  const { language } = useContext(LangContext);
  const {
    article1,
    article2,
    readMore,
    whereweare,
    message,
    title1,
    title2,
    menudownload,
    indiriz,
    via,
    ind
  } = words[language];
  return (
    <div>
      <div>
        <img src={foto} alt="" className="hero__page hero__page--home" />
      </div>

      <div className="grid-container">
        <div className="page__container page__container--home">
          <div className="grid-x">
            <div className="large-9 medium-7 small-12 column">
              <div className="main__content">
                <div className="grid-x">
                  <div className="large-12 medium-12 small-12 column">
                    <h2>{message}</h2>
                    <hr />
                  </div>
                  <div className="large-6 medium-12 small-12 column">
                    <h2>{title1}</h2>
                    <p>{article1}</p>
                    <Link to="/about" className="go__to-page">
                      <button style={{ color: "white" }}>{readMore}</button>
                    </Link>
                  </div>
                  <div className="large-6 medium-12 small-12 column">
                    <h2>{title2}</h2>
                    <p>{article2}</p>

                    <Link to="/menu" className="go__to-page">
                      <button style={{ color: "white" }}>{readMore}</button>
                    </Link>
                  </div>
                </div>
                <div className="clear__section"></div>
                <div className="where__homepage">
                  <div className="grid-x">
                    <div className="large-6 medium-6 small-12 column">
                      <h2>{whereweare}</h2>
                      <div>
                        <div>
                          <div style={{ width: "95%" }}>
                            <iframe
                              title="homemap"
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
                    <div className="large-6 medium-6 small-12 column">
                      <h2 className="is--transparent">{whereweare}</h2>
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
                </div>
              </div>
            </div>
            <div className="large-3 medium-5 small-12 column">
              <div className="sidebar__content">
                <img src={DecorationT} alt="" />
                <div className="image--gallery">
                  <img src={GruppoNew} alt="" width="500px"></img>
                  <a
                    href={CocktailMenu}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={Cocktail} alt="" width="500px"></img>
                    <h6 className="is--button">{menudownload}</h6>
                  </a>
                  <img src={Accademia} alt=""></img>
                  <img src={DecorationB} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
