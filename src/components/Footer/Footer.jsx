import React from "react";
import "./Footer.css";
import CreatorGptLogo from "../CreatorGptLogo/CreatorGptLogo";
function Footer(props) {
  return (
    <footer className="footer">
      <CreatorGptLogo {...props} />
      <img
        className="social-mediafooter"
        src="/../assets/images/social-media.svg"
        alt="Social Media"
      />
      <div className="container-2footer">
        <div className="ctafooter montserrat-semi-bold-quick-silver-12px">
          <p className="creator-gptcom-all-rights-reserved textcentered">
            © Creator-GPT.com • All rights reserved
          </p>
          <div className="cta-itemfooter textcentered">Privacy Policy</div>
          <div className="cta-itemfooter textcentered">Terms of Use</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
