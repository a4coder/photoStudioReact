import React, { useEffect } from "react";

import bride1 from "../assets/gallery/Bride/1.jpg";
import bride2 from "../assets/gallery/Bride/2.jpg";
import bride3 from "../assets/gallery/Bride/3.jpg";
import bride4 from "../assets/gallery/Bride/4.jpg";

import fashion1 from "../assets/gallery/Fashion/1.jpg";
import fashion2 from "../assets/gallery/Fashion/2.jpg";
import fashion3 from "../assets/gallery/Fashion/3.jpg";
import fashion4 from "../assets/gallery/Fashion/4.jpg";

import jewel1 from "../assets/gallery/Jewel/1.jpg";
import jewel2 from "../assets/gallery/Jewel/2.jpg";
import jewel3 from "../assets/gallery/Jewel/3.jpg";
import jewel4 from "../assets/gallery/Jewel/4.jpg";

import nature1 from "../assets/gallery/Nature/1.jpg";
import nature2 from "../assets/gallery/Nature/2.jpg";
import nature3 from "../assets/gallery/Nature/3.jpg";
import nature4 from "../assets/gallery/Nature/4.jpg";

import portrait1 from "../assets/gallery/Portrait/1.jpg";
import portrait2 from "../assets/gallery/Portrait/2.jpg";
import portrait3 from "../assets/gallery/Portrait/3.jpg";
import portrait4 from "../assets/gallery/Portrait/4.jpg";

import sport1 from "../assets/gallery/Sport/1.jpg";
import sport2 from "../assets/gallery/Sport/2.jpg";
import sport3 from "../assets/gallery/Sport/3.jpg";
import sport4 from "../assets/gallery/Sport/4.jpg";

import AOS from "aos";
import "aos/dist/aos.css";

const Works = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="works-container">
      <div
        data-aos-delay="500"
        data-aos-offset="-1500"
        data-aos="fade-right"
        className="works-title"
      >
        <p>نمونه کار</p>
        <h1>گالری</h1>
      </div>
      <div className="gallery">
        <div data-aos-offset="-5000" data-aos="fade-left" data-aos-delay="100">
          <img src={bride1} alt="photo" />
        </div>
        <div data-aos-offset="-5000" data-aos="fade-left" data-aos-delay="200">
          <img src={fashion1} alt="photo" />
        </div>
        <div data-aos-offset="-5000" data-aos="fade-left" data-aos-delay="300">
          <img src={jewel1} alt="photo" />
        </div>
        <div data-aos-offset="-5000" data-aos="fade-left" data-aos-delay="400">
          <img src={nature1} alt="photo" />
        </div>
        <div data-aos-offset="-5000" data-aos="fade-left" data-aos-delay="500">
          <img src={portrait1} alt="photo" />
        </div>
        <div data-aos-offset="-5000" data-aos="fade-left" data-aos-delay="600">
          <img src={sport1} alt="photo" />
        </div>
        <div data-aos-offset="-5000" data-aos="fade-left" data-aos-delay="700">
          <img src={bride2} alt="photo" />
        </div>
        <div data-aos-offset="-5000" data-aos="fade-left" data-aos-delay="800">
          <img src={fashion2} alt="photo" />
        </div>
        <div data-aos-offset="-5000" data-aos="fade-left" data-aos-delay="900">
          <img src={jewel2} alt="photo" />
        </div>
        <div data-aos-offset="-5000" data-aos="fade-left" data-aos-delay="1000">
          <img src={nature2} alt="photo" />
        </div>
        <div data-aos-offset="-5000" data-aos="fade-left" data-aos-delay="1100">
          <img src={portrait2} alt="photo" />
        </div>
        <div data-aos-offset="-5000" data-aos="fade-left" data-aos-delay="1200">
          <img src={sport2} alt="photo" />
        </div>
        <div data-aos-offset="-5000" data-aos="fade-left" data-aos-delay="1300">
          <img src={bride3} alt="photo" />
        </div>
        <div data-aos-offset="-5000" data-aos="fade-left" data-aos-delay="1400">
          <img src={fashion3} alt="photo" />
        </div>
        <div data-aos-offset="-5000" data-aos="fade-left" data-aos-delay="1500">
          <img src={jewel3} alt="photo" />
        </div>
        <div data-aos-offset="-5000" data-aos="fade-left" data-aos-delay="1600">
          <img src={nature3} alt="photo" />
        </div>
        <div data-aos-offset="-5000" data-aos="fade-left" data-aos-delay="1800">
          <img src={portrait3} alt="photo" />
        </div>
        <div data-aos-offset="-5000" data-aos="fade-left" data-aos-delay="2000">
          <img src={sport3} alt="photo" />
        </div>
        <div data-aos-offset="-5000" data-aos="fade-left" data-aos-delay="2200">
          <img src={bride4} alt="photo" />
        </div>
        <div data-aos-offset="-5000" data-aos="fade-left" data-aos-delay="2400">
          <img src={fashion4} alt="photo" />
        </div>
        <div data-aos-offset="-5000" data-aos="fade-left" data-aos-delay="2600">
          <img src={jewel4} alt="photo" />
        </div>
        <div data-aos-offset="-5000" data-aos="fade-left" data-aos-delay="2800">
          <img src={nature4} alt="photo" />
        </div>
        <div data-aos-offset="-5000" data-aos="fade-left" data-aos-delay="3000">
          <img src={portrait4} alt="photo" />
        </div>
        <div data-aos-offset="-5000" data-aos="fade-left" data-aos-delay="3000">
          <img src={sport4} alt="photo" />
        </div>
      </div>
    </div>
  );
};

export default Works;
