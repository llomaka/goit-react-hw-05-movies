import Searchbar from 'components/Searchbar';
import Loader from 'components/Loader';
import MoviesGallery from 'components/MoviesGallery';
import Notification from 'components/Notification';
import useSearchQuery from 'hooks/useSearchQuery';

export default function MoviesPage() {
  const { searchParams, status, movies, error, pageCount, onSearchClick, onPageClick } = useSearchQuery();

  return (
    <>
      <Searchbar onSearchClick={onSearchClick} />
      {status === 'pending' && <Loader />}
      {status === 'rejected' && <Notification text={`Error getting information from server: ${error}`} />}
      {status === 'resolved' && movies.length > 0 && <MoviesGallery
        movies={movies}
        page={Number(searchParams.get('page'))}
        pageCount={pageCount}
        onPageClick={onPageClick}
      />}
    </>
  );
}
