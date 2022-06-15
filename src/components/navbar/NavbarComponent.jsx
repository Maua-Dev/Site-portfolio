import React from "react";
import logo from "./assets/Logo.png";
import "./Navbar.css";
import { Link as LinkS } from "react-scroll";
import { useState } from "react";

export default function NavbarComponent() {
  const linksList = [
    {
      id: 1,
      text: "Sobre Nós",
      url: "SobreNos",
    },
    {
      id: 2,
      text: "Projetos",
      url: "projetos",
    },
    {
      id: 3,
      text: "Membros",
      url: "membros",
    },
    {
      id: 4,
      text: "Contato",
      url: "Contato",
    },
  ];

  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <div className="navbar">
      <LinkS to="home" smooth={true} spy={true} duration={1000}>
        <img src={logo} alt="Dev. Community" className="nav-logo" />
      </LinkS>
      <div className={`nav-container ${navbarOpen && "open"}`}>
        {linksList.map((link) => {
          return (
            <LinkS
              className="nav-link"
              to={link.url}
              key={link.id}
              smooth={true}
              spy={true}
              offset={-document.documentElement.clientHeight * 0.075}
              duration={750}
              onClick={() => setNavbarOpen(false)}
              isDynamic={true}
            >
              {link.text}
            </LinkS>
          );
        })}
      </div>
      <div
        className={`nav-toggle  ${navbarOpen && "open"}`}
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        <div className="hamburguer-bars"></div>
      </div>
    </div>
  );
}
