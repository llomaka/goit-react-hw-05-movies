import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from 'service/api';
import { toast } from 'react-toastify';
import MoviesGallery from 'components/MoviesGallery';
import Loader from 'components/Loader';

export function HomePage() {
  const [status, setStatus] = useState('idle');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);

  useEffect(() => {
    setStatus('pending');
    fetchTrendingMovies(page)
      .then(data => {
        if (data.total_results === 0) {
          return toast.warning('Found 0 trending movies! Please, try again later.');
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
  }, [page]);

  function onPageClick(pageNum) {
    setPage(pageNum);
  }

  return (
    <>
      {status === 'pending' && <Loader />}
      {status === 'rejected' && <h2>Error getting information from server: {error}</h2>}
      {status === 'resolved' && movies.length > 0 && <MoviesGallery
        movies={movies}
        page={page}
        pageCount={pageCount}
        onPageClick={onPageClick}
      />}
    </>
  );
}
