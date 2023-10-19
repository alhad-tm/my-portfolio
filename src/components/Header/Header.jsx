import React, { useState } from "react";
import css from "./Header.module.css";
import { Link } from "react-scroll";

const Header = () => {
  const [state,setState]=useState(false)
  const scrollDown = () => {
    window.scrollY > 100 ? setState(true) : setState(false);
  };
  window.addEventListener("scroll", scrollDown);
  return (
    <div className={state ? css.container1 : css.container} id="header">
      <div className={css.heading}>
        <li>
          <Link to="home" spy={true} smooth={true}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" spy={true} smooth={true}>
            About
          </Link>
        </li>
        <li>
          <Link to="services" spy={true} smooth={true}>
            Services
          </Link>
        </li>
        <li>
          <Link to="works" spy={true} smooth={true}>
            Works
          </Link>
        </li>
        <li>
          <Link to="contact" spy={true} smooth={true}>
            Contact me
          </Link>
        </li>
      </div>
    </div>
  );
};

export default Header;
