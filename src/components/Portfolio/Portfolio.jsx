import React from "react";
import "./portfolio.css";
import Portfolio1 from "../../assets/portfolio-1.svg";
import Portfolio2 from "../../assets/portfolio-2.svg";
import Portfolio3 from "../../assets/portfolio-3.svg";
import Portfolio4 from "../../assets/portfolio-4.svg";
import Portfolio5 from "../../assets/portfolio-5.png";
import Portfolio6 from "../../assets/portfolio-6.png";

export const Portfolio = () => {
  return (
    <section id="works">
      <h2 className="worksTitle">My Portfolio</h2>
      <span className="worksDesc">
        I have a strong commitment to attention to detail, ensuring that my work
        is precise. I'm enthusiastic about applying my expertise to assist
        businesses in reaching their objectives and establishing a robust online
        identity.
      </span>

      <div className="worksImgs">
        <a
          href="https://ecommerce-store-sable-six.vercel.app/category/fbf40016-e906-44db-818a-befd8eb3fa75/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Portfolio5} alt="Portfolio5" className="worksImg" />
        </a>
        <a
          href="https://e-comm-admin-ten.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Portfolio6} alt="Portfolio6" className="worksImg" />
        </a>
        <a
          href="https://dculbert89-weather.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Portfolio1} alt="Portfolio1" className="worksImg" />
        </a>

        <a
          href="https://culbertson-todo.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Portfolio2} alt="Portfolio2" className="worksImg" />
        </a>

        <a
          href="https://pageturnersreviews.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Portfolio3} alt="Portfolio3" className="worksImg" />
        </a>

        <a
          href="https://culbertson-clock.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Portfolio4} alt="Portfolio3" className="worksImg" />
        </a>
      </div>

      {/* <button className="worksBtn">See More</button> */}
    </section>
  );
};
