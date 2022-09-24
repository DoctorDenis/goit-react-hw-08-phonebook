import { NavBar } from 'components/NavBar/NavBar';
import { Outlet } from 'react-router-dom';
import { Container } from 'react-bootstrap';

export function Layout() {
  return (
    <>
      <NavBar />
      <Container>
        <Outlet />
      </Container>
    </>
  );
}
