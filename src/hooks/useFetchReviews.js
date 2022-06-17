import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviewsByMovieId } from 'service/api';

export default function useFetchReviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState({});
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchReviewsByMovieId(movieId)
      .then(setReviews)
      .catch(error => setError(error.message))
      .finally(() => setIsLoading(false));
  }, [movieId]);

  return { reviews, error, isLoading };
}
