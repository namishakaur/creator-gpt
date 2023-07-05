import React from "react";
import "./Body.css";
import { Link } from "react-router-dom";
function Body(props) {
  const { title, subspan1, subspanbold, subspan3 } = props;
  return (
    <div className="leftcontainer">
      <div className="copycontainer">
        <h1 className="title textcentered">{title}</h1>
        <h3 className="subtitle">
          <span className="montserrat-medium-quick-silver-24px">
            {subspan1}&nbsp;
          </span>
          <span className="montserrat-bold-white-24px">
            {subspanbold}&nbsp;
          </span>
          <span className="montserrat-medium-quick-silver-24px">
            {subspan3}
          </span>
        </h3>
      </div>
      <div className="cta-callout">
        <Link to="/getstarted">
          <div className="ctacalloutbutton">
            <div className="ctacallouttext">Get Early Access</div>
          </div>
        </Link>
        <div className="calloutdescrip">
          <div className="descriptitle">Limited Spots</div>
          <p className="descripsub">
            <span className="montserrat-medium-quick-silver-12px">
              Only the first&nbsp;
            </span>
            <span className="montserrat-bold-white-12px">
              300 creators&nbsp;
            </span>
            <span className="montserrat-medium-quick-silver-12px">
              to sign up get&nbsp;
            </span>
            <span className="montserrat-bold-white-12px">early access</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Body;
