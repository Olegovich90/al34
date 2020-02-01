import React from "react";
import { Link } from "react-router-dom";
import ".././copyright.css";
import ".././vendor.css";
const Underfoot = () => {
  return (
    <div className="copyright">
      <h6>
        © 2013 - Ristorante al 34. All rights reserved | Trentaquattro S.r.l. -
        P.I. 01569041005 -
        <Link to="/privacy" className="a">
          Policy Privacy
        </Link>
        <Link className="a" to="/cookies">
          Cookies
        </Link>
      </h6>
    </div>
  );
};

export default Underfoot;
