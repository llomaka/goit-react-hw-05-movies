import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';
import styles from './MoviesGallery.module.css';

export default function MoviesGallery({ movies, handleClick, page, pageCount, onPageClick, onPrevPageClick, onNextPageClick }) {
  function handlePageClick(event) {
    console.log(`User requested page number ${event.selected}`);
  }

  return (
    <>
      <ul className={styles.list}>
        {movies.map(({ id, title }) =>
        (<li
          key={id}
          className={styles.item}
          onClick={() => handleClick(id)}
        >
          {title}
        </li>)
        )}
      </ul>
      {pageCount > 1 && <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        previousLabel="<"
        renderOnZeroPageCount={null}
        containerClassName={styles.pagination_list}
        pageClassName={styles.pagination_item}
        activeClassName={styles.pagination_active_item}
        previousClassName={styles.pagination_item}
        nextClassName={styles.pagination_item}
      />}
    </>
  );
}

MoviesGallery.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
  handleClick: PropTypes.func.isRequired
};
