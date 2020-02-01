import React, { useState, createContext } from "react";
export const LangContext = createContext();
export const LangProvider = props => {
  const [language, setLanguage] = useState({ language: "italian" });
  const changeLanguage = e => {
    setLanguage({ language: e });
  };

  return (
    <LangContext.Provider value={{ ...language, changeLanguage }}>
      {props.children}
    </LangContext.Provider>
  );
};
