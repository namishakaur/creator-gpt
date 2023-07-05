import React from "react";
import "./CreatorGptLogo.css";
function CreatorGptLogo(props) {
  const { brandname, subtitle } = props;
  return (
    <div className="creator-gpt-logo">
      <div className="creator-gpt-container">
        <div className="creator-gpt poppins-bold-moody-blue-21px">
          {brandname}
        </div>
        <div className="creator-gpt-1 poppins-bold-white-21px">{brandname}</div>
      </div>
      <p className="the-ai-co-pilot-you textcentered ">
        <span>
          <span className="montserrat-normal-white-5px">{subtitle}</span>
          <span className="montserrat-normal-moody-blue-5px">.</span>
        </span>
      </p>
    </div>
  );
}
export default CreatorGptLogo;
