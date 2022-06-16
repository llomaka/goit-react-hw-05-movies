import { Routes, Route, Navigate } from 'react-router-dom';
import NavigationBar from "./NavigationBar";
import { ToastContainer } from 'react-toastify';
import HomePage from 'pages/HomePage';
import Container from './Container';
import MoviesPage from 'pages/MoviesPage';
import MovieDetailsPage from 'pages/MovieDetailsPage';
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
      <NavigationBar />
      <Container>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/movies' element={<MoviesPage />} />
          <Route path='/movies/:movieId' element={<MovieDetailsPage />}>
            <Route path='cast' element={<Cast />} />
            <Route path='reviews' element={<Reviews />} />
          </Route>
          {/* <Route path='/redirect' element={<Navigate to='/' />} /> */}
          <Route path="*" element={<Navigate to="/" replace />}
    />
        </Routes>
      </Container>
      <ToastContainer />
    </div>
  );
};
