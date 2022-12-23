import React from "react";
import {Img, Li} from "./GalleryItem.styled";
import {perPage} from "../App";

export const GalleryItem = ({images, onImagesLoaded}) => {


  // data-alt={image.tags}//todo: нижче- дублювання...
  // alt={image.tags}>

  // console.log(images);
  const totalImages = images.length;
  let loadedImages = 0;
  let newImages = 0;



  const onImagesLoad = () => {

    if (images.length > perPage) {
      // console.log('more ', perPage);
      newImages = images.length - (Math.floor(totalImages/perPage) - 1) * perPage;
      if (newImages > perPage) {
        newImages = newImages - perPage;
      }
    } else {
      newImages = images.length;
    }

    loadedImages += 1;
    console.log('imgs to load: ', newImages);
    console.log(loadedImages);
    if (loadedImages === newImages) {
      console.log('all images Loaded');
      onImagesLoaded();
    }
  }

  // console.log(images.length);
  return (
<>
    {images.map(image => (
      <Li key={image.id}>
        <Img
          src={image.webformatURL}
          onLoad={onImagesLoad}
          loading="lazy"
          data-link={image.largeImageURL}
          data-alt={image.tags}
          dataset={'test'}
          alt={image.tags}>
        </Img>
      </Li>
      ))}
  </>
  );

};

