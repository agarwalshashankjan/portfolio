import React from "react";
import ReactDOM from "react-dom";

import "./Modal.css";

const Modal = ({ closeModal }) => {
  return ReactDOM.createPortal(
    <div onClick={closeModal} className="modal-overlay">
      <div onClick={(e) => e.stopPropagation()} className="modal-container">
        <div className="upper-section">
          <h1>Huge Announcement!</h1>
          <p onClick={closeModal} className="close">
            &times;
          </p>
        </div>
        <div className="middle-section">
          <h3>I created this Portfolio</h3>
          <p>Do you wish to have the similar portfolio for you?</p>
          <p>Follow me on Insta and DM to get a tutorial absolutely free!!!</p>
          <p>
            I'll guide you on demand coz I think we can always learn together
            and learning should be for all.
          </p>
        </div>
        <div className="lower-section">
          <a onClick={closeModal} className="modal-btn btn-red">
            Close
          </a>
          <a
            href="https://instagram.com/itzmoonlover"
            target="_blank"
            rel="noreferrer"
            className="modal-btn btn-green"
          >
            Get-in-touch
          </a>
        </div>
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;
