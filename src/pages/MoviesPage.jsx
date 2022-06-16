import Searchbar from 'components/Searchbar';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMoviesByQuery } from 'service/api';
import { toast } from 'react-toastify';
import Loader from 'components/Loader';
import MoviesGallery from 'components/MoviesGallery';

export function MoviesPage() {
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

  return (
    <>
      <Searchbar onSearchClick={onSearchClick} />
      {status === 'pending' && <Loader />}
      {status === 'rejected' && <h2>Error getting information from server: {error}</h2>}
      {status === 'resolved' && movies.length > 0 && <MoviesGallery
        movies={movies}
        page={Number(searchParams.get('page'))}
        pageCount={pageCount}
        onPageClick={onPageClick}
      />}
    </>
  );
}
