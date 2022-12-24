import React from "react";
import {Header} from "./Searchbar.styled";
import {SearchForm} from "../SearchForm/SearchForm";

export const Searchbar = ({onSubmit, loader}) => {

  return (
    <Header>
      <SearchForm loader={loader} onSubmit={onSubmit}></SearchForm>
    </Header>
  )

}
