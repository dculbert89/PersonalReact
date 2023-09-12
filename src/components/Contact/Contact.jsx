import React, { useRef } from "react";
import "./contact.css";

import Github from "../../assets/github.png";

import emailjs from "@emailjs/browser";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gn5y0mh", //service ID
        "template_zbr8zg5", //Template ID
        form.current,
        "6EsmFGonCZBXliB-j" // Public ID
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert("Email Sent!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    // Contact Form
    <section id="contactPage">
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Please fill out the form below to discuss any work oppurtunities.
        </span>

        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            placeholder="Your Name"
            name="from_name"
          />
          <input
            type="email"
            className="email"
            placeholder="Your Email"
            name="from_email"
          />
          <textarea
            name="message"
            className="msg"
            rows="5"
            placeholder="Your Message"
          ></textarea>
          <button className="submitBtn" type="submit" value="Send">
            Submit
          </button>

          <div className="links">
            <a href="https://github.com/dculbert89">
              <img src={Github} alt="Github Icon" className="link" />
              <p>GitHub Repo</p>
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};
