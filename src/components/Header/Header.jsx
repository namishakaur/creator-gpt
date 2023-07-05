import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import CreatorGptLogo from "../CreatorGptLogo/CreatorGptLogo";
const Header = (props) => {
  return (
    <header className="header">
      <div className="container">
        <Link to="/">
          <CreatorGptLogo {...props} />
        </Link>
        <div className="headercta">
          <Link to="/getstarted">
            <div className="ctaheaderbutton">
              <div className="ctaheader">Get Early Access</div>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};
export default Header;
