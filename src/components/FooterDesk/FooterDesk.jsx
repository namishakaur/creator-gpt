import React from "react";
import "./FooterDesk.css";

function FooterDesk() {
  return (
    <footer className="footerdesk">
      <div className="containerdesk">
        <div className="cta-1desk montserrat-semi-bold-quick-silver-16px">
          <div className="cta-itemdesk textcentered">© Creator-GPT.com</div>
          <div className="cta-itemdesk textcentered">Privacy Policy</div>
          <div className="cta-itemdesk textcentered">Terms of Use</div>
        </div>
        <img
          className="social-mediadesk"
          src="/../assets/images/social-media.svg"
          alt="Social Media"
        />
      </div>
    </footer>
  );
}
export default FooterDesk;
