import React, {Component} from "react";
import {Searchbar} from "./Searchbar/Searchbar";
import {Div} from "./App.styled";
import {getImages} from "../services/fetchApi";
import {ImageGallery} from "./ImageGallery/ImageGallery";

export class App extends Component {

state = {
  query: '',
  queryResponse: {},
}


  fetchImages = async (query) => {
    console.log('test');
    console.log(query);
    const images = await getImages(query);
    console.log(images);
    this.setState({
      queryResponse: images,
      query:query,
    })

  }

render() {
  return (
    <Div>

      <Searchbar onSubmit={this.fetchImages}></Searchbar>
      <ImageGallery images={this.state.queryResponse}>IG</ImageGallery>

    </Div>
  );
};
};
