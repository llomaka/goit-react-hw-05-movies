import { Outlet } from 'react-router-dom';
import MovieDetails from 'components/MovieDetails';


export default function MovieDetailsPage() {
  return (
    <>
      <MovieDetails />
      <Outlet />
    </>
  );
}
