import MovieCastItem from 'components/CastItem';
import { fetchCreditsByMovieId } from 'service/api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Cast.module.css';

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCreditsByMovieId(movieId)
      .then(data => {
        setCast(data.cast);
        })
      .catch(error => setError(error.message))
  }, [movieId]);

  return (
    <>
      {error && <p>Something went wrong. Error message: {error}.</p>}
      {cast.length === 0 && <p className={styles.text}>No cast available at this time.</p>}
      {cast.length > 0 && <ul className={styles.list}>
        {cast.map(actor => (
          <li
            key={actor.id}
            className={styles.item}
          >
            <MovieCastItem {...actor} />
          </li>
        ))}
      </ul>}
    </>
  );
}
