import emptyPoster from './no-poster.svg';
import { fetchMovieById } from 'service/api';
import { useState, useEffect } from 'react';
import { RemoveScroll } from 'react-remove-scroll';
import Modal from 'components/Modal';
import useModal from '../../hooks/useModal';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Loader from 'components/Loader';
import styles from './MovieDetails.module.css';

export default function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const [loader, setLoader] = useState(false);
  const { posterPath, altCaption, closeModal, selectImage } = useModal();
  const navigate = useNavigate();
  const isPreviousPageExists = window.history.state.idx;

  useEffect(() => {
    setLoader(true);
    fetchMovieById(movieId)
      .then(setMovie)
      .catch(setError)
      .finally(setLoader(false));
  }, [movieId]);

  return (
    < section className={styles.section} >
      {loader && <Loader />}
      {error && <p>Something went wrong. Error message: {error.message}.</p>}
      {movie && (<>{isPreviousPageExists > 0 && (<button className={styles.button} type='button' onClick={()=>navigate(-1)}>Go Back</button>)}

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
            <li className={styles.item}><Link to={'cast'} replace={true}>Cast</Link></li>
            <li className={styles.item}><Link to={'reviews'} replace={true}>Reviews</Link></li>
          </ul>
        </div></>)}
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
