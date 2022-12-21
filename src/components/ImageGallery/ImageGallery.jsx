import React, {Component} from "react";
// import {Ul} from "./ImageGallery.styled";
// import {getImages} from "../../services/fetchApi";
import {GalleryItem} from "../GalleryItem/GalleryItem";
import {Button} from "../Button/Button";
import Modal from "../Modal/Modal";
import {Gallery} from "./ImageGallery.styled";
// import {Loader} from "../Loader/Loader";



export class ImageGallery extends Component {

  state = {
    modal: false,
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
    if (value.target.nodeName === 'IMG') {
      this.modalStatus({link: imageLink, alt: imageAlt});
    }
  }

  closeModal = () => {
    this.modalStatus(false);
  }

  render() {
    const images = this.props.images;
    const page = this.props.page;
    const pages = Math.ceil(this.props.totalImages / 12);
    const {modal} = this.state
    console.log(images, page, pages);
    // console.log(page);

    return (
      <Gallery onClick={this.onClick}>


        {modal && <Modal value={this.state.modal} closeModal={this.closeModal}></Modal>}
      {images.length > 0 &&
        <GalleryItem images={images} modalStatus={this.modalStatus}></GalleryItem> }
        {page < pages && <Button page={page} loadMore={this.props.loadMore}></Button>}
      </Gallery>
    )
  };
};
