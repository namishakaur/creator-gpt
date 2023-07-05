import React from "react";
import "./Testimonials.css";
function Testimonials(props) {
  const { quote, person, personstitle, classname } = props;
  return (
    <div className={classname}>
      <div className="contentt">
        <p className="testimonialtext">{quote}</p>
        <div className="testimonialfrom">
          <div className="overlapgrp">
            <img
              className="profile"
              src="../assets/images/profile.svg"
              alt="Profile icon"
            />
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
