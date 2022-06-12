import MovieReviewsItem from 'components/MovieReviewsItem';
import PropTypes from 'prop-types';
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

MovieReviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      created_at: PropTypes.string.isRequired,
      updated_at: PropTypes.string.isRequired,
    })
  )
};
