import PropTypes from 'prop-types';
import styles from './MoviesGallery.module.css';

export default function MoviesGallery({ movies, handleClick }) {
  return (
    <ul className={styles.list}>
      {movies.map(({ id, title }) =>
      (<li
        key={id}
        className={styles.item}
        onClick={() => handleClick(id)}
      >
        {title}
      </li>)
      )}
    </ul>
  );
}

MoviesGallery.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
  handleClick: PropTypes.func.isRequired
};
