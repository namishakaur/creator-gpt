import React from "react";
import "./RightContainer.css";

function RightContainer(props) {
  const { imgsrc, classname } = props;
  return (
    <div className={classname}>
      <div className="image">
        <div className="overlap-group1">
          <div className="overlap-group">
            <div className="rectangle-19"></div>
            <div className="ellipse-7"></div>
            <img
              className="polygon-1"
              src="../assets/images/polygon-1.svg"
              alt="background gradient"
            />
            <img
              className="polygon-2"
              src="../assets/images/polygon-2.svg"
              alt="background gradient"
            />
            <img
              className="star-1"
              src="../assets/images/star-1.svg"
              alt="background gradient"
            />
          </div>
          <img className="phonemockup" src={imgsrc} alt="phone mockup" />
        </div>
      </div>
    </div>
  );
}
export default RightContainer;
