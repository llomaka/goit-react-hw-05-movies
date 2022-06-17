import { fetchMovieById } from 'service/api';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function useFetchMovie() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const isPrevPage = window.history.state.idx;

  useEffect(() => {
    if (isNaN(movieId)) {
      navigate('/');
    } else {
      setIsLoading(true);
      fetchMovieById(movieId)
        .then(setMovie)
        .catch(setError)
        .finally(setIsLoading(false));
    }
  }, [movieId, navigate]);

  return { movie, error, isLoading, isPrevPage };
}
