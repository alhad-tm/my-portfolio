import React from "react";
import css from "./About.module.css";

const About = () => {
  return (
    <div className={css.container} id="about">
      <div className={css.heading}>About me</div>
      <div className={css.content}>
        I'm a Self-Taught Front-end Web Developer, highly self-motivated and
        passionate about learning new things. Moreover, I'm a Tech enthusiast.
        <br />
        <br />
        As a base language, I am focusing on JavaScript. On my learning path, I
        acquired skills in HTML,CSS, JavaScript, React.js , Next.js, and Git.
        <br />
        There are so many youtube channels that also helped me to become a
        developer. Along with YouTube; Google, stackoverflow, w3schools, etc.
        are also helpful learning sources to an autodidact person like me.
        <br /> <br />
        Following these basic subjects, I made a good understanding of other
        dependent frameworks and libraries like Redux, ReduxToolkit, Bootstrap,
        and also database knowledge in Firebase.
      </div>
    </div>
  );
};

export default About;
