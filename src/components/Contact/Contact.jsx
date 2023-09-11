import React from "react";
import "./contact.css";
import Walmart from "../../assets/walmart.png";
import Adobe from "../../assets/adobe.png";
import Microsoft from "../../assets/microsoft.png";
import Facebook from "../../assets/facebook.png";

import FacebookIcon from "../../assets/facebook-icon.png"
import TwitterIcon from "../../assets/twitter.png"
import YoutubeIcon from "../../assets/youtube.png"
import InstagramIcon from "../../assets/instagram.png"

export const Contact = () => {
  return (
    <section id="contactPage">
      <div id="clients">
        <h2 className="contactPageTitle">My Clients</h2>
        <p className="clientDesc">
          I have had the oppurtunity to work with a diverse group of compaines.
          Some of the notable companies I have worked with inclueds
        </p>

        <div className="clientImgs">
          <img src={Walmart} alt="Client" className="clientImg" />
          <img src={Adobe} alt="Client" className="clientImg" />
          <img src={Microsoft} alt="Client" className="clientImg" />
          <img src={Facebook} alt="Client" className="clientImg" />
        </div>
      </div>

      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Please fill out the form below to discuss any work oppurtunities.
        </span>

        <form action="" className="contactForm">
            <input type="text" className="name" placeholder="Your Name"/>
            <input type="email" className="email" placeholder="Your Email"/>
            <textarea name="message" className="msg" rows="5" placeholder="Your Message"></textarea>
            <button className="submitBtn" type="submit" value="Send">Submit</button>
            <div className="links">
                <img src={FacebookIcon} alt="Facebook Icon" className="link" />
                <img src={TwitterIcon} alt="Twitter Icon" className="link" />
                <img src={YoutubeIcon} alt="Youtube Icon" className="link" />
                <img src={InstagramIcon} alt="Instagram Icon" className="link" />
            </div>
        </form>
      </div>
    </section>
  );
};
