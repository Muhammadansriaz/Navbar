import React, { useState } from "react";
import "./Home.css";
import Carousel from "../../Components/Carasoul/Carousel";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Group_1 from "../../Components/Images/Group_1.png";
import features1 from "../../Components/Images/features1.png"
import FEATURES2 from "../../Components/Images/FEATURES2.png"
import features3 from "../../Components/Images/features3.png"
import Faq from "../../Components/Faq/Faq"
import features4 from "../../Components/Images/feature4.png"
import Startes1 from "../../Components/Images/Started1.png"
import features5 from "../../Components/Images/Feature5.png"
import features6 from "../../Components/Images/feature6.png"
import Student from "../../Components/Images/Student.png";
import Destop from "../../Components/Images/Desktop.png";

function Home() {
  const [position, setPosition] = useState(2);
  const totalItems = 5;

  const handlePrev = () => {
    setPosition((prev) => (prev === 1 ? totalItems : prev - 1));
  };

  const handleNext = () => {
    setPosition((prev) => (prev === totalItems ? 1 : prev + 1));
  };

  const slides = [
    {
      img: features1,
      name: "Integrated Services",
      occupation: "Manage tasks, invoicing, communication, and file sharing in one app for improved productivity.",
    },
    {
      img: FEATURES2,
      name: "Customizable Dashboards",
      occupation: "Personalize dashboards to prioritize tasks and stay focused.",
    },
    {
      img: features3,
      name: "Real-Time Collaboration",
      occupation: "Collaborate with teams via chat, file sharing, and project management tools.",
    },
    {
      img: features4,
      name: "Advanced Analytics",
      occupation: "UI/UX DesignerTrack progress, finances, and productivity with built-in analytics.",
    },
    {
      img: features5,
      name: "Secure Payment Processing",
      occupation: "Handle payments and invoicing securely within the app.",
    },
    {
      img: features6,
      name: "Luke MaxwellMobile and Desktop Accessibility",
      occupation: "Access the app seamlessly on any device, anytime.",
    },
  ];


  return (
    <div>
      <div className="Content">
        <div className="Content_Inner">
          <h1>Manage & Monitize Your Content</h1>
          <p>
            Launch your PAID SUBCRIOTIONS, EVENTS, COURSES, PAYMENT PAGES AND MANY MORE FOR YOUR
            AUDIENCE
          </p>
          <div className="Inner_Box">
            <p>name@email.com</p>
            <div>Get notified</div>
          </div>
        </div>
        <div>
          <img className="Group_1" src={Group_1} alt="Group 1" />
        </div>
      </div>

      <div className="Discover">
        <div className="Discover_Inner">
          <h5>Discover</h5>
          <h1>One App Technology: Your One-Stop Solution Platform</h1>
          <p>
            One App Technology is a revolutionary platform that combines multiple functionalities
            into a single, user-friendly application, redefining convenience, efficiency, and
            accessibility.
          </p>
          <div className="Inner_Box_2">
            <p>Discover Ideas</p>
            <FaArrowRight />
          </div>
        </div>
        <div className="st_div">
          <img className="Student" src={Student} alt="Student" />
        </div>
      </div>

      <div className="About">
        <div className="About_Inner">
          <h5>ABOUT</h5>
          <h1>What is One App Technology?</h1>
          <p>
            One App Technology is an all-in-one platform that integrates tools and services to
            streamline tasks for businesses, freelancers, and individuals.
          </p>
        </div>
        <div>
          <img className="Destop" src={Destop} alt="Desktop" />
        </div>
      </div>

      <div className="Feed">
        <div className="Feed_Inner">
          <h1>What everyone says</h1>
        </div>
        <div className="Controls">
          <FaArrowLeft className="Arrow" onClick={handlePrev} />
          <FaArrowRight className="Arrow" onClick={handleNext} />
        </div>
      </div>

      <div>
        <Carousel position={position} />
      </div>
      <div>
        <h1 className="Features">The Features You were Looking for</h1>
        <div className="grid-container">
          {slides.map((slide, index) => (
            <div key={index} className="grid-item">

              <div className="feature">
                <img className="feature_img" src={slide.img} alt={slide.name} />
                <div className="usr_inner">
                  <h5 className="feature_name">{slide.name}</h5>
                  <p className="feature_p">{slide.occupation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      <h1 className="faq_h1">Frequently asked questions</h1>
      <div className="Faq_outr">



        <Faq />
      </div>

      <div className="started">

        <img src={Startes1} />

        <div>
          <h1>Lets Get Started</h1>
          <p>kjhxrtdfyguiuf gcffffggfgh</p>

        </div>
      </div>

    </div>
  );
}

export default Home;
