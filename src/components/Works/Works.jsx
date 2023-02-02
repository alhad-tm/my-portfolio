import React from "react";
import css from "./Works.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow } from "swiper";
import fitclub from "../../assets/fitclubmain.png";
import foodmain from "../../assets/foodappmains.png";
import netflix from "../../assets/netflixmain.png";
import olx from "../../assets/olxmain.jpg";
import skin from "../../assets/skincaremain.png";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { GoLinkExternal } from "react-icons/go";

const Works = () => {
  return (
    <div className={css.container} id="works">
      <div className={css.heading}>Previous works</div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={5}
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: -130,
          depth: 220,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <div className={css.box}>
          <SwiperSlide>
            <img src={fitclub} alt="" className={css.projectimages} />{" "}
            <a href="https://fitclub-app-37f.pages.dev/">
              <GoLinkExternal className={css.externallink} />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={foodmain} alt="" className={css.projectimages} />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={netflix} alt="" className={css.projectimages} />
            <a href="https://netflixclone-al.netlify.app/">
              <GoLinkExternal className={css.externallink} />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={olx} alt="" className={css.projectimages} />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={skin} alt="" className={css.projectimages} />
            <a href="https://skincare01.netlify.app/">
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
