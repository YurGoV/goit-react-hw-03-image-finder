import React, {Component} from "react";
import {Ul} from "./ImageGallery.styled";
// import {getImages} from "../../services/fetchApi";
import {GalleryItem} from "../GalleryItem/GalleryItem";
// import {Button} from "../Button/Button";
import Modal from "../Modal/Modal";
import {Gallery} from "./ImageGallery.styled";
import {Loader} from "../Loader/Loader";
import {ModalContent} from "../Modal/Modal.styled";
import {ButtonStyled} from "./ImageGallery.styled";



export class ImageGallery extends Component {

  state = {
    modal: true,
    imageOpacity: 0,
    modalLoader: true,
    // imagesLengths: 0,
  }

  componentDidMount() {
    console.log('Gallery Mounted');
    // this.setState({
    //   imagesLengths: this.props.images.length,
    // })
    // this.modalStatus(true);

  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Gallery Updated');
    console.log(prevState);
    console.log(this.state);
    console.log(prevProps.images.length);
    console.log(this.props.images.length);


    if (prevState === this.state) {
      console.log('gallery updated WITHOUT state change');
      this.modalStatus(true);
    } else  {
      console.log('gallery updated BY state change')
    }
    // this.modalStatus(true);


  }

  modalStatus = (value) => {//todo: refactoring
    this.setState({
      modal: value,
    })
  }

  onClick = (value) => {
    console.log(value.target.nodeName);
    console.dir(value.target.dataset.link);
    const imageLink = value.target.dataset.link;
    const imageAlt = value.target.dataset.alt
    if (value.target.nodeName === 'IMG' && value.target.dataset.link) {
      console.log('ssssssssss');
      console.log(value.currentTarget);
      console.log(value.target);
      this.setState({
        modal: {link: imageLink, alt: imageAlt},
        modalLoader: true,
      })
      // this.modalStatus({link: imageLink, alt: imageAlt, modalLoader: true});
    }
  }

  closeModal = () => {
    // this.modalStatus(false);
    this.setState({
      modal: false,
      imageOpacity: 0,
    })
  }
  onImagesLoad = () => {
    console.log('IMGsss');
  }


  onImgLoaded = () => {//todo: how to move out?
    console.log('load')

    this.setState({
      // modal: false,
      imageOpacity: 1,
      modalLoader: false,
    })
  }

  loadMore = () => {
    'lllll.console.log()'
    const page = this.props.page;
    this.props.loadMore(page + 1);
    this.setState({
      modalLoader: true,
    })
  }

  render() {
    const images = this.props.images;
    const page = this.props.page;
    const pages = Math.ceil(this.props.totalImages / 12);
    const {modal} = this.state;
    const {imageOpacity} = this.state;


    console.log(images, page, pages);
    // console.log(page);

    return (
      <>
      <Gallery onClick={this.onClick}>
      <Ul>

        {modal && <Modal value={this.state.modal} closeModal={this.closeModal}>
          {modal.link && <ModalContent opacityValue={imageOpacity}><img src={modal.link} onLoad={this.onImgLoaded} alt={modal.alt} /></ModalContent>}
          <Loader loader={this.state.modalLoader} size={250}></Loader>
        </Modal>}
      {images.length > 0 &&
        <GalleryItem images={images} modalStatus={this.modalStatus}></GalleryItem> }

      </Ul>

      </Gallery>
    {page < pages && <ButtonStyled onClick={this.loadMore}>Load More</ButtonStyled>}
      </>
    )
  };
};
