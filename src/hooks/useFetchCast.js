import { fetchCreditsByMovieId } from 'service/api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


export default function useFetchCast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState({});
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchCreditsByMovieId(movieId)
      .then(setCast)
      .catch(error => setError(error.message))
      .finally(setIsLoading(false));
  }, [movieId]);

  return { cast, error, isLoading };
}
