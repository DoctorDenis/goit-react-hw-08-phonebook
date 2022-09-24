import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export function HomePage() {
  const { user, isLoggedIn } = useSelector(state => state.auth);

  return (
    <>
      {isLoggedIn ? (
        <h1>Hello {user.name}, welcome to your homepage</h1>
      ) : (
        <>
          <Button
            title="Click here to signup"
            as={Link}
            to="/register"
            variant="outline-primary"
            className="p-2"
          >
            I've never been here before ...
          </Button>
          <Button
            as={Link}
            to="/login"
            variant="outline-success"
            className="p-2"
          >
            I already have an account
          </Button>
        </>
      )}
    </>
  );
}
