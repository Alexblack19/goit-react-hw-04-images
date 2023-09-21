import PropTypes from 'prop-types';
import { GalleryItem, Image } from './ImageGalleryItem.styled';

export function ImageGalleryItem({
  photo: { webformatURL, tags, largeImageURL },
  openModal,
}) {
  return (
    <GalleryItem>
      <Image
        src={webformatURL}
        alt={tags}
        data-large={largeImageURL}
        onClick={openModal}
      />
    </GalleryItem>
  );
}

ImageGalleryItem.propTypes = {
  photo: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }).isRequired,
};
