import React, {Component} from "react";
import {Backdrop, ModalContent, ModalLoader} from "./Modal.styled";
import { createPortal } from 'react-dom';
import {Loader} from "../Loader/Loader";


const modalRoot = document.querySelector('#modal-root');
console.log(modalRoot);

export default class Modal extends Component {//todo - переписати на функцію?

  state = {
    modalLoader: true,
    imageOpacity: 0,
  }

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
    console.log(event.target);


    if (event.currentTarget === event.target) {
      this.props.closeModal();
    }
  };

  onImgLoaded = () => {
    console.log('load')

    this.setState({
      modalLoader: false,
      imageOpacity: true,
    })
  }

  imgLink = this.props.value.link
  imgAlt = this.props.value.alt
  imgTest = this.props.dataset



  render() {
    console.log(this.imgLink);
    console.dir(this.imgTest);
    console.log(this.imgAlt);
    console.log(this.state.imageOpacity);

    return createPortal(
      <Backdrop onClick={this.onBackdropClick}>
        <div>

        <ModalContent opacityValue={this.state.imageOpacity}><img src={this.imgLink} onLoad={this.onImgLoaded} alt={this.imgAlt} /></ModalContent>
          <ModalLoader>
            <Loader loader={this.state.modalLoader} size={250}></Loader>
          </ModalLoader>
        </div>
        </Backdrop>,
      modalRoot,
    )
  }
}
