import React, { Component } from "react";
import ReactModal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
    height: "75vh",
    transition: "all 2s fadeIn",
    backgroundColor: "#fff" 
  },
  overlay: {
    backgroundColor: "rgba(80, 80, 80, 0.8)"
  }
};

ReactModal.setAppElement("#root");

export class Modal extends Component {
 
    state = {
      modalIsOpen: false
    };

  openModal = () => {
    this.setState({ modalIsOpen: this.props.modalIsOpen });
  }

  afterOpenModal = () => {
  }

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  }

  render() {
    return (
      <div>
        <ReactModal
          isOpen={this.props.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
        >
        {this.props.children}
        </ReactModal>
      </div>
    );
  }
}

export default Modal;
