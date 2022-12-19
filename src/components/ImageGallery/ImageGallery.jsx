import React, {Component} from "react";
// import {Ul} from "./ImageGallery.styled";
// import {getImages} from "../../services/fetchApi";
import {GalleryItem} from "../GalleryItem/GalleryItem";
import {Button} from "../Button/Button";



export class ImageGallery extends Component {

  state = {
    modal: false,
  }


  render() {
    const images = this.props.images;
    const page = this.props.page;
    const pages = Math.ceil(this.props.totalImages / 12);
    // const page = this.props.page;
    console.log(images, page, pages);
    // console.log(page);

    return (
      <>
      {images.length > 0 && <GalleryItem images={images}></GalleryItem> }
        {page < pages && <Button page={page} loadMore={this.props.loadMore}></Button>}
      </>
    )
  };
};
