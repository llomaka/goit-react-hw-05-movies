import Searchbar from 'components/Searchbar';
import { useState, useEffect } from 'react';
import { fetchMoviesByQuery } from 'service/api';
import { toast } from 'react-toastify';
import Loader from 'components/Loader';
import MoviesGallery from 'components/MoviesGallery';

export default function MoviesPage() {
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState('idle');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);

  useEffect(() => {
    if (!query) return;
    setStatus('pending');
    fetchMoviesByQuery(query)
      .then(data => {
        if (data.total_results === 0) {
            setError('Found 0 movies! Please, change search query.');
            setStatus('rejected');
            return toast.warning('Found 0 movies! Please, change search query.');
          } else {
            setMovies(data.results);
            setPageCount(data.total_pages)
            setStatus('resolved');
          }
        })
        .catch(error => {
          toast.error(error.message);
          setError(error.message);
          setStatus('rejected');
        });
    }, [query]);

  function onSearchClick(searchQuery) {
    if (query.toLowerCase() === searchQuery.toLowerCase()) return;
    setQuery(searchQuery);
    setMovies([]);
  }

  function onPageClick(pageNum) {
    setPage(pageNum);
  }

  function onPrevPageClick() {
    setPage(prevPage => prevPage - 1);
  }

  function onNextPageClick() {
    setPage(prevPage => prevPage + 1);
  }

  return (
    <>
      <Searchbar onSearchClick={onSearchClick} />
      {status === 'pending' && <Loader />}
      {status === 'rejected' && <h2>Error getting information from server: {error}</h2>}
      {status === 'resolved' && movies.length > 0 && <MoviesGallery
        movies={movies}
        page={page}
        pageCount={pageCount}
        onPageClick={onPageClick}
        onPrevPageClick={onPrevPageClick}
        onNextPageClick={onNextPageClick}
      />}
    </>
  );
}