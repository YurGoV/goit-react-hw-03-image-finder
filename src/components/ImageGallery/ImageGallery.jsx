import React, {Component} from "react";
import {Ul} from "./ImageGallery.styled";
import {GalleryItem} from "../GalleryItem/GalleryItem";
import {Modal} from "../Modal/Modal";
import {Gallery} from "./ImageGallery.styled";
import {Loader} from "../Loader/Loader";
import {ModalContent} from "../Modal/Modal.styled";
import {ButtonStyled} from "./ImageGallery.styled";
import {Message} from "./Messages";
import {perPage} from "../App";
import {toast} from "react-toastify";

export class ImageGallery extends Component {

  state = {
    modal: true,//todo: відмовитись від буліана - стейт машина + НаН. сюди - тільки валью
    imageOpacity: 0,
    modalLoader: true,
    status: 'idle',
    loading: false,
    modalImage: false,
  }


  componentDidUpdate(prevProps, prevState) {//todo: тут встановлювати більшість статусів!!!

    if (this.props.fetchError !== '') {
      return toast('Sorry, something is wrong  :(')
    }

    if (!this.props.images) {
      this.setState({
        loading: false,
      })
    }

    if (prevProps.images !== this.props.images) {
      if (this.props.images.length > 0) {//todo: more?
        this.setState({
          loading: true,
          modal: true,//todo: ???
          status: 'pending',
        })
      } else if (this.props.images.length === 0 && this.props.fetchError === '') {
        if (!this.state.loading) {
          this.setState({
            status: 'empty',
          })
        }
      }
    }
  }
  //
  // modalStatus = (value) => {//todo: refactoring//NO
  //   if (!value) {
  //     this.closeModal()
  //   } else {
  //     this.setState({
  //       modal: value,
  //     })
  //   }
  // }

  onClick = (value) => {

    const imageLink = value.target.dataset.link;
    const imageAlt = value.target.dataset.alt
    if (value.target.nodeName === 'IMG' && value.target.dataset.link) {
      this.setState({
        modal: {link: imageLink, alt: imageAlt},
        modalLoader: true,//todo: status-pending?//NO. modalImage??
        modalImage: true,
      })
    }
  }

  closeModal = () => {
    this.setState({
      modalLoader: true,
      modal: false,
      imageOpacity: 0,
      status: 'idle',
      modalImage: false,
    })
  }

  onImgLoaded = () => {
    this.setState({
      imageOpacity: 1,
      modalLoader: false,
    })
  }

  onImagesLoaded = () => {
    this.setState({
      status: 'idle',
    })
  }

  loadMore = () => {
    const page = this.props.page;
    this.props.loadMore(page + 1);
  }

  render() {
    const {images, page} = this.props;
    const {modal, imageOpacity, status, loading, modalImage} = this.state;
    const LoadMoreBtn = () => {
      const pages = Math.ceil(this.props.totalImages / perPage);
      return page < pages;
    }

    return (
      <>
        <Gallery onClick={this.onClick}>

          {status === 'empty'
            && <Message>Sorry, we couldn't find any images according to your request :(</Message>}

          {status === 'pending'
            && <Modal value={this.state.modal} closeModal={this.closeModal}>
              <Loader loader={this.state.modalLoader} size={250}></Loader>
            </Modal>}

          {modalImage
            && <Modal value={this.state.modal} closeModal={this.closeModal}>
              <ModalContent opacityValue={imageOpacity}><img src={modal.link} onLoad={this.onImgLoaded}
                                                             alt={modal.alt}/></ModalContent>
              <Loader loader={this.state.modalLoader} size={250}></Loader>
            </Modal>
          }

          {loading
            && <Ul>
              <GalleryItem images={images} onImagesLoaded={this.onImagesLoaded}></GalleryItem>
            </Ul>}


        </Gallery>
        {LoadMoreBtn() && <ButtonStyled onClick={this.loadMore}>Load More</ButtonStyled>}
      </>
    )
  };
};




