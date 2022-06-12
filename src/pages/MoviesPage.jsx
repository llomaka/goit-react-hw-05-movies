import Searchbar from 'components/Searchbar';
import { useState, useEffect } from 'react';
import { fetchMoviesByQuery, fetchMovieById } from 'service/api';
import { toast } from 'react-toastify';
import Loader from 'components/Loader';
import isObjectEmpty from 'helpers/isObjectEmpty';
import MoviesGallery from 'components/MoviesGallery';
import MovieDetails from 'components/MovieDetails';

export default function MoviesPage() {
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState('idle');
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState({});
  const [error, setError] = useState(null);

  function onSearchClick(searchQuery) {
    if (query.toLowerCase() === searchQuery.toLowerCase()) return;
    setQuery(searchQuery);
    setMovies([]);
    setMovie([]);
  }

  useEffect(() => {
    if (!query) return;
    setStatus('pending');
    fetchMoviesByQuery(query)
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
    }, [query]);

  function errorHandling(error) {
    setError(error.message);
    setStatus('rejected');
  }

  function onMovieClick(id) {
    fetchMovieById(id)
      .then(data => setMovie(data))
      .catch(error=> setError(error.message))
  }

  return (
    <>
      <Searchbar onSearchClick={onSearchClick} />
      {status === 'pending' && <Loader />}
      {status === 'rejected' && <h2>Error getting information from server: {error}</h2>}
      {status === 'resolved' && movies.length > 0 && isObjectEmpty(movie) && <MoviesGallery movies={movies} handleClick={onMovieClick} />}
      {!isObjectEmpty(movie) && <MovieDetails {...movie} errorHandling={errorHandling} />}
    </>
  );
}
