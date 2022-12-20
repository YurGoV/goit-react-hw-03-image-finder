import React, {Component} from "react";
import {Backdrop, ModalContent} from "./Modal.styled";
import { createPortal } from 'react-dom';


const modalRoot = document.querySelector('#modal-root');
console.log(modalRoot);

export default class Modal extends Component {

  componentDidMount() {
    console.log('Modal componentDidMount');
    window.addEventListener('keydown', this.onKeyDown);
    // const imgLink = this.props.value
    // console.log(imgLink);
  }

  componentWillUnmount() {
    console.log('Modal componentWillUnmount');
    window.removeEventListener('keydown', this.onKeyDown);
  }

  onKeyDown = e => {
    if (e.code === 'Escape') {
      console.log('Нажали ESC, нужно закрыть модалку');

      this.props.closeModal();
    }
  };

  onBackdropClick = event => {
    console.log('Кликнули в бекдроп');

    console.log('currentTarget: ', event.currentTarget);
    console.log('target: ', event.target);


    if (event.currentTarget === event.target) {
      this.props.closeModal();
    }
  };

  imgLink = this.props.value.link
  imgAlt = this.props.value.alt
  // console.log(imgLink);

  render() {
    return createPortal(
      <Backdrop onClick={this.onBackdropClick}>
        <ModalContent><img src={this.imgLink} alt={this.imgAlt} /></ModalContent>
      </Backdrop>,
      modalRoot,
    )
  }
}
