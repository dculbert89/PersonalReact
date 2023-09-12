import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assets/logo.svg";
import { Link } from "react-scroll";
import contactImage from "../../assets/contact.png";
import menu from "../../assets/menu.png";

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="logo" />
      <div className="desktopMenu">
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-15}
          duration={500}
          className="desktopMenuListItem"
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="works"
          spy={true}
          smooth={true}
          offset={-60}
          duration={500}
          className="desktopMenuListItem"
        >
          Portfolio
        </Link>
        {/* <Link
          activeClass="active"
          to="clients"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="desktopMenuListItem"
        >
          Clients
        </Link> */}
      </div>
      <button
        className="desktopMenuBtn"
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
        <img src={contactImage} alt="" className="desktopMenuImg" />
        Contact Me
      </button>

      <img
        src={menu}
        alt="Menu"
        className="mobMenu"
        onClick={() => setShowMenu(!showMenu)}
      />
      <div className="navMenu" style={{ display: showMenu ? "flex" : "none" }}>
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-20}
          duration={500}
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="works"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          Portfolio
        </Link>
        {/* <Link
          activeClass="active"
          to="clients"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          Clients
        </Link> */}
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};
