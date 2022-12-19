import React from "react";
import {Img, Li, Ul} from "./GalleryItem.styled";

export const GalleryItem = ({images}) => {

  console.log(images);
  return (
    <Ul>
    {images.map(image => (
      <Li key={image.id}>
        <Img src={image.previewURL} alt={image.tags}></Img>
      </Li>
      ))}
    </Ul>
  );
};

/*


<Li className="gallery-item">
  <Img src="" alt=""/>
</Li>

*/
