import React from "react";
import css from "./Footer.module.css";

import { FaLinkedin } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className={css.container} id="footer">
      <div className={css.socialicons}>
        <a
          className={css.link}
          href="https://www.linkedin.com/in/al-had-t-m-26250223a/"
        >
          <FaLinkedin />
        </a>
        <a className={css.link} href="https://github.com/alhad-tm">
          <BsGithub />
        </a>
        <a className={css.link} href=" ">
          <BsInstagram />
        </a>
      </div>
      <div className={css.copy}>
        {" "}
        <span>Copyright © All Right Reserved</span>{" "}
      </div>
    </div>
  );
};

export default Footer;
