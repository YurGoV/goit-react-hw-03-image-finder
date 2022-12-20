import React from "react";
import {Img, Li, Ul} from "./GalleryItem.styled";

export const GalleryItem = ({images}) => {


  console.log(images);
  return (
    <Ul>
    {images.map(image => (
      <Li key={image.id}>
        <Img src={image.webformatURL} data-link={image.largeImageURL} data-alt={image.tags} alt={image.tags}></Img>
      </Li>
      ))}
    </Ul>
  );
};

// image.largeImageURL

