import { Link } from 'react-router-dom';
import emptyPoster from './no-poster.svg';
import styles from './MovieCard.module.css';

export default function MovieCard({ movie, selectImage }) {
  const { poster_path, title, release_date, vote_average, overview, genres } = movie;
  return (
    <>
      <div className={styles.card}>
        <img
          className={styles.image}
          src={poster_path ? `https://image.tmdb.org/t/p/w342${poster_path}` : emptyPoster}
          alt={`${title} Poster`}
          loading="lazy"
          onClick={() => selectImage(`https://image.tmdb.org/t/p/original${poster_path}`, title)}
        />
        <div className={styles.caption}>
          <h2 className={styles.title}>{title} ({release_date ? release_date.slice(0, 4) : 'No Release Year Available'})</h2>
          <p>User Score: {Math.round(vote_average * 10)}%</p>
          <h3>Overview</h3>
          <p>{overview ? overview : 'No Overview Available'}</p>
          <h3>Genres</h3>
          <p>{genres ? genres.map(genre => genre.name).join(', ') : 'No Genres Available'}</p>
        </div>
      </div>
      <div className={styles.aside}>
        <h2 className={styles.aside_title}>Additional information</h2>
        <ul className={styles.list}>
          <li className={styles.item}><Link to={'cast'} replace={true}>Cast</Link></li>
          <li className={styles.item}><Link to={'reviews'} replace={true}>Reviews</Link></li>
        </ul>
      </div>
    </>
  );
}
