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
