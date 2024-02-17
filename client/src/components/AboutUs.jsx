import React from "react";
import image from "../images/aboutimg.jpg";

const AboutUs = () => {
  return (
    <>
      <section className="container">
        <h2 className="page-heading about-heading">About Us</h2>
        <div className="about">
          <div className="hero-img">
            <img
              src={image}
              alt="hero"
            />
          </div>
          <div className="hero-content">
            <p>
            At HealthBooker, our mission is to transform healthcare access for people by offering a smooth and comprehensive platform for scheduling appointments with doctors of different specialties. Our goal is to enable patients by providing them with easy, effective, and transparent access to healthcare services, so they can get the treatment they require when they require it. HealthBooker seeks to make locating and arranging appointments easier with its user-friendly interface and extensive database of healthcare specialists. This will eventually improve the quality of care for both patients and providers.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
