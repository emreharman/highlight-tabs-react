import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [isHome, setIsHome] = useState(true);
  const [isAbout, setIsAbout] = useState(false);
  const [isContact, setIsContact] = useState(false);

  return (
    <div className="header">
      <Link
        className={`header-link ${isHome && `active`}`}
        to="/"
        onClick={() => {
          setIsHome(true);
          setIsContact(false);
          setIsAbout(false);
        }}
      >
        Home
      </Link>
      <Link
        className={`header-link ${isAbout && `active`}`}
        to="/about"
        onClick={() => {
          setIsAbout(true);
          setIsHome(false);
          setIsContact(false);
        }}
      >
        About
      </Link>
      <Link
        className={`header-link ${isContact && `active`}`}
        to="/contact"
        onClick={() => {
          setIsContact(true);
          setIsHome(false);
          setIsAbout(false);
        }}
      >
        Contact
      </Link>
    </div>
  );
};

export default Header;
