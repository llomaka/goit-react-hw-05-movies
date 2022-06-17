import MoviesGallery from 'components/MoviesGallery';
import Loader from 'components/Loader';
import Notification from 'components/Notification';
import useFetchTrending from 'hooks/useFetchTrending';

export default function HomePage() {
  const { status, movies, error } = useFetchTrending();

  return (
    <>
      {status === 'pending' && <Loader />}
      {status === 'rejected' && <Notification text={`Error getting information from server: ${error}`}/>}
      {status === 'resolved' && movies.length > 0 && <MoviesGallery movies={movies} />}
    </>
  );
}
