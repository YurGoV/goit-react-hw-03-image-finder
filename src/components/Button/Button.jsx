import React from "react";
import {ButtonStyled} from "./Button.styled";

export const Button = ({page, loadMore}) => {

  const onLoadMoreClick = () => {
    console.log('loadmoreclick');
    console.log(page);
    loadMore(page +1);
  }

  return (
    <ButtonStyled onClick={onLoadMoreClick}>Load More</ButtonStyled>
  )
}
