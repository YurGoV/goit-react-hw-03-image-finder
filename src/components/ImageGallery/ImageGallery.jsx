import React, {Component} from "react";
// import {Ul} from "./ImageGallery.styled";
// import {getImages} from "../../services/fetchApi";
import {GalleryItem} from "../GalleryItem/GalleryItem";



export class ImageGallery extends Component {

  state = {
    modal: false,
  }


  render() {
    const images = this.props.images;
    // const page = this.props.page;
    console.log(images);
    // console.log(page);

    return (
      <>
      {images.length > 0 && <GalleryItem images={images}></GalleryItem> }
      </>
    )
  };
};
