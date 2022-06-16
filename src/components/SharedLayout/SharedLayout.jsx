import NavigationBar from 'components/NavigationBar';
import Container from 'components/Container';
import { ToastContainer } from 'react-toastify';
import { Outlet } from 'react-router-dom';

export default function SharedLayout() {
  return (
    <>
      <NavigationBar />
      <main>
        <Container>
          <Outlet />
        </Container>
        <ToastContainer />
      </main>
    </>
  );
};
