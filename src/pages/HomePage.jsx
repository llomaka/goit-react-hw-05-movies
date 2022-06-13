import { useState, useEffect } from 'react';
import { fetchTrendingMovies, fetchMovieById } from 'service/api';
import { toast } from 'react-toastify';
import MoviesGallery from 'components/MoviesGallery';
import Loader from 'components/Loader';
import MovieDetails from 'components/MovieDetails';
import isObjectEmpty from 'helpers/isObjectEmpty';

export default function HomePage() {
  const [status, setStatus] = useState('idle');
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState({});
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

  function errorHandling(error) {
    setError(error.message);
    setStatus('rejected');
  }

  function trendingMovieClick(id) {
    fetchMovieById(id)
      .then(data => setMovie(data))
      .catch(error=> setError(error.message))
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
      {status === 'pending' && <Loader />}
      {status === 'rejected' && <h2>Error getting information from server: {error}</h2>}
      {status === 'resolved' && movies.length > 0 && isObjectEmpty(movie) && <MoviesGallery
        movies={movies}
        handleClick={trendingMovieClick}
        page={page}
        pageCount={pageCount}
        onPageClick={onPageClick}
        onPrevPageClick={onPrevPageClick}
        onNextPageClick={onNextPageClick}
      />}
      {!isObjectEmpty(movie) && <MovieDetails {...movie} errorHandling={errorHandling} />}
    </>
  );
}
