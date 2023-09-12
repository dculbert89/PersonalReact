import React from "react";
import "./intro.css";
import bg from "../../assets/image.png";
import btnImg from "../../assets/hireme.png";
import { Link } from "react-scroll";

export const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">David</span>
          <br />
        </span>
        Fullstack Developer
        <p className="introPara">
          I am a skilled and enthusiastic web developer at creating <br />
          websites to deliver outstanding user experiences
        </p>
        <Link>
          <button
            className="btn"
            onClick={() => {
              const contactElement = document.getElementById("contact");
              if (contactElement) {
                const yOffset = -70;
                const y =
                  contactElement.getBoundingClientRect().top +
                  window.scrollY +
                  yOffset;
                window.scrollTo({ top: y, behavior: "smooth" });
              }
            }}
          >
            <img src={btnImg} alt="Hire" className="btnImg" />
            Hire Me
          </button>
        </Link>
      </div>
      <img src={bg} alt="Profile" className="bg" />
    </section>
  );
};
