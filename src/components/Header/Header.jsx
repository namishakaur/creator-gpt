import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./Header.css";
import { Link } from "react-router-dom";
import CreatorGptLogo from "../CreatorGptLogo/CreatorGptLogo";
const Header = (props) => {
  let location = useLocation();
  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 88) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground);
  });
  return (
    <header className={navbar ? "header active" : "header"}>
      <div className="container">
        <div className="logo">
          <Link to="/">
            <CreatorGptLogo {...props} />
          </Link>
        </div>
        {location.pathname === "/getstarted" ||
        location.pathname === "/thankyou" ? null : (
          <div className="headercta">
            <Link to="/getstarted">
              <div className="ctaheaderbutton">
                <div className="ctaheader">Get Early Access</div>
              </div>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};
export default Header;
