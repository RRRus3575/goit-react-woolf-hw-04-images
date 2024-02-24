import React, { Component, useEffect } from "react";

const Modal = (props) => {
  const handleClickESC = (e) => {
    if (e.code === "Escape") {
      props.modalToggle();
    }
  };

  const modalClose = (e) => {
    if (e.target.getAttribute("class") === "overlay") {
      props.modalToggle();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleClickESC);
    return document.removeEventListener("keydown", handleClickESC);
  }, []);

  // componentDidMount() {
  //   document.addEventListener("keydown", handleClickESC);
  // }

  // componentWillUnmount() {
  //   document.removeEventListener("keydown", handleClickESC);
  // }

  return (
    <div className="overlay" onClick={modalClose}>
      <div className="modal">
        <img src={props.img} />
      </div>
    </div>
  );
};

export default Modal;
