import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Service = (props) => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div
      data-aos-offset="-1500"
      data-aos-delay={props.delay}
      data-aos="fade-left"
      className={`service-box ${props.preloader}`}
    >
      <Link to="/works">
        <span>{props.service_name}</span>
        <img src={props.image} />
      </Link>
    </div>
  );
};

export default Service;
