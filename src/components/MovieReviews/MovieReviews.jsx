import MovieReviewsItem from 'components/MovieReviewsItem';
import styles from './MovieReviews.module.css';

export default function MovieReviews({ reviews }) {
  return (
    <ol className={styles.list}>
      {reviews.map(review => (
        <li key={review.id} className={styles.item}>
          <MovieReviewsItem {...review} />
        </li>
      ))}
    </ol>
  );
}
