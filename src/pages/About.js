import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
// services
import aboutSRV from "../assets/gallery/Jewel/1.jpg";
import Footer from "../common/Footer";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="about-container">
      <div className="about-title">
        <p>درباره ما</p>
        <h1>آتلیه عکاسی</h1>
      </div>
      <div className="about-flex">
        <p
          data-aos-delay="500"
          data-aos-offset="-1500"
          data-aos="fade-left"
          className="about-box"
        >
          <p className="box-1">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است
          </p>
          <p className="box-2">
            چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و
            برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود
            ابزارهای کاربردی می باشد.
          </p>
          <p className="box-3">
            کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه
            و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد
            کرد.
          </p>
        </p>
        <div
          data-aos-delay="1000"
          data-aos-offset="-1500"
          data-aos="flip-left"
          className="about-services"
        >
          <img src={aboutSRV} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
