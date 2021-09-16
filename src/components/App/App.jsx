import { Component } from 'react';

import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Main from 'components/Markup/Footer copy/Main';
import Button from 'components/Button/Button';
import Modal from 'components/Modal/Modal';
import Footer from 'components/Markup/Footer/Footer';

import {ToastContainer} from 'react-toastify';
import { toast } from 'react-toastify';

import fetchGallery from '../../services/imagesApi';
import Preloader from 'components/Loader/Loader';


class App extends Component {
  state = {
    images: [],
    currentPage: 1,
    searchQuery: '',
    isLoading: false,
    showModal: false,
    largeImage: '',
    error: null,
  };

  // Если при обновлении запрос не равен между стейтами => делаем фетч

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.getGallery();
    }
  }

  // Обрабатываем запрос с формы и пишем в стейт + обновляем

  onChangeQuery = query => {
    this.setState({
      images: [],
      currentPage: 1,
      searchQuery: query,
      error: null,
    });
  };

  // Делаем фетч и получаем коллекцию
  
  getGallery = async () => {
    const { currentPage, searchQuery } = this.state;

    this.setState({
      isLoading: true,
    });

    try {
      const { hits } = await fetchGallery(searchQuery, currentPage);

      this.setState(prevState => ({
        images: [...prevState.images, ...hits],
        currentPage: prevState.currentPage + 1,
      }));

      if (currentPage !== 1) {
        this.scrollButton();
      }
    } catch (error) {
      console.log('Something went wrong with fetch', error);
      this.setState({ error });
    } finally {
      this.setState({
        isLoading: false,
      });
    }
  };

  // Получаем ссылку на полное изображение и пишем в стейт

  onGalleryItem = fullImageUrl => {
    this.setState({
      largeImage: fullImageUrl,
      showModal: true,
    });
  };

  // Тогглим модалку

  toggleModal = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
      largeImage: '',
    }));
  };

  // При клике на кнопку проскролливаем страницу

  scrollButton = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  render() {
    const { images, isLoading, showModal, largeImage, error } = this.state;
    const needToShowLoadMore = images.length > 0 && images.length >= 12; 

    return (
      <>
        <Searchbar onSubmit={this.onChangeQuery} />

        {images.length < 1 && (
          <Main />
        )}

        <ImageGallery images={images} onImageClick={this.onGalleryItem} />

        {needToShowLoadMore && <Button onClick={this.getGallery} />}

        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={largeImage} alt="" className="Modal-image" />
          </Modal>
        )}

        {isLoading && <Preloader/>}

        {error && (
          toast("Sorry, something went wrong. Please try again")
        )}

        <Footer />

       <ToastContainer autoClose={3000} />
      </>
    );
  }
}

export default App;