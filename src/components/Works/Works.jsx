import React from "react";
import css from "./Works.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow ,Autoplay} from "swiper";
import fitclub from "../../assets/fitclubmain.png";
import foodmain from "../../assets/foodappmains.png";
import netflix from "../../assets/netflixmain.png";
import olx from "../../assets/olxmain.jpg";
import skin from "../../assets/skincaremain.png";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { GoLinkExternal } from "react-icons/go";

const Works = () => {
  return (
    <div className={css.container} id="works">
      <div className={css.heading}>Previous works</div>
      <Swiper className={css.swiperdiv}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3} 
        loop={true}
        speed={2400}
        autoplay={{ delay: 2000 }} 

        
        // coverflowEffect={{
        //   rotate: 0,
        //   stretch: 0,
        //   depth: 200,
        //   modifier: 1, 
        //   slideShadows : false,
        // }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination,Autoplay]}
      
      >
        <div className={css.box}>
          <SwiperSlide className={css.sslide}>
            <img src={fitclub} alt="" className={css.projectimages} />{" "}
            <a href="https://fitclub-app-37f.pages.dev/" target="blank">
              <GoLinkExternal className={css.externallink} />
            </a>
          </SwiperSlide>
          <SwiperSlide className={css.sslide}>
            {" "}
            <img src={foodmain} alt="" className={css.projectimages} />
          </SwiperSlide>
          <SwiperSlide className={css.sslide}>
            {" "}
            <img src={netflix} alt="" className={css.projectimages} />
            <a href="https://netflixclone-al.netlify.app/" target="blank" >
              <GoLinkExternal className={css.externallink} /> 
            </a>
          </SwiperSlide>
          <SwiperSlide className={css.sslide}>
            {" "}
            <img src={olx} alt="" className={css.projectimages} />
          </SwiperSlide>
          <SwiperSlide className={css.sslide}>
            {" "}
            <img src={skin} alt="" className={css.projectimages} />
            <a href="https://skincare01.netlify.app/" target="blank">
              <GoLinkExternal className={css.externallink} />
            </a>
          </SwiperSlide>
        </div>
        <br />
      </Swiper>
    </div>
  );
};

export default Works;
