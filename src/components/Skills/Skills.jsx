import React from "react";
import "./skills.css";
import UIDesign from "../../assets/ui-design.png";
import WebDesign from "../../assets/website-design.png";
import AppDesign from "../../assets/app-design.png";
import htmlLogo from "../../assets/HTML5_Logo.svg";
import jsLogo from "../../assets/icons8-javascript.svg";
import reactLogo from "../../assets/icons8-react.svg";
import postgreSQL from "../../assets/postgresql.svg";
import tsLogo from "../../assets/icons8-tailwindcss.svg";
import gitLogo from "../../assets/git.svg";
import nodeLogo from "../../assets/icons8-node-js.svg";
import nextLogo from "../../assets/icons8-nextjs.svg";
import cssLogo from "../../assets/icons8-css.svg";

export const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I do</span>
      <span className="skillDesc">
        I specialize in developing responsive and user-friendly web applications
        With knowledge in technologies like React, Next.js, Tailwind CSS,
        Prisma, MySQL, and more, I create seamless and modern digital
        experiences. I'm committed to delivering efficient, secure, and visually
        appealing solutions. My work ensures accessibility, real-time data
        integration, and intuitive user experiences, catering to a wide range of
        web development needs.
      </span>

      <div className="skillBlockContainer">
        <div className="skillBlock">
          <img src={htmlLogo} alt="Portfolio5" className="worksImg" />
        </div>
        <div className="skillBlock">
          <img src={jsLogo} alt="JavaScript Logo" className="worksImg" />
        </div>
        <div className="skillBlock">
          <img src={cssLogo} alt="CSS Logo" className="worksImg" />
        </div>
        <div className="skillBlock">
          <img src={reactLogo} alt="React Logo" className="worksImg" />
        </div>
        <div className="skillBlock">
          <img src={postgreSQL} alt="MySQL Logo" className="worksImg" />
        </div>
        <div className="skillBlock">
          <img src={nextLogo} alt="Next JS Logo" className="worksImg" />
        </div>
        <div className="skillBlock">
          <img src={tsLogo} alt="Tailwind Logo" className="worksImg" />
        </div>
        <div className="skillBlock">
          <img src={gitLogo} alt="Git logo" className="worksImg" />
        </div>
        <div className="skillBlock">
          <img src={nodeLogo} alt="Node JS logo" className="worksImg" />
        </div>
      </div>

      <div className="skillBars">
        <div className="skillBar">
          <img src={UIDesign} alt="UIDesign" className="skillBarIcon" />
          <div className="skillBarText">
            <h2>UI/UX Design</h2>
            <p>
              UI/UX design enhances digital products by creating visually
              appealing and user-friendly interfaces, focusing on aesthetics
              (UI) and user experience (UX).
            </p>
          </div>
        </div>

        <div className="skillBar">
          <img src={WebDesign} alt="WebDesign" className="skillBarIcon" />
          <div className="skillBarText">
            <h2>Web Design</h2>
            <p>
              Web design merges aesthetics and user-friendliness to fashion
              visually captivating and easy-to-navigate websites.
            </p>
          </div>
        </div>

        <div className="skillBar">
          <img src={AppDesign} alt="AppDesign" className="skillBarIcon" />
          <div className="skillBarText">
            <h2>App Design</h2>
            <p>
              App design centers on crafting the visual and interactive elements
              of mobile or desktop applications to ensure they look appealing
              and provide users with exceptional usability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
