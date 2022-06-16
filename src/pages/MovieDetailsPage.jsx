import { Outlet } from 'react-router-dom';
import MovieDetails from 'components/MovieDetails';


export function MovieDetailsPage() {
  return (
    <>
      <MovieDetails />
      <Outlet />
    </>
  );
}
