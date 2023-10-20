import React from "react";
import css from "./Services.module.css";

import staticweb from "../../assets/staticweb.png";
import react from "../../assets/reactjsweb.png";
import { GoLinkExternal } from "react-icons/go";
import { motion } from "framer-motion"


const Services = () => {
  return (
    <div className={css.container} id="services">
      <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1}} 
      className={css.heading}>Services</motion.div>

      <div className={css.boxcontainer}>
        <motion.div
             initial={{ opacity: 0, x: -40 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 1}}
        className={css.boxes}>
          <span>Static web page</span>
          <img src={staticweb} className={css.imgst} alt="" />
        </motion.div>

        <motion.div className={css.boxes}
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1}}>
          <span className={css.reactweb}>React web app</span>
          <br />
          <img src={react} className={css.imgr} alt="" />
        </motion.div>
      </div>
      <motion.div className={css.servicecontent}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 2}}>
        Currently, I am working on Static Web Page development and React Web
        development. Please check my official GitHub page{" "}
        <a href="https://github.com/alhad-tm" target="blank">
          <GoLinkExternal color="blue" />
        </a>{" "}
        to know more about my works. Given below are some projects that I had
        made from scratch, take a look.
      </motion.div>
    </div>
  );
};

export default Services;
