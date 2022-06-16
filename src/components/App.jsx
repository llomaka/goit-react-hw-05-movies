import { Routes, Route, Navigate } from 'react-router-dom';
import SharedLayout from './SharedLayout';
import { HomePage, MoviesPage, MovieDetailsPage } from 'pages';
import Cast from './Cast';
import Reviews from './Reviews';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        color: '#010101'
      }}
    >
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path='movies' element={<MoviesPage />} />
          <Route path='movies/:movieId' element={<MovieDetailsPage />}>
            <Route path='cast' element={<Cast />} />
            <Route path='reviews' element={<Reviews />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />}/>
        </Route>
      </Routes>
    </div>
  );
};
