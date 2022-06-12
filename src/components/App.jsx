import { Routes, Route } from 'react-router-dom';
import NavigationBar from "./NavigationBar";
import { ToastContainer } from 'react-toastify';
import HomePage from 'pages/HomePage';
import Container from './Container';
import MoviesPage from 'pages/MoviesPage';

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
          <Route path='/goit-react-hw-05-movies/' element={<HomePage />} />
          <Route path='/goit-react-hw-05-movies/movies' element={<MoviesPage />} />
        </Routes>
      </Container>
      <ToastContainer />
    </div>
  );
};
