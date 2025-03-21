import PropTypes from 'prop-types';
import ImageGalleryItem from '../imageGalleryItem/ImageGalleryItem';
import './ImageGallery.css';

export default function ImageGallery({ images, onImageClick }) {
  return (
    <ul className="gallery">
      {images.map(({ id, webformatURL, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          smallImage={webformatURL}
          largeImage={largeImageURL}
          onClick={onImageClick}
        />
      ))}
    </ul>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ).isRequired,
  onImageClick: PropTypes.func.isRequired,
};
