import React, { useRef } from "react";
import css from "./Contact.module.css";
import { FiMail } from "react-icons/fi";
import { BsTelephoneFill } from "react-icons/bs";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const notify = () => toast.success("Sent Successfully");
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ysdycza",
        "template_u4hg08m",
        form.current,
        "Elb9zYrtnD8tivc90"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className={css.container} id="contact">
      <div className={css.left}>
        <h1>Contact Me</h1>

        <div className={css.mail}>
          {" "}
          <FiMail /> <span>alhadchikkutm@gmail.com</span>{" "}
        </div>
        <div className={css.mail}>
          {" "}
          <BsTelephoneFill /> <span>8157810391</span>{" "}
        </div>
      </div>

      <div className={css.right}>
        <form action="" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="to_name"
            required="true"
            placeholder="Your name"
          />
          <input
            type="email"
            name="user_email"
            required="true"
            placeholder="Your Email"
          />

          <textarea
            rows="6"
            name="message"
            required="true"
            placeholder="Your message"
          />
          <button onClick={notify} className={css.btn}>
            Submit
          </button>
          <ToastContainer autoClose={600} position={"bottom-right"} />
        </form>
      </div>
    </div>
  );
};

export default Contact;
