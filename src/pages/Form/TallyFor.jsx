import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import "./Form.css";
import Footer from "../../components/Footer/Footer";
import FooterDesk from "../../components/FooterDesk/FooterDesk";

export default function TallyForm() {
  const logoprops = {
    brandname: "creator-gpt.",
    subtitle: "The AI Co-Pilot You’ve Been Waiting For.",
  };
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.matchMedia("(max-width: 1024px)").matches);
    };

    handleResize();
  }, []);
  return (
    <div className="screencont2">
      <Header {...logoprops} />
      <iframe
        className="tallyform"
        src="https://tally.so/embed/mJdQ6r?transparentBackground=1&dynamicHeight=1"
        loading="lazy"
        width="100%"
        height="931"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
        title="Creator-GPT (early access)"
      ></iframe>
      <div className="footerform">
        {isMobile ? <Footer {...logoprops} /> : <FooterDesk />}
      </div>
    </div>
  );
}
