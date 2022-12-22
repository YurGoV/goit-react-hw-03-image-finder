import React from "react";
import {Img, Li} from "./GalleryItem.styled";

export const GalleryItem = ({images, modalStatus}) => {


  // data-alt={image.tags}//todo: нижче- дублювання...
  // alt={image.tags}>

  console.log(images);
  const totalImages = images.length;
  let loadedImages = 0;
  let newImages = 0;



  const onImagesLoad = () => {

    if (images.length > 12) {
      console.log('more 12');
      newImages = images.length - (Math.floor(totalImages/12) - 1) * 12;
      if (newImages > 12) {
        newImages = newImages - 12;
      }
    } else {
      newImages = images.length;
    }
    loadedImages += 1;
    console.log('imgs to load: ', newImages);
    console.log(loadedImages);
    if (loadedImages === newImages) {
      console.log('all images Loaded');
      modalStatus(false);
    }
  }

  console.log(images.length);
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

// image.largeImageURL

