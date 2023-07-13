import "./CTAV1.css";
import "../../styleguide.css";
import Header from "../../components/Header/Header";
import Body from "../../components/Body/Body";
import RightContainer from "../../components/RightContainer/RightContainer";
import BodyContent from "../../components/BodyContent/BodyContent";
import Testimonials from "../../components/Testimonials/Testimonials";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Footer from "../../components/Footer/Footer";
import React, { useEffect, useState } from "react";
import FooterDesk from "../../components/FooterDesk/FooterDesk";
import { Link } from "react-router-dom";
import Slider from "react-slick";
const CTAV1 = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.matchMedia("(max-width: 1024px)").matches);
    };

    handleResize();
  }, []);

  const bodycontent1 = {
    title: "Keep Your Inbox Clean",
    subtitle: "Don’t Miss a Beat.",
    description1: "Write entire emails with just one line.",
    description2:
      "Respond faster than ever before. We'll turn your thoughts into actions. ",
    description3:
      "Say goodbye to creator's block and hello to effortless productivity. Let us help you lock-in more brand deals!",
    classname: "bodycontainer right1",
  };
  const bodycontent2 = {
    title: "Creator-GPT’s AI",
    subtitle: "Supercharge Your Response Time.",
    description1: "Write entire emails with just one line.",
    description2:
      "Respond faster than ever before. We'll turn your thoughts into actions. ",
    description3:
      "Say goodbye to creator's block and hello to effortless productivity. Let us help you lock-in more brand deals!",
    classname: "bodycontainer mvleft",
  };
  const bodycontent3 = {
    title: "Follow up on time, every time",
    subtitle: "Say Goodbye to Unanswered Emails.",
    description1:
      "You're sending a crucial email: closing a new deal, sending content, or getting paid. But people are busy — you might not hear back. So what do you do? You could painstakingly maintain a list or spreadsheet. Or you could somehow try to keep it all in your head.",
    description2:
      "Creator-GPT makes it fast and easy. When you send an email, if you don't hear back, we'll send your recipient a reminder to get back to you.",
    description3: "",
    classname: "bodycontainer right2",
  };
  const testimonial1 = {
    quote: '"I spend about an hour a day on managing emails and brand deals"',
    person: "Terry",
    personstitle: "Travel and Automotive",
    classname: "testimonial1",
    profilesrc: "../assets/images/terry.jpeg",
  };
  const testimonial2 = {
    quote:
      "“I don’t check my inbox enough, the campaign will be over by time I check… I respond the same way to almost every email”",
    person: "Alli",
    personstitle: "Beauty and Fashion",
    classname: "testimonial2",
    profilesrc: "../assets/images/alli.jpeg",
  };
  const testimonial3 = {
    quote:
      "“9/10 brand deals come in through email… 15% of my time is spent on mgmt”",
    person: "Sam",
    personstitle: "Fitness and Comedy",
    classname: "testimonial3",
    profilesrc: "../assets/images/sam.jpeg",
  };
  const hero = {
    title: "Your AI Email Manager",
    subspan1: "So you never have to",
    subspanbold: "think",
    subspan3: "about email again.",
  };
  const logoprops = {
    brandname: "creator-gpt.",
    subtitle: "The AI Co-Pilot You’ve Been Waiting For.",
  };
  const brandname2 = {
    brandname2: "© Creator-GPT.com",
  };
  return (
    <div className="page">
      <div className="container-center">
        <div className="home screen">
          <Header {...logoprops} />
          <div className="landing">
            <div className="container">
              <Body {...hero} />
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
            imgsrc="../assets/images/bodycontent1.png"
            classname="leftbody"
          />
          <div className="bodycontent1">
            <BodyContent {...bodycontent1} />
          </div>
          <RightContainer
            imgsrc="../assets/images/bodycontent2.png"
            classname="rightbody up1"
          />
          <BodyContent {...bodycontent2} />
          <RightContainer
            imgsrc="../assets/images/bodycontent3.png"
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
                  {/* <Slider
                    dots={true}
                    infinite={true}
                    speed={500}
                    slidesToShow={1}
                    slidesToScroll={1}
                  > */}
                  <Carousel width={390} showStatus={false} showArrows={false}>
                    <Testimonials {...testimonial1} />
                    <Testimonials {...testimonial2} />
                    <Testimonials {...testimonial3} />
                  </Carousel>
                  {/* </Slider> */}
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
          {isMobile ? <Footer {...logoprops} /> : <FooterDesk />}
        </div>
      </div>
    </div>
  );
};

export default CTAV1;
