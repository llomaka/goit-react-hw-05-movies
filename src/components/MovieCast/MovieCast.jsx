import MovieCastItem from 'components/MovieCastItem';
import PropTypes from 'prop-types';
import styles from './MovieCast.module.css';

export default function MovieCast({ cast }) {
  return (
    <ul className={styles.list}>
      {cast.map(actor => (
        <li key={actor.id} className={styles.item}>
          <MovieCastItem {...actor} />
        </li>
      ))}
    </ul>
  );
}

MovieCast.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      character: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      profile_path: PropTypes.string.isRequired,
    })
  )
};
