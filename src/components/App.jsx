import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from 'service/api';
import Container from './Container';
import Loader from 'components/Loader';
import NavigationBar from "./NavigationBar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MoviesGallery from "./MoviesGallery";

export const App = () => {
  const [state, setState] = useState('idle');
  const [movies, setMovies] = useState([]);
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
    console.log(id);
  }

  return (
    <div
      style={{
        height: '100vh',
        color: '#010101'
      }}
    >
      <NavigationBar />
      <Container>
        {state === 'pending' && <Loader />}
        {state === 'rejected' && <p>Error getting information from server: {error}</p>}
        {state === 'resolved' && movies.length > 0 && <MoviesGallery movies={movies} handleClick={trendingMovieClick} />}
      </Container>
      <ToastContainer />
    </div>
  );
};
