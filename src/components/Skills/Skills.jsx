import React from "react";
import "./skills.css";
import UIDesign from "../../assets/ui-design.png";
import WebDesign from "../../assets/website-design.png";
import AppDesign from "../../assets/app-design.png";

export const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I do</span>
      <span className="skillDesc">
        I am a skilled and passionate web developer. I have a strong
        understanding of design and a keen eye for detail. I am proficient in
        HTML, CSS, and JavaScript, as well as design software such as Figma and
        Canva.
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
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
          <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Web Design</h2>
            <p>
              Web design merges aesthetics and user-friendliness to fashion
              visually captivating and easy-to-navigate websites.
            </p>
          </div>
        </div>

        <div className="skillBar">
          <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
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
