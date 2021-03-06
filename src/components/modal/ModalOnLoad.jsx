import React from "react";
import "./ModalOnLoad.css";
import ReactDom from "react-dom";

import InscricaoCard from "./layout/InscricaoCard.jsx";
import { useState, useEffect } from "react";

export default function ModalOnLoad() {
  const [modaCardOpen, setModalCardOpen] = useState(false); // Abre o modal

  useEffect(() => {
    if (localStorage.length === 0) {
      setTimeout(() => setModalCardOpen(true), 11000);
    }
  }, []);

  function setModal(e) {
    if (
      e.target.className === "modalBg" ||
      e.target.className === "xisHitBox" || // Xis para fechar o modal
      e.target.tagName === "svg" || // Xis para fechar o modal
      e.target.tagName === "path" // Xis para fechar o modal
    ) {
      setModalCardOpen(!modaCardOpen);
      localStorage.setItem("firstTime", "off");
    }
  }

  if (!modaCardOpen) return null;

  return ReactDom.createPortal(
    <div className="modalCard" onClickCapture={(e) => setModal(e)}>
      <div className="modalBg">
        <InscricaoCard />
      </div>
    </div>,
    document.getElementById("portal")
  );
}
