import PropTypes from 'prop-types';
import './ImageGalleryItem.css';

export default function ImageGalleryItem({ smallImage, largeImage, onClick }) {
  return (
    <li className="gallery-item" onClick={() => onClick(largeImage)}>
      <img src={smallImage} alt="preview" />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  smallImage: PropTypes.string.isRequired,
  largeImage: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
