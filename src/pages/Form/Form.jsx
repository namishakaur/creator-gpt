import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./Form.css";
import FooterDesk from "../../components/FooterDesk/FooterDesk";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Link } from "react-router-dom";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.

const Form = () => {
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
    <div className="screencont">
      <Header {...logoprops} />
      <div className="formscreen">
        <div className="formtotal">
          <div className="form">
            <div className="formtitle">
              <h1 className="titlef textcentered">Get Started</h1>
              <p className="subtitlef textcentered">
                <span>
                  <span className="montserrat-medium-quick-silver-24px-">
                    Are you ready to put your outreach on{" "}
                  </span>
                  <span className="montserrat-bold-white-24px-">autopilot</span>
                  <span className="montserrat-medium-quick-silver-24px-">
                    ?
                  </span>
                </span>
              </p>
            </div>
            <div className="bottomhalf">
              <form className="formactual" action="/thankyou" for="userinfo">
                <div className="overlap-groupp namegrp">
                  <input required id="name"></input>

                  <div className="box">
                    <div className="frame-33">
                      <label>
                        <div className="name montserrat-medium-white-20px">
                          Name
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="overlap-groupp numbergrp">
                  <input required id="phonenumber"></input>
                  <div className="frame-33">
                    <label>
                      <div className="phone-number montserrat-medium-white-20px">
                        Phone Number
                      </div>
                    </label>
                  </div>
                </div>

                <div className="overlap-group-1 mailgrp">
                  <input required id="email"></input>

                  <div className="frame-6">
                    <div className="frame-33">
                      <div className="email montserrat-medium-white-20px">
                        Email
                      </div>
                    </div>
                  </div>

                  <div className="overlap-group-11 usrnamegrp">
                    <input required id="usrname"></input>

                    <div className="frame-33">
                      <div className="username montserrat-medium-white-20px">
                        Username @
                      </div>
                    </div>
                  </div>
                </div>

                <div className="overlap-groupp namegrp"></div>

                <input
                  id="submitbtn"
                  type="submit"
                  value="Get Early Access"
                ></input>
              </form>
            </div>
          </div>
          <div className="location">
            <div className="overlap-group4">
              <div className="location-1" />
            </div>
          </div>
          <div className="reserve">
            <div className="flex-rowreserve">
              <div className="flex-colreserve">
                <p className="reserve-your-spot-for-1">
                  Reserve Your Spot for $1
                </p>
                <p className="x30-mo-10-mo">
                  <span className="span0 montserrat-normal-quick-silver-20px">
                    $30 / mo
                  </span>
                  <span className="montserrat-normal-quick-silver-20px">
                    $10 / mo
                  </span>
                </p>
              </div>
              <Link to="/stripe">
                <div className="flex-col-1">
                  <div className="yes montserrat-medium-white-20px">Yes</div>
                  <div className="rectangle-1"></div>
                </div>
              </Link>
              <div className="flex-col-2">
                <div className="place montserrat-medium-white-20px">No</div>
                <div className="rectangle-1"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="formfooter">
          {isMobile ? <Footer {...logoprops} /> : <FooterDesk />}
        </div>
      </div>
    </div>
  );
};
export default Form;
