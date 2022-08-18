import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

// GPS
import google_map from "../assets/GPS/google-map.png";
import neshan from "../assets/GPS/neshan.png";
import waze from "../assets/GPS/waze.png";
import Footer from "../common/Footer";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="contact-container">
      <div className="contact-title">
        <p>تماس با ما</p>
        <h1>آتلیه عکاسی</h1>
      </div>
      <div className="contact-wrapper">
        <div
          data-aos-delay="500"
          data-aos-offset="-1500"
          data-aos="fade-left"
          className="contact-boxs"
        >
          <div className="social-box">
            <i className="fa-solid fa-paper-plane icon"></i> شبکه های اجتماعی:
            <span>
              <i className="fa-brands fa-telegram"></i>
              <i className="fa-brands fa-whatsapp"></i>
              <i className="fa-brands fa-instagram"></i>
            </span>
          </div>
          <div className="number-box">
            <i className="fa-solid fa-phone icon"></i> شماره تماس :
            <span>05133889977</span>
          </div>
          <div className="address-box">
            <i className="fa-solid fa-location-dot icon"></i>
            <div>
              آدرس: <span>مشهد - بلوار شماره یک نبش کوچه شماره دو پلاک 1 </span>
            </div>
          </div>
          <div className="email-box">
            <i className="fa-solid fa-envelope icon"></i> آدرس ایمیل:
            <span>example@gmail.com</span>
          </div>
        </div>
        <div
          className="contact-map"
          data-aos-delay="500"
          data-aos-offset="-1500"
          data-aos="flip-left"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6429.506584169431!2d59.539202648763116!3d36.31828908257657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f6c9213a20d79f7%3A0x9c8c0d86c47adb66!2sTraining%20Center%20Farhangiyan%20Imam%20Sajjad!5e0!3m2!1sen!2sro!4v1660807927722!5m2!1sen!2sro"
            width="400"
            height="300"
            style={{ border: "0" }}
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="GPS">
            <span>مسیریابی : </span>
            <div>
              <button>
                <a href="#" rel="noopener noreferrer">
                  گوگل <img src={google_map} alt="gps" />
                </a>
              </button>
              <button>
                <a href="#" rel="noopener noreferrer">
                  نشان <img src={neshan} alt="gps" />
                </a>
              </button>
              <button>
                <a href="#" rel="noopener noreferrer">
                  ویز <img src={waze} alt="gps" />
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
{
}
