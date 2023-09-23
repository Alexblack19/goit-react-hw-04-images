import PropTypes from 'prop-types';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';

export function ImageGallery({ photos, openModal }) {
  return (
    <Gallery>
      {photos.map(item => (
        <ImageGalleryItem key={item.id} photo={item} openModal={openModal} />
      ))}
    </Gallery>
  );
}

ImageGallery.propTypes = {
  photos: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired }).isRequired
  ),
  openModal: PropTypes.func.isRequired,
};
