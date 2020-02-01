import React from "react";
import "./App.css";
import AboutMe from "./pages/About";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import NotFoundPage from "./pages/NotFoundPage";

import { Switch, Route } from "react-router";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Gallery from "./pages/Gallery";
import Footer from "./components/Footer";
import Underfoot from "./components/Underfoot";
import Coockies from "./pages/Coockies";
import Privacy from "./pages/Privacy";
import { LangProvider } from "./Context.js/LangContext";
import "./main.css";
import "./vendor.css";
const App = () => {
  return (
    <div className="App">
      <LangProvider>
        <Navbar style={{ position: "fixed" }} />
        <Switch>
          <Route path="/about" component={AboutMe} />
          <Route path="/contact" component={Contact} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/menu" component={Menu} />
          <Route path="/cookies" component={Coockies} />
          <Route path="/privacy" component={Privacy} />
          <Route path="/" component={Home} />
          <Route path="*" component={NotFoundPage} />
        </Switch>
        <Footer />
        <Underfoot />
      </LangProvider>
    </div>
  );
};

export default App;
