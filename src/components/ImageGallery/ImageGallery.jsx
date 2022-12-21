import React, {Component} from "react";
import {Ul} from "./ImageGallery.styled";
// import {getImages} from "../../services/fetchApi";
import {GalleryItem} from "../GalleryItem/GalleryItem";
import {Button} from "../Button/Button";
import Modal from "../Modal/Modal";
import {Gallery} from "./ImageGallery.styled";
// import {Loader} from "../Loader/Loader";



export class ImageGallery extends Component {

  state = {
    modal: true,
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
    if (value.target.nodeName === 'IMG') {
      this.modalStatus({link: imageLink, alt: imageAlt});
    }
  }

  closeModal = () => {
    this.modalStatus(false);
  }
  onImagesLoad = () => {
    console.log('IMGsss');
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
      <Ul>

        {modal && <Modal value={this.state.modal} closeModal={this.closeModal}></Modal>}
      {images.length > 0 &&
        <GalleryItem images={images} modalStatus={this.modalStatus}></GalleryItem> }

      </Ul>
        {page < pages && <Button page={page} loadMore={this.props.loadMore}></Button>}
      </Gallery>
    )
  };
};
