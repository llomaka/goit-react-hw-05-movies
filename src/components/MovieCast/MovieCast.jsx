import MovieCastItem from 'components/MovieCastItem';
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
