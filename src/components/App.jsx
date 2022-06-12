import { useState, useEffect } from 'react';
import { fetchMovieById, fetchTrendingMovies } from 'service/api';
import Container from './Container';
import Loader from 'components/Loader';
import NavigationBar from "./NavigationBar";
import { ToastContainer, toast } from 'react-toastify';
import MoviesGallery from "./MoviesGallery";
import MovieDetails from './MovieDetails';
// import Searchbar from './Searchbar';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  const [state, setState] = useState('idle');
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    setState('pending');
    fetchTrendingMovies()
      .then(data => {
        if (data.total_results === 0) {
          return toast.warning('Found 0 trending movies! Please, try again later.');
        } else {
          setMovies(data.results);
          setState('resolved');
        }
      })
      .catch(error => {
        toast.error(error.message);
        setError(error.message);
        setState('rejected');
      });
  }, []);

  function trendingMovieClick(id) {
    fetchMovieById(id)
      .then(data => setMovie(data))
      .catch(error=> setError(error.message))
  }

  function isObjectEmpty(obj) {
    for (const name in obj) {
        if (obj.hasOwnProperty(name)) return false;
    }
    return true;
  }

  function errorHandling(error) {
    setError(error.message);
    setState('rejected');
  }

  return (
    <div
      style={{
        height: '100vh',
        color: '#010101'
      }}
    >
      <NavigationBar />
      {/* <Searchbar /> */}
      {state === 'pending' && <Loader />}
      <Container>
        {state === 'rejected' && <p>Error getting information from server: {error}</p>}
        {state === 'resolved' && movies.length > 0 && isObjectEmpty(movie) && <MoviesGallery movies={movies} handleClick={trendingMovieClick} />}
        {!isObjectEmpty(movie) && <MovieDetails {...movie} isObjectEmpty={isObjectEmpty} errorHandling={errorHandling} />}
      </Container>
      <ToastContainer />
    </div>
  );
};
