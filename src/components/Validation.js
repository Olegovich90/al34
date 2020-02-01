import React, { useContext } from "react";
import { LangContext } from "../Context.js/LangContext";
import { Link } from "react-router-dom";
import useForm from "./validationUtils/useForm";
import errorsForm from "./validationUtils/errorsForm";
import ".././main.css";
import ".././vendor.css";

const words = {
  italian: {
    nome: `Nome*`,
    email: `E-mail*`,
    messagio: "Messaggio*",
    privacy: `La informiamo che il suo indirizzo e-mail sarà utilizzato esclusivamente per rispondere alla sua richiesta, e trattato secondo i termini descritti dall’
  informativa sulla privacy (Art. 13 D. Lgs. n. 196/2003).`,
    invia: "Invia"
  },
  english: {
    nome: `Name*`,
    email: `E-mail*`,
    messagio: "Message*",
    privacy:
      "We inform you that your e-mail address will be used exclusively to respond to your request, and treated according to the terms described in the privacy policy (Article 13 of Legislative Decree No. 196/2003).",
    invia: "Send"
  },
  russian: {
    nome: `Имя*`,
    email: `E-mail*`,
    messagio: "Сообщение*",
    privacy:
      "Сообщаем вам, что ваш адрес электронной почты будет использоваться для ответа на ваш запрос и будет рассматриваться в соответствии с условиями, описанными в политике конфиденциальности (статья 13 Законодательного декрета № 196/2003).",
    invia: "Отправить"
  },
  japaneese: {
    nome: `名前*`,
    email: `メールアドレス*`,
    messagio: "メッセージ*",
    privacy:
      "お客様の電子メールアドレスはお客様のご要望に応えるために使用され、プライバシーポリシー （法令第196/2003条第13条）に記載されている条件に従って処理されます。",
    invia: "送信"
  }
};
const Validation = () => {
  const { language } = useContext(LangContext);
  const { nome, email, messagio, privacy, invia } = words[language];
  const { values, handleChange, handleAgree, handleSubmit, errors } = useForm(
    submit,
    errorsForm
  );
  function submit() {}
  return (
    <div
      style={{
        backgroundColor: "#861420",
        display: "flex",
        WebkitBoxSizing: "inherit",
        textAlign: "justify"
      }}
      className="cfgen-form-container"
    >
      <div className="cfgen-form-content">
        <form onSubmit={handleSubmit}>
          <div>
            <label>{nome}</label>
            {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
            <input
              className={`${errors.name && "inputError"}`}
              name="name"
              type="text"
              value={values.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>{email}</label>
            {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
            <input
              className={`${errors.email && "inputError"}`}
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>{messagio}</label>
            {errors.message && <p style={{ color: "red" }}>{errors.message}</p>}
            <textarea
              className={`${errors.message && "inputError"}`}
              name="message"
              style={{ height: "150px", width: "200px" }}
              value={values.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <div>
            {errors.isAgree && <p style={{ color: "red" }}>{errors.isAgree}</p>}
            <input
              className={`${errors.isAgree && "inputError"}`}
              type="checkbox"
              value={values.isAgree}
              onChange={handleAgree}
            />

            <span
              style={{
                color: "#dfd29d",
                fontFamily: "Old Standard TT,serif",
                fontWeight: "400"
              }}
            >
              {""}
              {privacy}
              <Link to="/privacy"> Policy Privacy</Link>
            </span>
          </div>
          <button
            type="submit"
            style={{
              padding: ".5rem 1rem",
              margin: "2rem auto 1rem",
              display: "block",
              fontFamily: "Old Standard TT,serif",
              fontWeight: "400",
              backgroundColor: "#dfd29d",
              color: "#000"
            }}
          >
            {invia}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Validation;
