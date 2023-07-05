import React, { useEffect, useState } from "react";
import "./Thankyou.css";
import CreatorGptLogo from "../../components/CreatorGptLogo/CreatorGptLogo";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import FooterDesk from "../../components/FooterDesk/FooterDesk";
function Thankyou() {
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
  return (
    <div className="tycontainer-center-horizontal">
      <div className="thank-you-mobile screen">
        <Header {...logoprops} />
        <div className="tyoverlap-group1">
          <div className="tycontent">
            <div className="tymission">
              <div className="tymission-1">
                <div className="right-column">
                  <div className="imagecont">
                    <img
                      className="image-5"
                      src="/../assets/images/thankyoudesign.png"
                      alt="design"
                    />
                  </div>
                </div>
                <div className="left-column">
                  <div className="tytext-container">
                    <div className="our-mission textcentered montserrat-bold-white-24px">
                      Our Mission
                    </div>
                    <p className="creator-gpt-streamlin">
                      CreatorGPT streamlines the email management process for
                      you. Our platform enables you to increasing earnings and
                      free up time so you can focus on what matters. We put the
                      power back in your hands with, effective AI virtual
                      manager.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="tycontact">
              <div className="tycontainer-1">
                <p className="have-any-questions-o textcentered montserrat-bold-white-24px">
                  Have any questions or suggestions for us?
                </p>
                <div className="tysend-button">
                  <div className="tyget-in-touch montserrat-semi-bold-white-16px">
                    Get In Touch
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h1 className="youre-on-the-priority-waitlist textcentered montserrat-bold-white-40px">
            You’re On The Priority Waitlist!
          </h1>
          <p className="youre-27-in-line-out-of-1245 textcentered">
            <span>
              <span className="montserrat-bold-quick-silver-12px">
                You’re&nbsp;
              </span>
              <span className="montserrat-bold-white-12px">#27</span>
              <span className="montserrat-bold-quick-silver-12px">
                &nbsp; In Line out of &nbsp;
              </span>
              <span className="montserrat-bold-white-12px">1,245</span>
            </span>
          </p>
        </div>
        {isMobile ? <Footer /> : <FooterDesk />}
      </div>
    </div>
  );
}

export default Thankyou;
