import React, {Component} from "react";
import {Ul} from "./ImageGallery.styled";
// import {getImages} from "../../services/fetchApi";
import {GalleryItem} from "../GalleryItem/GalleryItem";
// import {Button} from "../Button/Button";
// import Modal from "../Modal/Modal";
import {Modal} from "../Modal/Modal";

import {Gallery} from "./ImageGallery.styled";
import {Loader} from "../Loader/Loader";
import {ModalContent} from "../Modal/Modal.styled";
import {ButtonStyled} from "./ImageGallery.styled";
import {Message} from "./Messages";

import {perPage} from "../App";
import {toast} from "react-toastify";
// import {validateYupSchema} from "formik";

// import {toast} from "react-toastify";

/*
initial//до отримання першої відповіді з фетчу
pending//завантажуємо
rejected//помилка // No through fetchError
empty//пуста відповідь
resolved//отримана відповідь
modalImage// відкриття модалки
*/


export class ImageGallery extends Component {

  state = {
    modal: true,//todo: відмовитись від буліана - стейт машина + НаН. сюди - тільки валью
    imageOpacity: 0,
    modalLoader: true,
    // imagesLengths: 0,
    status: 'idle',
    loading: false,
    modalImage: false,
  }


  /*
    componentDidMount() {//todo: delete?
      console.log('Gallery Mounted');
      // this.setState({
      //   imagesLengths: this.props.images.length,
      // })
      // this.modalStatus(true);
      if (this.props.fetchError === '' && this.state.status === 'rejected') {
        console.log('try to idle after rejected');
        this.setState({
            status: 'idle',
          })
        }

    }*/


  componentDidUpdate(prevProps, prevState) {//todo: тут встановлювати більшість статусів!!!
    // console.log('Gallery Updated');
    // console.log(prevState);
    // console.log(this.state);
    console.log(prevProps.images.length);
    console.log(this.props.images.length);

    console.log(this.props.fetchError.length);

    // const images = this.props.images;
    // console.log(images);

    if (!this.props.images) {
      this.setState({
        loading: false,
      })
    }

    if (!prevProps.fetchError && this.props.fetchError) {
      console.log('error');
      this.setState({
        status: 'rejected',
        modal: false,//todo: !!!! не працює!!

      })
      return toast('Sorry, something is wrong  :(')
    }

    if (prevProps.images !== this.props.images) {
      if (this.props.images.length > 0) {//todo: more?
        console.log('images changed!!!');
        this.setState({
          loading: true,
          modal: true,//todo: ???
          status: 'pending',
        })
      } else if (this.props.images.length === 0 && this.props.fetchError === '') {
        console.log('zero answer');
        if (!this.state.loading) {
          this.setState({
            status: 'empty',
          })
        }else {// todo: може зайве, якщо спрацює у ап.
          return toast('Sorry, we couldn\'t find any images according to your request :(')
        }
      }


    }

    /*if (this.props.fetchError !== '') {
      console.log('error');
      this.setState({
        status: 'rejected',
        modal: false,//todo: !!!! не працює!!
      })
    }*/


    /*


        if (prevState === this.state) {//todo: pending?
          console.log('gallery updated WITHOUT state change');
          this.setState({
            modal: true,
            modalLoader: true,
          })
        } else  {
          console.log('gallery updated BY state change')//todo: delete???
        }
    */


  }

  modalStatus = (value) => {//todo: refactoring//NO
    if (!value) {
      this.closeModal()
    } else {
      this.setState({
        modal: value,
      })
    }
  }

  onClick = (value) => {
    console.log(value.target.nodeName);
    console.dir(value.target.dataset.link);
    const imageLink = value.target.dataset.link;
    const imageAlt = value.target.dataset.alt
    if (value.target.nodeName === 'IMG' && value.target.dataset.link) {
      // console.log('ssssssssss');
      // console.log(value.currentTarget);
      // console.log(value.target);
      this.setState({
        modal: {link: imageLink, alt: imageAlt},
        modalLoader: true,//todo: status-pending?//NO. modalImage??
        modalImage: true,
      })
    }
  }

  closeModal = () => {
    // this.modalStatus(false);
    console.log('mopdallll closeddd');
    this.setState({
      modalLoader: true,
      modal: false,
      imageOpacity: 0,
      status: 'idle',
      modalImage: false,
    })
  }

  /*
  onImagesLoad = () => {
    console.log('IMGsss');
  }
*/

  onImgLoaded = () => {
    console.log('load')
    this.setState({
      // modal: false,
      imageOpacity: 1,
      modalLoader: false,
    })
  }

  onImagesLoaded = () => {
    this.setState({
      status: 'idle',
      // loading: false,
    })
  }

  loadMore = () => {
    // 'lllll.console.log()'
    const page = this.props.page;
    this.props.loadMore(page + 1);
    // this.setState({
    //   modalLoader: true,
    // })
  }

  /*
  onZeroAnswer = () => {
    const images = this.props.images;
    if (images === []) {
      console.log('ZERROOO');
      //   this.setState({
      //     modal: false,
      // }
    }
  }
*/


  //todo: !!! refactor to stateMachine
  render() {
    const {images, page} = this.props;
    const {modal, imageOpacity, status, loading, modalImage} = this.state;
    const ifNotLastPageLoadmoreBtn = () => {
      const pages = Math.ceil(this.props.totalImages / perPage);
      return page < pages;
    }

    // const message = () => {
    //   if (this.props.fetchError) {//todo: state rejected?
    //     return 'Sorry, something is wrong  :(';
    //   } else if (!this.props.fetchError && images.length === 0) {//todo: state empty?
    //     return "Sorry, we couldn't find any images according to your request :(";
    //   } else {
    //     return false;
    //   }
    // };

    // console.log(images, page, pages);

    return (
      <>
        <Gallery onClick={this.onClick}>

          {/*/!*{message() && <Message>{message()}</Message>}*!/*/}
          {/*{status === 'rejected'*/}
          {/*  && <Message>'Sorry, something is wrong :('</Message>}*/}
          {status === 'empty'
            && <Message>Sorry, we couldn't find any images according to your request :(</Message>}
          {status === 'pending'
            && <Modal value={this.state.modal} closeModal={this.closeModal}>
              <Loader loader={this.state.modalLoader} size={250}></Loader>
            </Modal>}

          {modalImage
            && <Modal value={this.state.modal} closeModal={this.closeModal}>
              <ModalContent opacityValue={imageOpacity}><img src={modal.link} onLoad={this.onImgLoaded}
                                                             alt={modal.alt}/></ModalContent>
              <Loader loader={this.state.modalLoader} size={250}></Loader>
            </Modal>
          }

          {loading
            && <Ul>
              <GalleryItem images={images} onImagesLoaded={this.onImagesLoaded}></GalleryItem>
            </Ul>}


        </Gallery>
        {ifNotLastPageLoadmoreBtn() && <ButtonStyled onClick={this.loadMore}>Load More</ButtonStyled>}
      </>
    )
  };
};


/*

{(modal && images.length > 0) && <Modal value={this.state.modal} closeModal={this.closeModal}>
  {modal.link && <ModalContent opacityValue={imageOpacity}><img src={modal.link} onLoad={this.onImgLoaded} alt={modal.alt} /></ModalContent>}
  <Loader loader={this.state.modalLoader} size={250}></Loader>
</Modal>}
{images.length > 0 && <GalleryItem images={images} modalStatus={this.modalStatus}></GalleryItem>
}
*/



/*


{status === 'rejected' && <Message>'Sorry, something is wrong  :('</Message>}

{status === 'empty' && <Message>Sorry, we couldn't find any images according to your request :(</Message>}

{(status === 'pending' || status === 'idle') && <Modal value={this.state.modal} closeModal={this.closeModal}>
  {modal.link && <ModalContent opacityValue={imageOpacity}><img src={modal.link} onLoad={this.onImgLoaded} alt={modal.alt} /></ModalContent>}
  <Loader loader={this.state.modalLoader} size={250}></Loader>
</Modal>}
{status === 'pending'  &&  <GalleryItem images={images} modalStatus={this.modalStatus}></GalleryItem>}



{status === 'modal' && <Modal value={this.state.modal} closeModal={this.closeModal}>}

        {status === 'pending' && <>  <Modal value={this.state.modal} closeModal={this.closeModal}></Modal>
       <GalleryItem images={images} modalStatus={this.modalStatus}></GalleryItem>
        </>}
        {/*{status === 'pending'  &&  <GalleryItem images={images} modalStatus={this.modalStatus}></GalleryItem>}

*/


