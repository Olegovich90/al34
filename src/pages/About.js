import React, { useContext } from "react";
import foto from "../images/Pages/about.jpeg";
import Nonni from "../images/side/Nonni.jpg";
import Stuff from "../images/side/Stuff.jpg";
import DecorationT from "../images/side/decortop.jpg";
import DecorationB from "../images/side/decorbot.png";
import { LangContext } from "../Context.js/LangContext";

const words = {
  italian: {
    title1: "Ristorante al 34",
    title2: "La nostra cucina",
    article1: `Tutto è iniziato nel 1968, anno in cui Walter Casalini, dopo aver ceduto lo storico albergo di famiglia, l'Hotel Internazionale di Milano Marittima, aperto nel dopoguerra da pioniere della riviera romagnola, ha dato vita, a Roma, nella storica Via Mario dè Fiori, al Ristorante "Al 34". Insieme alla moglie Maria Luisa e al figlio Nicola, creatore della gran parte dei magnifici piatti che potete trovare qui da noi, il Ristorante viene portato avanti fin d'allora con cura, tradizione ed innovazione.

    I primi piatti del '34 avevano un sapore tutto romagnolo, esportati fino a qua, nel cuore del centro storico di Roma, proprio da quella lunga esperienza avuta in Romagna. In tutti questi anni, com'è giusto che sia, i tempi sono cambiati rapidamente, ma l'amore e la dedizione nei confronti di questa attività, da parte di tutta la famiglia Casalini, hanno dato vita ad uno dei locali più amati dai romani e non solo; il passare del tempo e la cucina sempre più curata e, insieme, “italiana a 360 gradi”, hanno portato il '34 ad essere rinomato anche nel mondo.
    
    Ovviamente, oltre alla cucina, che offre un'infinità di piatti, il nostro Ristorante ha saputo diversificarsi anche per tanti altri motivi: una posizione invidiata da molti, proprio nel cuore della Città Eterna, a due passi da Piazza di Spagna; la calorosa accoglienza, sia da parte dei proprietari,i quali girano tra i tavoli proprio come se fossero "a casa", che del personale, ormai al servizio da oltre 20 anni, dunque preparati ad offrire al cliente qualsiasi tipo di servizio; per non parlare poi dell'atmosfera che circonda i tavoli, la quale, grazie al "tocco" e al gusto della signora Maria Luisa, permette al cliente di rilassarsi ed immergersi in un'epoca ormai passata. Questo Ristorante fonde, da una parte, nostalgia e modernità e dall'altra, esperienza e freschezza, che, con l'apparizione dei nipoti Guglielmo e Gabriele, ha aggiunto quel tocco di novità e di gioventù.
    
    Se i muri di questo locale dovessero parlare, racconterebbero storie davvero singolari, grazie al fatto che, in tutti questi anni, tante sono state le personalità note che hanno varcato la porta del '34, ma adesso...non mi resta davvero altro che invitarvi a passare qua da noi…`,
    nonni: `Maria Luisa e Walter`,
    stuff: "Guglielmo e Gabriele"
  },
  english: {
    title1: "Ristorante al 34",
    title2: "Our specialities",
    article1: `All has started in 1968, in that year Mr. Walter Casalini sold the Hotel Internazionale, located on the Romagna Adriatic Coast “Milano Marittima”, that he founded as a pioneer after the second world war. He then decided to move to Rome and founded the Restaurant Al 34, in the historical center of the city in Via Mario de Fiori. Today the restaurant keeps running it’s activity maintained by Maria Luisa and the son, Nicola, a creator of a lot of the dishes we offer. They maintain on the restaurant with great care and respecting traditions while also innovating.

    At that time the first dishes of “Al 34” used to be very Romagna’s typical due to the long experience the founders had in that zone, that they then brought in the historical center of Rome. Slowly the Menu became more “Roman” . As time goes by, during all these years of love and devotion to the Restaurant from the whole Casalini family, “Al 34” became one of the Roman’s most favourite places. Going on the Restaurant’s Cuisine has improved year after year becoming famous all over the world.
    
    The Restaurant “Al 34” in addition to his wide menu, is distinguished from other Restaurants for many reasons: enviable location in the very hearth of Rome, the Eternal City, two steps from “Piazza di Spagna” one of the most famous places of the city, warm hospitality from the 20 years experienced Staff and the owners, that usually wander among the tables, listening client’s suggestions. At “Al 34” you can feel the magic atmosphere that lets you relax in a bygone era, thanks to the touch of Mrs. Maria Luisa.
    
    The Restaurant is a mix of tradition and innovation at the same time, thanks also to the young touch of the new generation, grandchildren Guglielmo and Gabriele.
    
    If the walls of this place could speak, they would tell a lot of particular stories. There are a lot of famous personalities who were welcomed by the restaurant during all these years, now all that remains is to come and visit us.`,
    nonni: ` Maria Luisa and Walter`,
    stuff: "Guglielmo and Gabriele"
  },
  russian: {
    title1: "Ristorante al 34",
    title2: "О нашей кухне",
    article1: `Всё началось в далёком 1968 году, когда Вальтер Казалини решил оставить свой феноменальный отель «Интернациональ» на живописном побережье адриатики Милано-Мариттима (Романья), открытый им в послевоенные годы, и дал жизнь новому ресторану «34» в самом сердце Рима, на улице Марио де Фиори. Сегодня ресторан «34» всё также продолжает радовать своих посетителей благодаря супруге Вальтера Марие Луизе и сыну Николе - создателю большинства восхитительных блюд, которые можно у нас отведать.

    Первые блюда «34» характеризовал яркий отпечаток кухни Романьи в силу многолетнего опыта, приобретённого в этой области Италии, по праву называемой «гастрономический рай». С течением времени в меню появлялись блюда традиционной римской кухни… За годы непрерывной работы преданность делу и усилия всей семьи Казалини превратили ресторан «34» в одно из самых любимых мест римлян и не только. Сегодня в полной мере и своём разнообразии итальянская кухня приносит «34» известность в разных уголках планеты.
    
    Без сомнения можно сказать, что помимо огромного количества разнообразных блюд, наш ресторан отличается завидным расположением в самом сердце вечного города, в двух шагах от Испанской лестницы; тёплый приём вам всегда окажут хозяева и весь персонал «34», который на службе добрых два десятка лет, и хорошо знает что предложить искушенному клиенту; благодаря синьоре Марие Луизе характерный дизайн позволяет расслабиться и окунуться в волшебную атмосферу ушедшей эпохи. В идее ресторана смешаны ностальгия и модерн, а так же традиции и современность. Ежедневно в жизнь ресторана вносят новизну и свежие идеи внуки Вальтера - Гульельмо и Габриэле.
    
    Если бы стены здесь могли говорить, то рассказали бы много удивительных историй, увиденных за эти годы, ведь порог «34» переступили многие известные личности, творческие натуры и выдающиеся люди. Изо дня в день мы приветствуем наших новых и постоянных клиентов, загляните и Вы к нам...`,
    nonni: `Мария Луиза и Вальтер`,
    stuff: "Уильям и Габриэль"
  },
  japaneese: {
    title1: "リストランテ　アル・トレンタクアットロ",
    title2: "料理",
    article1: `すべては１９６８年に始まった。当時、エミリア・ローマニャの海岸沿いで戦後に建設された、ミラノ・マリッティマのホテル・インテルナツォナーレを売ったヴァルテル　カサリーニは、ローマで長い歴史を持つマリオ・デ・フィオーリ通りで「リストランテ　アル・トレンタクアットロ」をオープン。 妻のマリア・ルイサと、ここで味わえる様々なメニューの大部分を創作したオーナーの息子、ニコーラの協力で、レストランは当時から伝統と改新をもとに営まれてきました。

    「トレンタクアットロ」の当初のメニューは、ローマニャ州の典型的な風味を永遠の都ローマの中心街に導入しました。年々、時代の変化に対してもカサリーニ家のこの仕事に向けての愛と心がけのお陰で、ローマでも最も人気のあるレストランの一つになり、本格的なイタリア料理を更に改良させた「トレンタクアットロ」は世界中の人々から人気を得ました。
    
    バラエティに富む料理だけでなく、このレストランは様々な特徴を持っています。まず、永遠の都ローマの中心街にあるスペイン広場という絶好な位置。２０年以上の経験でもって、お客様に様々なサービスを与え続けるスタッフと家庭的な雰囲気でテーブールを回るオーナーの温かな歓迎。マリア・ルイサ婦人の「タッチ」を加え、リラックスしながら古き良き時代に浸れます。
    
    また、創業者の孫に当たるグリエルモとガブリエーレの若さならではのテイストもインプットされ、リノベーション、ノスタルジーの入り混じったレストランとなりました。 このレストランの壁がものを言うなら、「トレンタクアットロ」を訪れた著名人の面白いストリーの数々を語る事でしょう。後は、あなたのお越しを待ち望むのみ．．．`,
    nonni: `マリア・ルイサとヴァルテル`,
    stuff: "ウィリアムとガブリエル"
  }
};
const AboutMe = () => {
  const { language } = useContext(LangContext);
  const {
    article1,
    nonni,
    stuff,

    title1
  } = words[language];
  return (
    <div>
      <img src={foto} alt="" className="hero__page hero__page--about" />
      <div className="grid-container">
        <div className="page__container page__container--home">
          <div className="grid-x">
            <div className="large-9 medium-7 small-12 column">
              <div className="main__content">
                <div className="grid-x">
                  <div className="large-12 medium-12 small-12 column">
                    <h2>{title1}</h2>
                    <p>{article1}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="large-3 medium-5 small-12 column">
              <div className="sidebar__content">
                <img src={DecorationT} alt="" />
                <img src={Nonni} alt="" />
                <h6>{nonni}</h6>
                <img src={Stuff} alt="" />
                <h6>{stuff}</h6>
                <img src={DecorationB} alt="" />
              </div>
            </div>

            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
