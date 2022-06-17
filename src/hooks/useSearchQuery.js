import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMoviesByQuery } from 'service/api';
import { toast } from 'react-toastify';

export default function useSearchQuery() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [status, setStatus] = useState('idle');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [pageCount, setPageCount] = useState(1);

  useEffect(() => {
    if (!searchParams.get('query')) return;
    setStatus('pending');
    fetchMoviesByQuery(searchParams.get('query'), searchParams.get('page') || 1)
      .then(data => {
        if (data.total_results === 0) {
            setError('Found 0 movies! Please, change search query.');
            setStatus('rejected');
            return toast.warning('Found 0 movies! Please, change search query.');
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
    }, [searchParams]);

  function onSearchClick(searchQuery) {
    if (searchParams.get('query')) {
      if (searchParams.get('query').toLowerCase() === searchQuery.toLowerCase()) return;
    }
    setMovies([]);
    setSearchParams({
      query: searchQuery,
      page: 1,
    });
  }

  function onPageClick(pageNum) {
    setSearchParams({
      'query': searchParams.get('query'),
      'page': pageNum,
    });
  }

  return { searchParams, status, movies, error, pageCount, onSearchClick, onPageClick };
}
