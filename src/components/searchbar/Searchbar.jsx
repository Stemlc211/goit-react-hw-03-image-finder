import PropTypes from 'prop-types';
import './Searchbar.css';

export default function Searchbar({ onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const query = e.target.elements.query.value.trim();
    if (query) {
      onSubmit(query);
      e.target.reset();
    }
  };

  return (
    <header className="searchbar">
      <form className="form" onSubmit={handleSubmit}>
        <button type="submit" className="button">
          <span className="button-label">Search</span>
        </button>
        <input
          className="input"
          name="query"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
