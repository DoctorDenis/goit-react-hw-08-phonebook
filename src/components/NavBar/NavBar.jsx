import {
  Nav,
  DropdownButton,
  Dropdown,
  Navbar,
  Container,
  Button,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from 'redux/operations';
import { useNavigate } from 'react-router-dom';

export function NavBar() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const userCredentials = useSelector(state => state.auth);
  const navigate = useNavigate();
  return (
    <header>
      <Navbar bg="dark">
        <Container>
          <Navbar.Brand as={Link} to="/" className="text-white">
            Phonebook
          </Navbar.Brand>

          {isLoggedIn && (
            <Nav justify variant="pills">
              <Nav.Item>
                <Nav.Link as={Link} to="/contacts" className="text-white">
                  Contacts
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/addcontact" className="text-white">
                  Add contact
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <DropdownButton id="dropdown-basic-button" title="User menu">
                  <Dropdown.Item>{userCredentials.user.email}</Dropdown.Item>
                  <Dropdown.Divider />

                  <Dropdown.Item>
                    <Button
                      variant="danger"
                      onClick={() => {
                        dispatch(logout(userCredentials));
                        navigate('/');
                      }}
                    >
                      Logout
                    </Button>
                  </Dropdown.Item>
                </DropdownButton>
              </Nav.Item>
            </Nav>
          )}
        </Container>
      </Navbar>
    </header>
  );
}
