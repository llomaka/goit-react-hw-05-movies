import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';
import styles from './MoviesGallery.module.css';

export default function MoviesGallery({ movies, page, pageCount, onPageClick }) {
  function handlePageClick(event) {
    onPageClick(event.selected + 1);
  }

  return (
    <>
      <ul className={styles.list}>
        {movies.map(({ id, title }) =>
        (<li
          key={id}
          className={styles.item}
        >
          <Link to={`/movies/${id}`} className={styles.link}>
            {title}
          </Link>
        </li>)
        )}
      </ul>
      {pageCount > 1 && <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageCount={pageCount}
        forcePage={page-1}
        marginPagesDisplayed={2}
        previousLabel="<"
        renderOnZeroPageCount={null}
        containerClassName={styles.pagination_list}
        pageClassName={styles.pagination_item}
        activeClassName={styles.pagination_active_item}
        breakClassName={styles.pagination_item}
        previousClassName={styles.pagination_item}
        nextClassName={styles.pagination_item}
        disabledClassName={styles.disabled_item}
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
  page: PropTypes.number.isRequired,
  pageCount: PropTypes.number.isRequired,
  onPageClick: PropTypes.func.isRequired,
};
