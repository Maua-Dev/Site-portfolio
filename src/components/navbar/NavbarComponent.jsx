import React from "react";
import logo from "./assets/Logo.svg";
import "./Navbar.css";

export default function NavbarComponent() {
  const linksList = [
    {
      id: 1,
      text: "Sobre Nós",
      url: "#SobreNos",
    },
    {
      id: 2,
      text: "Projetos",
      url: "#projetos",
    },
    {
      id: 3,
      text: "Membros",
      url: "#membros",
    },
    {
      id: 4,
      text: "Contato",
      url: "#Contato  ",
    },
  ];

  function scrollDown(e) {
    e.preventDefault(); // Para fazer o offset quando tiver o scroll
    const target = e.target.getAttribute("href");
    const location = document.querySelector(target).offsetTop;

    const navbarSize = document.documentElement.clientHeight * 0.075; // o Tamanho da Navbar vh para px   1vh = 1/100 tela

    window.scrollTo({
      left: 0,
      top: location - navbarSize, //offset pra ficar junto
    });
  }

  return (
    <div className="navbar">
      <a href="#home">
        <img src={logo} className="nav-logo" />
      </a>
      <div className="nav-links">
        {linksList.map((link) => {
          return (
            <a href={link.url} key={link.id} onClick={scrollDown}>
              {link.text}
            </a>
          );
        })}
      </div>
    </div>
  );
}
