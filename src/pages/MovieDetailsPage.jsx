import emptyPoster from './no-poster.svg';
import { fetchMovieById } from 'service/api';
import { useState, useEffect } from 'react';
import { RemoveScroll } from 'react-remove-scroll';
import Modal from 'components/Modal';
import useModal from '../hooks/useModal';
import { Outlet, Link, useNavigate, useParams } from 'react-router-dom';
import styles from './MovieDetailsPage.module.css';
import Loader from 'components/Loader';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  const { posterPath, altCaption, closeModal, selectImage } = useModal();

  useEffect(() => {
    setLoader(true);
    fetchMovieById(movieId)
      .then(setMovie)
      .catch(setError)
      .finally(setLoader(false));
  }, [movieId]);

  function goBackNavigation() {
    navigate(-1);
  }

  return (
    < section className={styles.section} >
      {loader && <Loader />}
      {error && <p>Something went wrong. Error message: {error.message}.</p>}
      {movie && (<><button className={styles.button} type='button' onClick={goBackNavigation}>Go back</button>
        <div className={styles.card}>
          <img
            className={styles.image}
            src={movie.poster_path ? `https://image.tmdb.org/t/p/w342${movie.poster_path}` : emptyPoster}
            alt={`${movie.title} Poster`}
            loading="lazy"
            onClick={() => selectImage(`https://image.tmdb.org/t/p/original${movie.poster_path}`, movie.title)}
          />
          <div className={styles.caption}>
            <h2 className={styles.title}>{movie.title} ({movie.release_date ? movie.release_date.slice(0, 4) : 'No Release Year Available'})</h2>
            <p>User Score: {Math.round(movie.vote_average * 10)}%</p>
            <h3>Overview</h3>
            <p>{movie.overview ? movie.overview : 'No Overview Available'}</p>
            <h3>Genres</h3>
            <p>{movie.genres ? movie.genres.map(genre => genre.name).join(', ') : 'No Genres Available'}</p>
          </div>
        </div>
        <div className={styles.aside}>
          <h2 className={styles.aside_title}>Additional information</h2>
          <ul className={styles.list}>
            <li className={styles.item}><Link to={'cast'}>Cast</Link></li>
            <li className={styles.item}><Link to={'reviews'}>Reviews</Link></li>
          </ul>
        </div></>)}
      <Outlet />
      {posterPath && movie.poster_path && <RemoveScroll>
        <Modal
          posterPath={posterPath}
          altCaption={altCaption}
          closeModal={closeModal}
        />
      </RemoveScroll>}
    </section >
  );
}
