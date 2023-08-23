import React from "react";
import css from "./Services.module.css";

import staticweb from "../../assets/staticweb.png";
import react from "../../assets/reactjsweb.png";
import { GoLinkExternal } from "react-icons/go";

const Services = () => {
  return (
    <div className={css.container} id="services">
      <div className={css.heading}>Services</div>

      <div className={css.boxcontainer}>
        <div className={css.boxes}>
          <span>Static web page</span>
          <img src={staticweb} className={css.imgst} alt="" />
        </div>

        <div className={css.boxes}>
          <span className={css.reactweb}>React web app</span>
          <br />
          <img src={react} className={css.imgr} alt="" />
        </div>
      </div>
      <div className={css.servicecontent}>
        Currently, I am working on Static Web Page development and React Web
        development. Please check my official GitHub page{" "}
        <a href="https://github.com/alhad-tm" target="blank">
          <GoLinkExternal color="blue" />
        </a>{" "}
        to know more about my works. Given below are some projects that I had
        made from scratch, take a look.
      </div>
    </div>
  );
};

export default Services;
