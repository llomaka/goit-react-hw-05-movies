import { Outlet, Link, useNavigate } from 'react-router-dom';
import MovieDetails from 'components/MovieDetails';

export default function MovieDetailsPage() {
  const navigate = useNavigate();
  return (
    <>
      <button type='button' onClick={()=>navigate(-1)}>Go Back</button>
      <Link to='..'>Go Up</Link>
      <MovieDetails />
      <Outlet />
    </>
  );
}
