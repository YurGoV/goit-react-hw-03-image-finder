import React from "react";
import {ButtonStyled} from "./Button.styled";

export const Button = ({loadMore}) => {

  // const onLoadMoreClick = () => {
  //   console.log('loadmoreclick');
  //   console.log(page);
  //   loadMore(page +1);
  // }

  return (
    <ButtonStyled onClick={loadMore}>Load More</ButtonStyled>
  )
}
