import emptyPoster from './no-poster.svg';
import styles from './MovieDetails.module.css';
import { fetchCreditsByMovieId, fetchReviewsByMovieId } from 'service/api';
import { useState } from 'react';
import MovieCast from 'components/MovieCast';
import MovieReviews from 'components/MovieReviews';

export default function MovieDetails({ id, poster_path, title, release_date, vote_average, overview, genres, isObjectEmpty, errorHandling }) {
  const [cast, setCast] = useState({});
  const [reviews, setReviews] = useState({});

  const genre = genres.length > 0 ? genres.map(genre => genre.name).join(', ') : 'No Genres Available';

  function handleClick(event, id) {
    if (event.target.innerHTML === 'Cast') {
      fetchCreditsByMovieId(id)
        .then(data => {
          setCast(data.cast);
          setReviews({});
        })
        .catch(error=>errorHandling(error))
    }
    else {
      fetchReviewsByMovieId(id)
        .then(data => {
          setReviews(data);
          setCast({});
        })
        .catch(error=>errorHandling(error))
    }
  }

  return (
    <section className={styles.section}>
      <div className={styles.card}>
        <img
          className={styles.image}
          src={poster_path ? `https://image.tmdb.org/t/p/w342${poster_path}` : emptyPoster}
          alt={`${title} Poster`}
          loading="lazy"
        />
        <div className={styles.caption}>
          <h2 className={styles.title}>{title} ({release_date ? release_date.slice(0, 4) : 'No Release Year Available'})</h2>
          <p>User Score: {Math.round(vote_average * 10)}%</p>
          <h3>Overview</h3>
          <p>{overview ? overview : 'No Overview Available'}</p>
          <h3>Genres</h3>
          <p>{genre}</p>
        </div>
      </div>
      <div className={styles.aside}>
        <h2 className={styles.aside_title}>Additional information</h2>
        <ul className={styles.list}>
          <li className={styles.item} onClick={(event) => handleClick(event, id)}>Cast</li>
          <li className={styles.item} onClick={(event) => handleClick(event, id)}>Reviews</li>
        </ul>
      </div>
      {!isObjectEmpty(cast) && <MovieCast cast={cast} />}
      {!isObjectEmpty(reviews) && reviews.total_results > 0 && <MovieReviews reviews={reviews.results} />}
      {!isObjectEmpty(reviews) && reviews.total_results === 0 && <p>No reviews for movie {title} at this time.</p>}
    </section>
  );
}