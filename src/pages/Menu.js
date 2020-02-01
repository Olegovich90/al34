import React, { useContext } from "react";
import foto from "../images/Pages/menu.jpeg";
import Cuoco from "../images/side/cuoco.jpg";
import Staffduo from "../images/side/staffduo.jpg";
import DecorationT from "../images/side/decortop.jpg";
import DecorationB from "../images/side/decorbot.png";
import En from "../images/pdf/en.pdf";
import It from "../images/pdf/it.pdf";
import Fra from "../images/pdf/fra.pdf";
import Rus from "../images/pdf/rus.pdf";
import Jap from "../images/pdf/jap.pdf";
import ItFl from "../images/pdf/it.png";
import GbFl from "../images/pdf/gb.png";
import RuFl from "../images/pdf/ru.png";
import JapFl from "../images/pdf/jp.png";
import FrFl from "../images/pdf/fr.png";
import { LangContext } from "../Context.js/LangContext";
const words = {
  italian: {
    title1: "La nostra cucina",
    article1: `La nostra cucina è quella tradizionale, romana ed italiana, ma nello stesso tempo anche molto creativa; questo grazie all'attenzione dei proprietari e alla genialità del figlio Nicola Casalini, i quali hanno saputo stare al passo coi tempi, cercando di poter dare al cliente la più alta e vasta scelta dei prodotti, senza però influire mai sulla qualità.

    La politica del '34, da quando ha aperto nel 1968 ad oggi, è stata sempre quella di offrire al cliente "il meglio" a prezzi ragionevoli. Il nostro Menu offre davvero un’infinità di piatti: dagli sfiziosi antipasti alle infinite varietà di pasta, dalla carne al pesce, per poi passare ai piatti di mezzo, fino ad arrivare ai dolci, tutti fatti da noi; e alla carta dei vini, la quale, con l'aiuto di Renzo, storico cameriere del '34 insieme a Sandro, anche questa è stata perfezionata, offrendo al cliente ottimi prodotti da poter accompagnare alle portate.
    
    Offriamo tutti i piatti romani più rinomati e più tradizionali, ma ovviamente senza tralasciare tutto il resto, che spazia da piatti meridionali a quelli più nordici, mettendo così a disposizione una “cucina italiana a 360 gradi”. Come iniziare poi a degustare tutto questo, senza assaggiare prima la famosa “zuppa di pasta e ceci con le seppie”, ormai rinomata in tutto il mondo...
    
    Qui di seguito potete trovare il Menu nella lingua che preferite:`,
    nicola: `Nicola`
  },
  english: {
    title1: "Our specialities",
    article1: `Our cuisine can be described as traditional italian and roman but at the same time very creative. All this is owing to Nicola Casalini’s genius mind and his constant attention of the owners to the client’s satisfaction, always having a wide variety of dishes keeping always the high quality standards.

    The policy of the Ristorante al 34 is the same since it’s opening, we offer to the client the best at a reasonable price. In our menu you can find plenty of dishes to choose from: starting with specials appetizers, endless variety of pasta, and finishing with meat, fish and finest home-made desserts. We also offer a constantly improved wine list, while you can ask help to our fabulous waiters Renzo and Sandro.
    
    We serve not only traditional Roman cuisine but also well-known south and north italian dishes. We suggest you to start your exciting gastronomic journey by tasting our pasta soup with peas and cuttle fish, famouse all over the world.
    
    Download the Menu in your language:`,
    nicola: ` Nicola`
  },
  russian: {
    title1: "О нашей кухне",

    article1: ` Кухню ресторана «34» можно охарактеризовать как традиционно римскую и итальянскую, в то же время всегда очень творческую, благодаря неустанному вниманию хозяев и изобретательности Николы Казалини. Эти люди всегда старались предложить клиенту обширный выбор блюд, при этом никогда не снижая их качества.

    С самого открытия ресторана «34» в 1968 году его политика остается прежней и по сей день - это постоянное стремление предложить лучшее по умеренной цене. В нашем меню действительно множество разнообразных блюд, начиная с закусок и огромного выбора пасты, мясных и рыбных блюд, и заканчивая домашними десертами. За многие годы наша винная карта совершенствовалась, чтобы представить Вам выбор лучших вин, не без помощи легендарных официантов Ренцо и Сандро.
    
    «34» предлагает не только традиционные блюда римской кухни, но также и хорошо известные блюда северного и южного регионов Италии, что даёт право называть нашу кухню истинно итальянской. А начать увлекательное знакомство с нашим рестораном мы посоветуем с известного во всем мире легендарного супа с нутом и кальмарами.
    
    Загрузить меню на русском языке можно здесь:`,
    nicola: `Никола`
  },
  japaneese: {
    title1: "料理",

    article1: `オーナーと息子の二コラ　カサリーニを中心として、ローマとイタリアの伝統的な料理をベースに、常に新しいビジョンを持って良質な材料とバラエティ豊かなメニューでお客様をお迎えいたしております。

    １９６８年開業当時から、今日に渡って「トレンタクアットロ」のポリシーは、妥当な価格設定ながら「ベスト」を尽くす事です。 レストランのメニューには数多くの料理が載っています。食欲をそそられる前菜からバラエティに富む肉や魚のパスタ、メインディッシュ、デザートまで、全てが手作り。ワインのリストも、「トレンタクアットロ」で長年勤めているウエーターのサンドロの手によって改良され、それぞれの料理に最も合う最高のワインをお選びいただけます。
    
    伝統的なローマ料理はもちろんの事、南イタリアや北イタリアの料理もあり、「イタリア料理を３６０度」ご提供しています。すでに世界でも有名になった「ヒヨコマメとイカのパスタスープ」も是非ご賞味いただきたい。
    
    以下、様々な言語のメニューへのリンク。`,
    nicola: `Nicola`
  }
};

const Menu = () => {
  const { language } = useContext(LangContext);
  const { article1, nicola, title1 } = words[language];
  return (
    <div>
      <img src={foto} alt="" className="hero__page hero__page--menu" />
      <div className="grid-container">
        <div className="page__container page__container--home">
          <div className="grid-x">
            <div className="large-9 medium-7 small-12 column">
              <div className="main__content">
                <div className="grid-x">
                  <div className="large-12 medium-12 small-12 column">
                    <h2>{title1}</h2>
                    <p>{article1}</p>
                    <a
                      href={It}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="menu__button"
                    >
                      <img src={ItFl} alt="" className="lang ita" />
                      <span>Scaricare il menu</span>
                    </a>
                    <a
                      href={En}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="menu__button"
                    >
                      <img src={GbFl} alt="" className="lang eng" />
                      <span>Download menu</span>
                    </a>
                    <a
                      href={Rus}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="menu__button"
                    >
                      <img src={RuFl} alt="" className="lang rus" />
                      <span>Скачать меню</span>
                    </a>
                    <a
                      href={Jap}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="menu__button"
                    >
                      <img src={JapFl} alt="" className="lang jap" />
                      <span>メニューをダウンロード</span>
                    </a>
                    <a
                      href={Fra}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="menu__button"
                    >
                      <img src={FrFl} alt="" className="lang fra" />
                      <span>Télécharger le Menu</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="large-3 medium-5 small-12 column">
              <div className="sidebar__content">
                <img src={DecorationT} alt="" />
                <img src={Cuoco} alt="" />
                <h6>{nicola}</h6>
                <img src={Staffduo} alt="" />
                <img src={DecorationB} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
