import React, { useState } from "react";
import "./Modal.css";
import ReactDom from "react-dom";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import moment from "moment";

export default function ModalTeste({ open, member }) {
  const [isLoaded, setLoaded] = useState(false); // Para ter um delay na foto e um placeholder descente

  if (!open) return null;

  return ReactDom.createPortal(
    <div className="modalCard">
      <div className="modalBg">
        <div className="modalContent">
          <div className="cabecalho">
            <h1 className="ModalMemberName">{member.name}</h1>
            {/*Xis para fechar o modal */}
            <div className="xisHitBox">
              <IoClose className="ioClose" />
            </div>
            {/*  */}
          </div>
          <div className="ContentMemberModal">
            <div className="infoModal">
              <dt>
                Curso: <strong>{member.curso}</strong>
              </dt>
              <dt>
                Ano: <strong>{member.ano}</strong>
              </dt>
              <dt>
                Idade:{" "}
                <strong>{moment().diff(member.nascimento, "years")}</strong>
              </dt>
              {member.linguagens != "" && (
                <dt>
                  Principais Tecnologias e Frameworks:{" "}
                  <strong>{member.linguagens}</strong>
                </dt>
              )}
              {member.hobby != "" && (
                <dt>
                  Hobby: <strong>{member.hobby}</strong>
                </dt>
              )}
            </div>

            <div className="Member">
              <img
                src={member.foto.replace("open", "uc")}
                alt={`Foto de ${member.name}`}
                className={`fotoModal ${isLoaded && "open"}`}
                onLoad={() => setLoaded(true)}
              />
              <div className={`placeHolderModalMembers ${isLoaded && "open"}`}>
                <FaUser />
              </div>
              <div className="socialModalMembersMembers">
                {member.linkedinLink != "" && (
                  <a
                    className="socialMediaModal socialLinkedin"
                    href={member.linkedinLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillLinkedin />
                  </a>
                )}
                {member.githubLink != "" && (
                  <a
                    className="socialMediaModal socialGithub"
                    href={member.githubLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillGithub />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
}
