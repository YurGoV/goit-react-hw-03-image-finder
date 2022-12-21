import React from "react";
import {Header} from "./Searchbar.styled";
import {SearchForm} from "../SearchForm/SearchForm";
// import {Loader} from "../Loader/Loader";



export const Searchbar = ({onSubmit, loader}) => {

  console.log(typeof onSubmit);

  // const onSearchBar = (value) => {
  //   console.log(value);
  //   onSubmit(value);
  // }

  return (
    <Header>
      <SearchForm loader={loader} onSubmit={onSubmit}></SearchForm>
    </Header>
  )

}
