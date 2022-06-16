import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import MovieDetails from 'components/MovieDetails';

export default function MovieDetailsPage() {
  const location = useLocation();
  const navigate = useNavigate();
  console.dir(location);
  return (
    <>
      <button type='button' onClick={()=>navigate(-1)}>Go Back</button>
      <Link to='..'>Go Up</Link>
      <MovieDetails />
      <Outlet />
    </>
  );
}
