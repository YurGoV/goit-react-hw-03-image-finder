import React from "react";
import {Header} from "./Searchbar.styled";
import {SearchForm} from "../SearchForm/SearchForm";



export const Searchbar = ({onSubmit}) => {

  console.log(typeof onSubmit);

  // const onSearchBar = (value) => {
  //   console.log(value);
  //   onSubmit(value);
  // }

  return (
    <Header>
      <SearchForm onSubmit={onSubmit}></SearchForm>
    </Header>
  )

}
