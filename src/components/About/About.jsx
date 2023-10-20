import React from "react";
import css from "./About.module.css";

import { motion } from "framer-motion"

const About = () => {
  return (
    <div className={css.container} id="about">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2}} className={css.heading}>About me</motion.div>
      <div className={css.content}>
     <motion.span 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1}}
     >  I'm a Self-Taught Front-end Web Developer, highly self-motivated and
        passionate about learning new things. Moreover, I'm a Tech enthusiast.
        </motion.span> 
    
        <motion.span 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5}}> As a base language, I am focusing on JavaScript. On my learning path, I
        acquired skills in HTML,CSS, JavaScript, React.js , Next.js, and Git.
        </motion.span>
        <motion.span 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 2}}>
        There are so many youtube channels that also helped me to become a
        developer. Along with YouTube; Google, stackoverflow, w3schools, etc.
        are also helpful learning sources to an autodidact person like me.
        </motion.span>
        <motion.span 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 2.5}}>
        Following these basic subjects, I made a good understanding of other
        dependent frameworks and libraries like Redux, ReduxToolkit, Bootstrap,
        and also database knowledge in Firebase.
         </motion.span>
      </div>
    </div> 
  );
};

export default About;
