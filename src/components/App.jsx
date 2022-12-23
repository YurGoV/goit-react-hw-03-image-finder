import React, {Component} from "react";
import {Searchbar} from "./Searchbar/Searchbar";
import {Div} from "./App.styled";
import {getImages} from "../services/fetchApi";
import {ImageGallery} from "./ImageGallery/ImageGallery";
import {toast, ToastContainer, Zoom} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const perPage = 12;

export class App extends Component {

  state = {
    query: 'motorcycles',
    queryResponse: NaN,
    page: 1,
    totalImages: 0,
    loader: true,//todo: smallLoader
    fetchError: '',//todo: !!!!!!!!!!!!!!!!!!!!!!!! не спрацьовує повертання на NaN - замінити початкове значення на ''.
  }

  async componentDidMount() {

    try {
      const response = await this.fetchImages(this.state.query, this.state.page, perPage);
      // console.log(await response);
      // if (response.hits.length > 0) {// todo: зайве? перевірити
        this.setState({
          queryResponse: response.hits,
          totalImages: response.totalHits,
          fetchError: '',
        })
      // }
    } catch (error) {
      this.setState({
        fetchError: error,
      })
    } finally {
      this.setState({
        loader: false,
      })
    }
  }

  async componentDidUpdate(prevProps, prevState) {
    // console.log(prevState.page);
    // console.log(this.state.page);
    //
    // console.log(prevState.query);
    // console.log(this.state.query);

    if (this.state.query !== prevState.query) {
      try {
      const response = await this.fetchImages(this.state.query, this.state.page, perPage);

      if (response.hits.length === 0) {
        return toast('Sorry, we couldn\'t find any images according to your request :(')
      }
      return this.setState({
        queryResponse: response.hits,
        totalImages: response.totalHits,
        fetchError: '',
      })
      } catch (error) {
        this.setState({
          fetchError: error,
        })
      } finally {
        this.setState({
          loader: false,
        })
      }

    }
    if (this.state.query === prevState.query && this.state.page !== prevState.page) {
      try {
      const response = await this.fetchImages(this.state.query, this.state.page, perPage);
      // const newImagesArr = () => {
      return this.setState({
        queryResponse: [...this.state.queryResponse, ...response.hits],
        fetchError: '',
      })
      } catch (error) {
        this.setState({
          fetchError: error,
        })
      } finally {
        this.setState({
          loader: false,
        })
      }
    }
  }

  fetchImages = async (query, page, perPage) => {
    // console.log('test');
    // console.log(query);
    // console.log(this.state.queryResponse);

    if (!this.state.loader) {
      this.loaderLoad(true);
    }

    const images = await getImages(query, page, perPage);

    // console.log(images);

    this.loaderLoad(false);

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

  loaderLoad = (status) => {
    this.setState({
      loader: status,
    })
  }

  render() {
    return (
      <Div>

        <Searchbar onSubmit={this.searchOnQuery} loader={this.state.loader}></Searchbar>

        <ImageGallery
          images={this.state.queryResponse}
          page={this.state.page}
          totalImages={this.state.totalImages}
          loadMore={this.loadMore}
          fetchError={this.state.fetchError}
        >
        </ImageGallery>

        <ToastContainer
          autoClose={2000}
          position="top-center"
          theme="light"
          transition={Zoom}
        />
      </Div>
    );
  };
}
