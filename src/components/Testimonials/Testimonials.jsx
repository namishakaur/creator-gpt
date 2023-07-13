import React from "react";
import "./Testimonials.css";
function Testimonials(props) {
  const { quote, person, personstitle, classname, profilesrc } = props;
  return (
    <div className={classname}>
      <div className="contentt">
        <p className="testimonialtext">{quote}</p>
        <div className="testimonialfrom">
          <div className="overlapgrp">
            <img className="profile" src={profilesrc} alt="Profile pic" />
          </div>

          <div className="flex-col">
            <div className="testimonialname textcentered">{person}</div>
            <div className="personstitle textcentered">{personstitle}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
