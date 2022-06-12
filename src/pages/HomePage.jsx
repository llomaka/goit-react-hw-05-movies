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

  useEffect(() => {
    setStatus('pending');
    fetchTrendingMovies()
      .then(data => {
        if (data.total_results === 0) {
          return toast.warning('Found 0 trending movies! Please, try again later.');
        } else {
          setMovies(data.results);
          setStatus('resolved');
        }
      })
      .catch(error => {
        toast.error(error.message);
        setError(error.message);
        setStatus('rejected');
      });
  }, []);

  function errorHandling(error) {
    setError(error.message);
    setStatus('rejected');
  }

  function trendingMovieClick(id) {
    fetchMovieById(id)
      .then(data => setMovie(data))
      .catch(error=> setError(error.message))
  }

  return (
    <>
      {status === 'pending' && <Loader />}
      {status === 'rejected' && <h2>Error getting information from server: {error}</h2>}
      {status === 'resolved' && movies.length > 0 && isObjectEmpty(movie) && <MoviesGallery movies={movies} handleClick={trendingMovieClick} />}
      {!isObjectEmpty(movie) && <MovieDetails {...movie} errorHandling={errorHandling} />}
    </>
  );
}
