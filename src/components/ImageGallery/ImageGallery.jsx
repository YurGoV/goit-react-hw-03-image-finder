import React, {Component} from "react";
// import {Ul} from "./ImageGallery.styled";
// import {getImages} from "../../services/fetchApi";
import {GalleryItem} from "../GalleryItem/GalleryItem";



export class ImageGallery extends Component {

  state = {
    modal: false,
  }

  // query = this.props.query;




  // fetchImages(query);

  render() {
    const images = this.props.images.hits;
    console.log(images);

    return (
      <>
      {images && <GalleryItem images={images}></GalleryItem> }
      </>
    )
  };
};
