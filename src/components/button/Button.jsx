import PropTypes from 'prop-types';
import './Button.css';

export default function Button({ onClick }) {
  return (
    <button type="button" className="load-more" onClick={onClick}>
      Load more
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
