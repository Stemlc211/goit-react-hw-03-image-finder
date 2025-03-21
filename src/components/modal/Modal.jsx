import PropTypes from 'prop-types';
import { useEffect } from 'react';
import './Modal.css';

export default function Modal({ largeImageURL, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="overlay" onClick={handleBackdropClick}>
      <div className="modal">
        <img src={largeImageURL} alt="full view" />
      </div>
    </div>
  );
}

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
