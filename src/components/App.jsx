import React, {Component} from "react";
import {Searchbar} from "./Searchbar/Searchbar";
import {Div} from "./App.styled";
import {getImages} from "../services/fetchApi";
import {ImageGallery} from "./ImageGallery/ImageGallery";

export class App extends Component {

state = {
  query: 'motorcycles',
  queryResponse: {},
  page: 1,
  totalPages: '',
}

componentDidMount() {
  // const query = this.state.query;
  // console.log(query);
  // console.log(this.state.query);
  this.fetchImages(this.state.query, this.state.page);
}

  fetchImages = async (query, page) => {
    console.log('test');
    console.log(query);
    const images = await getImages(query, page);
    console.log(images);
    this.setState({
      queryResponse: images.hits,
      query:query,
      page: page,
      totalPages: images.totalHits,
    })

  }

render() {
  return (
    <Div>

      <Searchbar onSubmit={this.fetchImages}></Searchbar>
      <ImageGallery images={this.state.queryResponse}></ImageGallery>

    </Div>
  );
};
};
