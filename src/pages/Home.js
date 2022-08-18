import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

//components
import Service_box from "../components/Service";

// services
import Bride from "../assets/gallery/Bride/Bride.jpg";
import Portrait from "../assets/gallery/Portrait/Portrait.jpg";
import Sport from "../assets/gallery/Sport/Sport.jpg";
import Fashion from "../assets/gallery/Fashion/Fashion.jpg";
import Nature from "../assets/gallery/Nature/Nature.jpg";
import Jewel from "../assets/gallery/Jewel/Jewel.jpg";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="home-container">
      <div
        data-aos-delay="500"
        data-aos-offset="-1500"
        data-aos="fade-right"
        className="wellcome"
      >
        <p>یک تیم حرفه ای</p>
        <h1>آتلیه عکاسی</h1>
      </div>
      <div className="services-container">
        <Service_box delay="500" service_name="عکاسی عروسی" image={Bride} />
        <Service_box delay="1000" service_name="عکاسی چهره" image={Portrait} />
        <Service_box delay="1500" service_name="عکاسی ورزشی" image={Sport} />
        <Service_box delay="2000" service_name="عکاسی فشن" image={Fashion} />
        <Service_box delay="2500" service_name="عکاسی طبیعت" image={Nature} />
        <Service_box delay="3000" service_name="عکاسی صنعتی" image={Jewel} />
      </div>
    </div>
  );
};

export default Home;
