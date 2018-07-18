import React from "react";
import Modal from "react-modal";

const OptionModal = (props) => (
  <Modal 
  isOpen={!!props.selectedOption}
  onRequestClose={props.handleClearSelectedOption}
  //onRequestClose calls function when background clicked or esc entered
  contentLabel="Selected Option"
  >
  <h3>Do This!</h3>
  {props.selectedOption && <p>{props.selectedOption}</p>}
  <button onClick={props.handleClearSelectedOption} >Okay</button>
  </Modal>
);

export default OptionModal;
