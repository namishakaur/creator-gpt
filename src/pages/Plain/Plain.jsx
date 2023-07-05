import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Body from "../../components/Body/Body";
import RightContainer from "../../components/RightContainer/RightContainer";
import "./Plain.css";
import Footer from "../../components/Footer/Footer";
import FooterDesk from "../../components/FooterDesk/FooterDesk";
function Plain() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.matchMedia("(max-width: 767px)").matches);
    };

    handleResize();
  }, []);
  const logoprops = {
    brandname: "creator-gpt.",
    subtitle: "The AI Co-Pilot You’ve Been Waiting For.",
  };
  const hero = {
    title: "Your Brand Deals on Autopilot",
    subspan1: "We enable you to",
    subspanbold: "focus on your craft,",
    subspan3: "while your virtual manager does all the heavy-lifting",
  };
  return (
    <div className="page plain">
      <div className="container-center">
        <div className="home screen">
          <Header {...logoprops} />
          <div className="landing">
            <div className="container"></div>
            <div className="plainbody">
              <Body {...hero} />
            </div>
            <RightContainer
              imgsrc="../assets/images/herophone.png"
              classname="rightcontainerhero"
            />
          </div>
        </div>
      </div>
      <div className="footerplain">
        {isMobile ? <Footer {...logoprops} /> : <FooterDesk />}
      </div>
    </div>
  );
}
export default Plain;
