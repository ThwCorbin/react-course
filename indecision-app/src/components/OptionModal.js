import React from "react";
import Modal from "react-modal";

const OptionModal = props => (
  <Modal
    isOpen={!!props.selectedOption}
    onRequestClose={props.handleClearSelectedOption}
    // onRequestClose calls function when background clicked or esc entered
    contentLabel="Selected Option"
    closeTimeoutMS={250}
    className="modal"
  >
    <h3 className="modal__title">Do This!</h3>
    {props.selectedOption && (
      <p className="modal__body">{props.selectedOption}</p>
    )}
    <button className="button" onClick={props.handleClearSelectedOption}>
      Okay
    </button>
  </Modal>
);

export default OptionModal;
