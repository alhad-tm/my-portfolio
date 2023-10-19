import React from "react";
import Typewriter from "typewriter-effect";
import css from "./Hero.module.css";
import code from "../../assets/coder1.jpg";
import resume from "../../assets/alhad01.pdf";
import { AiOutlineFileText } from "react-icons/ai";

const Hero = () => {
  return (
    <div className={css.container} id="home">
      <div className={css.left}>
        <span>Hi I'm </span>
        <span>ALHAD T M</span>
        <div className={css.typing}>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Web developer")
                .start();
            }}
          />
        </div>
        <a className={css.resume} href={resume} download="Resume download">
          Download resume <AiOutlineFileText className={css.file} />
        </a>
      </div>
      {/* <div className={css.right}>
        <img className={css.img} src={code} alt="" />
      </div> */}
    </div>
  );
};

export default Hero;  
