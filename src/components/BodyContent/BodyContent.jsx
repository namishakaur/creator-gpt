import React from "react";
import "./BodyContent.css";
function BodyContent(props) {
  const {
    title,
    subtitle,
    description1,
    description2,
    description3,
    classname,
  } = props;
  return (
    <div className={classname}>
      <div className="bodycopycontainer">
        <h1 className="bodytitle textcentered">{title}</h1>
        <h3 className="bodysubtitle montserrat-bold-white-24px">{subtitle}</h3>
        <div className="bodydescription">
          <p className="descrip1 montserrat-medium-quick-silver-24px">
            {description1}
          </p>
          <p className="descrip2 montserrat-medium-quick-silver-24px">
            {description2}
          </p>
          <p className="descrip3 montserrat-medium-quick-silver-24px">
            {description3}
          </p>
        </div>
      </div>
    </div>
  );
}
export default BodyContent;
