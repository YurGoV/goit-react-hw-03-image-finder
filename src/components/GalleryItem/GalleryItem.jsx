import React from "react";
import {Img, Li, Ul} from "./GalleryItem.styled";

export const GalleryItem = ({images}) => {


  // data-alt={image.tags}//todo: нижче- дублювання...
  // alt={image.tags}>


  console.log(images);
  return (
    <Ul>
    {images.map(image => (
      <Li key={image.id}>
        <Img
          src={image.webformatURL}
          loading="lazy"
          data-link={image.largeImageURL}
          // data-test={`${image.imageHeight}`}
          // data-height={image.imageHeight}
          data-alt={image.tags}
          dataset={'test'}
          alt={image.tags}>
        </Img>
      </Li>
      ))}
    </Ul>
  );
};

// image.largeImageURL

