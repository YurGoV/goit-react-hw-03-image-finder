import React, {Component} from "react";
import {Searchbar} from "./Searchbar/Searchbar";
import {Div} from "./App.styled";
import {getImages} from "../services/fetchApi";
import {ImageGallery} from "./ImageGallery/ImageGallery";

export class App extends Component {

state = {
  query: 'motorcycles',
  queryResponse: [],
  page: 1,
  totalImages: 0,
}

async componentDidMount() {
  // const query = this.state.query;
  // console.log(query);
  // console.log(this.state.query);
  // this.setState({
  //   query: [],
  // })
  const response = await this.fetchImages(this.state.query, this.state.page);
  console.log(await response);

  this.setState({
    queryResponse: response.hits,
    totalImages: response.totalHits,
  })

  // .then(console.log(images));
}

/*

=========
  const newImagesArr = () => {
    if (this.state.page === 1) {
      return images.hits;
    }
    return [...this.state.queryResponse, ...images.hits]
  }

  this.setState({
                  queryResponse: newImagesArr(),
  query:query,
  page: page,
  totalImages: images.totalHits,
})
======
*/


async componentDidUpdate( prevProps, prevState) {
  console.log(prevState.page);
  console.log(this.state.page);

  console.log(prevState.query);
  console.log(this.state.query);

  if (this.state.query !== prevState.query) {
    console.log('nEW QUERY');
    const response = await this.fetchImages(this.state.query, this.state.page);
    return this.setState({
      queryResponse: response.hits,
      totalImages: response.totalHits,
    })
  }
  if (this.state.query === prevState.query && this.state.page !== prevState.page) {
    const response = await this.fetchImages(this.state.query, this.state.page);
    // const newImagesArr = () => {
      return this.setState({
        queryResponse: [...this.state.queryResponse, ...response.hits],
      })
    // }
  }
}


  fetchImages = async (query, page) => {
    console.log('test');
    console.log(query);
    console.log(this.state.queryResponse);
    const images = await getImages(query, page);
    console.log(images);

    // return this.setState({
    //   query: query,
    //   totalImages: images.totalHits,
    //   totalImages: images.totalHits,
    // })

    return await images;
  }

  searchOnQuery = (query) => {
    this.setState({
      query: query,
      page: 1,
    })
  }

  loadMore = (page) => {
    this.setState({
      page: page,
    })
  }

render() {
  return (
    <Div>

      <Searchbar onSubmit={this.searchOnQuery}></Searchbar>
      <ImageGallery
        images={this.state.queryResponse}
        page={this.state.page}
        totalImages={this.state.totalImages}
        loadMore={this.loadMore}>
        </ImageGallery>

    </Div>
  );
};
};
