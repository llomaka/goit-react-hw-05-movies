import PropTypes from 'prop-types';
import styles from './MovieReviewsItem.module.css';

export default function MovieReviewsItem({ author, content, created_at, updated_at }) {
  const createdDate = new Date(created_at);
  const modifiedDate = new Date(updated_at);
  return (
    <>
      <h2 className={styles.name}>{author}</h2>
      <p className={styles.text}>{content}</p>
      <p className={styles.caption}>Created: {createdDate.toLocaleString()}, Last Modified: {modifiedDate.toLocaleString()}</p>
    </>
  );
}

MovieReviewsItem.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  created_at: PropTypes.string.isRequired,
  updated_at: PropTypes.string.isRequired,
};
