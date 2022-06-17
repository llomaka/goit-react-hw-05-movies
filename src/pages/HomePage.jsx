import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from 'service/api';
import { toast } from 'react-toastify';
import MoviesGallery from 'components/MoviesGallery';
import Loader from 'components/Loader';
import Notification from 'components/Notification';

export function HomePage() {
  const [status, setStatus] = useState('idle');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setStatus('pending');
    fetchTrendingMovies(1)
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

  return (
    <>
      {status === 'pending' && <Loader />}
      {status === 'rejected' && <Notification text={`Error getting information from server: ${error}`}/>}
      {status === 'resolved' && movies.length > 0 && <MoviesGallery movies={movies} />}
    </>
  );
}
