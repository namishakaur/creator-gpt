import "/Users/namishakaur/byobcta/src/styleguide.css";
import "./Outbound.css";
import Header from "/Users/namishakaur/byobcta/src/components/Header/Header.jsx";
import Body from "/Users/namishakaur/byobcta/src/components/Body/Body.jsx";
import RightContainer from "/Users/namishakaur/byobcta/src/components/RightContainer/RightContainer.jsx";
import BodyContent from "/Users/namishakaur/byobcta/src/components/BodyContent/BodyContent.jsx";
import Testimonials from "/Users/namishakaur/byobcta/src/components/Testimonials/Testimonials.jsx";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Footer from "../../components/Footer/Footer";
import React, { useEffect, useState } from "react";
import FooterDesk from "../../components/FooterDesk/FooterDesk";
import { Link } from "react-router-dom";
const Outbound = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.matchMedia("(max-width: 1024px)").matches);
    };

    handleResize();
  }, []);

  const bodycontent1 = {
    title: "Streamlined Outreach",
    subtitle: "Don’t Miss a Beat.",
    description1: "Upload Media Kit (or use our auto-generator).",
    description2:
      "Type a brand name.\n Emails to key decision makers are sent for you.",
    description3:
      "Say goodbye to manual outreach and hello to effortless new deals. Let us help you lock-in more brand deals!",
    classname: "bodycontainer right1",
  };
  const bodycontent2 = {
    title: "AI-Driven Emails",
    subtitle: "Supercharge Your Partnerships.",
    description1:
      "Write emails faster than ever before. We'll turn your thoughts into actions. ",
    description2:
      "We use proven best practices to craft personalized messages that significantly increase the likelihood of receiving a response. ",
    description3: " ",
    classname: "bodycontainer mvleft",
  };
  const bodycontent3 = {
    title: "Brand Deal Tracking",
    subtitle: "Say Goodbye to Unanswered Emails.",
    description1:
      "You're sending a crucial email: closing a new deal is important. But people are busy — you might not hear back. So what do you do? You could painstakingly maintain a list or spreadsheet of different people. Or you could somehow try to keep it all in your head.",
    description2:
      "Creator-GPT makes it fast and easy. When you send an email, if you don't hear back, we'll send your recipient a reminder to get back to you.",
    description3: "",
    classname: "bodycontainer right2",
  };
  const testimonial1 = {
    quote: '"I spend about an hour a day on managing emails and brand deals"',
    person: "Terri",
    personstitle: "Person's Title",
    classname: "testimonial1",
  };
  const testimonial2 = {
    quote: '"I spend about an hour a day on managing emails and brand deals"',
    person: "Allie",
    personstitle: "Person's Title",
    classname: "testimonial2",
  };
  const testimonial3 = {
    quote:
      "“9/10 brand deals come in through email… 15% of my time is spent on mgmt”",
    person: "Sam",
    personstitle: "Person's Title",
    classname: "testimonial3",
  };
  const hero = {
    title: "Connect.\nCollaborate.\nCreate.",
    subspan1: "Unlock the",
    subspanbold: "full potential",
    subspan3: "of your content.",
  };
  const logoprops = {
    brandname: "sponsor union.",
    subtitle: "The Brand Partnerships Tool You’ve Been Waiting For.",
  };
  return (
    <div className="page">
      <div className="container-center">
        <div className="home screen">
          <Header {...logoprops} />
          <div className="landing">
            <div className="container">
              <div className="bodytext">
                <Body {...hero} />
              </div>
              <RightContainer
                imgsrc="../assets/images/herophone.png"
                classname="rightcontainerhero"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bodyinfo">
        <div className="features">
          <RightContainer
            imgsrc="../assets/images/bodyimg1.png"
            classname="leftbody"
          />
          <BodyContent {...bodycontent1} />

          <RightContainer
            imgsrc="../assets/images/bodyimg2.png"
            classname="rightbody up1"
          />
          <BodyContent {...bodycontent2} />
          <RightContainer
            imgsrc="../assets/images/bodyimg3.png"
            classname="leftbody up2"
          />
          <BodyContent {...bodycontent3} />
        </div>
        <div className="container-center">
          <div className="quotes screen">
            <div className="quotescontainer">
              <h1 className="quotestitle textcentered">
                What Creators Have Said
              </h1>

              {isMobile ? (
                <div className="carousel">
                  <Carousel width={390} showStatus={false} showArrows={false}>
                    <Testimonials {...testimonial1} />
                    <Testimonials {...testimonial2} />
                    <Testimonials {...testimonial3} />
                  </Carousel>
                </div>
              ) : (
                <div className="actualquotescontainer">
                  <Testimonials {...testimonial1} />
                  <Testimonials {...testimonial2} />
                  <Testimonials {...testimonial3} />
                </div>
              )}
            </div>
          </div>
        </div>
        <Link to="/getstarted">
          <div className="ctabuttonbottom">
            <div className="getearlyaccessbutton">
              <h1 className="getearlyaccessbuttontext">Get Early Access</h1>
            </div>
          </div>
        </Link>
        <div className="footerinbound">
          {isMobile ? <Footer /> : <FooterDesk />}
        </div>
      </div>
    </div>
  );
};

export default Outbound;
