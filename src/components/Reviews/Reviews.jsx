import Notification from 'components/Notification';
import MovieReviewsItem from 'components/ReviewsItem';
import Loader from 'components/Loader';
import useFetchReviews from 'hooks/useFetchReviews';
import styles from './Reviews.module.css';

export default function Reviews() {
  const { reviews, error, isLoading } = useFetchReviews();

  return (
    <>
      {isLoading && <Loader />}
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
