import { useEffect } from "react";

const Modal = ({ modalClosed, img }) => {
  const modalClose = (e) => {
    if (e.target.getAttribute("class") === "overlay") {
      modalClosed();
    }
  };

  useEffect(() => {
    const handleClickESC = (e) => {
      if (e.code === "Escape") {
        console.log("Escape");
        modalClosed();
      }
    };

    document.addEventListener("keydown", handleClickESC);
    return () => {
      document.removeEventListener("keydown", handleClickESC);
    };
  }, [modalClosed]);

  return (
    <div className="overlay" onClick={modalClose}>
      <div className="modal">
        <img src={img} />
      </div>
    </div>
  );
};

export default Modal;
