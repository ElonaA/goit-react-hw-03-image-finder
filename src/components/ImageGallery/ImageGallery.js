import PropTypes from "prop-types";
import { Component } from 'react';

import {fetchGallery} from '../../services/API';

import Preloader from '../Loader/Loader';
import Modal from '../Modal/Modal';
import Button from "../Button/Button"
import Title from './Title'
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

import { toast } from 'react-toastify';

import s from "./ImageGallery.module.css";

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export default class ImageGallery extends Component {
  static propTypes = {
  search: PropTypes.string,
  };

  state = {
    gallery: [],
    page: 1,
    error: null,

    showModal: false,
    modalImage: {
      src: "",
      alt: "",
    },

    status: Status.IDLE,
  };

  async componentDidUpdate(prevProps, prevState) {
    const prevSearch = prevProps.search;
    const nextSearch = this.props.search;

    if (prevSearch !== nextSearch) {
 
      await this.setState({
        gallery: [],
        page: 1,
        status: Status.PENDING
      });

      this.updatingGallery(nextSearch);
    }
  }

  handleLoadMore = () => {
    this.updatingGallery(this.props.search);
    this.setState({ status: Status.PENDING });
  }

updatingGallery = nextSearch => {
    const { page } = this.state;
    fetchGallery(nextSearch, page)
      .then(response => {
        if (response.hits.length === 0) {
          this.setState({ status: Status.IDLE });
          return toast.error('Sorry, Pictures for your request not found');
        }
        this.setState(
          prevState => ({
            gallery: [...prevState.gallery, ...response.hits],
            status: Status.RESOLVED,
            page: prevState.page + 1,
          }));
        this.scrollToBottom();
      })
      .catch(({ message }) =>
        this.setState({ error: message, status: Status.REJECTED }),
      )
  }
  
  scrollToBottom = () => {
    if (this.state.page !== 1)
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
  };

  imageClickHandler = (src, alt) => {
    this.toggleModal();
    this.setState({
      modalImage: { src, alt },
    });
  };

  handlerClickEsc = e => {
    if (e.key === 'Escape' && this.state.modal.show) this.openModal();
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { gallery, status, error, showModal, modalImage } = this.state;

    if (status === 'idle') {
      return <Title />;
    }

    if (status === 'pending') {
      return <Preloader />;
       
    }

    if (status === 'rejected') {
      return <h1>{error}</h1>
    }

    if (status === 'resolved') {
      return (
        <div className={s.container}>
        <ul className={s.gallery}>
          {gallery.map(({ webformatURL, largeImageURL, tags }, index) => (
            <ImageGalleryItem key={index}
              webformatURL={webformatURL}
              largeImageURL={largeImageURL}
              tags={tags}
               imageClickHandler={this.imageClickHandler}
            />
          ))}
          </ul>

          {showModal && (
          <Modal image={modalImage} toggleModal={this.toggleModal} />
        )}
          <Button onClick={this.handleLoadMore} />
          
          </div>
      );
    }
  }
}
