import { fetchMovieById } from 'service/api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


export default function useFetchMovie() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const isPrevPage = window.history.state.idx;

  useEffect(() => {
    setIsLoading(true);
    fetchMovieById(movieId)
      .then(setMovie)
      .catch(setError)
      .finally(setIsLoading(false));
  }, [movieId]);

  return { movie, error, isLoading, isPrevPage };
}
