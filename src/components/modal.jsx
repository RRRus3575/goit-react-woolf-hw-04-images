import React, { Component, useEffect } from "react";

const Modal = (props) => {
  const handleClickESC = (e) => {
    if (e.code === "Escape") {
      console.log("Escape");
      props.modalClose();
    }
  };

  const modalClose = (e) => {
    if (e.target.getAttribute("class") === "overlay") {
      props.modalClose();
    }
  };

  useEffect(() => {
    console.log("ESChand");
    document.addEventListener("keydown", handleClickESC);
    return () => {
      document.removeEventListener("keydown", handleClickESC);
    };
  }, []);

  return (
    <div className="overlay" onClick={modalClose}>
      <div className="modal">
        <img src={props.img} />
      </div>
    </div>
  );
};

export default Modal;
