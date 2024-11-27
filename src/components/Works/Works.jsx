import React from "react";
import css from "./Works.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { GoLinkExternal } from "react-icons/go";
import workslist from "../../api/workslist.json";

const Works = () => {
  return (
    <div className={css.container} id="works">
      <div className={css.heading}>Previous works</div>
      <Swiper
        className={css.swiperdiv}
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
        modules={[EffectCoverflow, Pagination, Autoplay]}
      >
        <div className={css.box}>
          {workslist.map((myworks, index) => (
            <SwiperSlide className={css.sslide}>
              <img src={myworks.image} className={css.projectimages} />
              {myworks.link ? (
                <a href={myworks?.link} target="blank">
                  <GoLinkExternal className={css.externallink} />
                </a>
              ) : (
                ""
              )}
            </SwiperSlide>
          ))}
        </div>
        <br />
      </Swiper>
    </div>
  );
};

export default Works;
