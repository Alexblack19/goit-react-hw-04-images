import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Notiflix from 'notiflix';
import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Searchbar } from './Searchbar/Searchbar';
import { getAllPhoto, NUM_REQUESTED_PHOTOS } from '../api/image-api';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    dataPhoto: null,
    error: '',
    page: 1,
    showModal: false,
    photoTag: '',
    isLoading: false,
    currentLargeImageUrl: '',
    currentImageTags: '',
    currentHits: null,
    totalHits: null,
  };

  componentDidUpdate(_, prevState) {
    const searchTag = this.state.photoTag;
    if (prevState.photoTag !== searchTag) {
      this.setState({ dataPhoto: null });
      this.fetchPhoto(searchTag, this.state.page);
    }
  }

  fetchPhoto = async (searchTag, page) => {
    this.setState({ isLoading: true });
    try {
      const data = await getAllPhoto(searchTag, page);

      if (!this.state.dataPhoto) {
        this.setState({ dataPhoto: data.hits });
      } else {
        this.setState({ dataPhoto: [...this.state.dataPhoto, ...data.hits] });
      }

      this.setState({ currentHits: NUM_REQUESTED_PHOTOS * this.state.page });
      this.setState({ totalHits: data.totalHits });

      if (data.hits.length === 0) {
        this.notificationTry();
      }
    } catch (error) {
      this.setState({ error: error.message });
      this.notificationCatch(error.message);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  openModal = e => {
    const currentLargeImageUrl = e.target.dataset.large;
    const currentImageTags = e.target.alt;

    this.setState({ currentLargeImageUrl, currentImageTags });
    this.toggleModal();
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  handleFormSubmit = photoTag => {
    this.setState({ photoTag });
    this.setState({ page: 1 });
  };

  handleLoadMore = () => {
    const page = this.state.page + 1;
    this.setState({ page: page });
    this.fetchPhoto(this.state.photoTag, page);
  };

  notificationTry() {
    Notiflix.Notify.warning(
      'Sorry, there are no images matching your search query. Please try again.',
      {
        position: 'center-center',
        fontSize: '18px',
        cssAnimationStyle: 'zoom',
        cssAnimationDuration: 1000,
        width: '380px',
      }
    );
  }

  notificationCatch(error) {
    Notiflix.Notify.warning(error, {
      position: 'center-center',
      fontSize: '16px',
      width: '340px',
    });
  }

  render() {
    const {
      showModal,
      dataPhoto,
      isLoading,
      currentLargeImageUrl,
      currentImageTags,
      currentHits,
      totalHits,
    } = this.state;
    const { handleFormSubmit, toggleModal, handleLoadMore, openModal } = this;

    return (
      <div>
        <GlobalStyle />
        <Searchbar onSubmit={handleFormSubmit} />
        {dataPhoto && <ImageGallery photos={dataPhoto} openModal={openModal} />}
        {isLoading && <Loader />}
        {showModal && (
          <Modal
            imageUrl={currentLargeImageUrl}
            imageTags={currentImageTags}
            onClose={toggleModal}
          />
        )}
        {dataPhoto && currentHits <= totalHits && (
          <Button handleLoadMore={handleLoadMore} />
        )}
        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}
