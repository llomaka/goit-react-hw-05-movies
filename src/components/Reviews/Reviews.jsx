import Notification from 'components/Notification';
import MovieReviewsItem from 'components/ReviewsItem';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviewsByMovieId } from 'service/api';
import styles from './Reviews.module.css';

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchReviewsByMovieId(movieId)
      .then(data => {
        setReviews(data);
      })
      .catch(error => setError(error.message));
  }, [movieId]);

  return (
    <>
      {error && <Notification text={`Something went wrong. Error message: ${error}.`} />}
      {reviews.total_results === 0 && <Notification text={'No reviews available at this time.'} />}
      {reviews.total_results > 0 && <ol className={styles.list}>
        {reviews.results.map(review => (
          <li key={review.id} className={styles.item}>
            <MovieReviewsItem {...review} />
          </li>
        ))}
      </ol>}
    </>
  );
}
