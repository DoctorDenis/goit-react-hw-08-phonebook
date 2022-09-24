import { ContactItem } from 'components/ContactItem/ContactItem';
import { Table, InputGroup, Form, Alert } from 'react-bootstrap';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { dissmissError } from 'redux/operations';

export function ContactsList({ contacts }) {
  const dispatch = useDispatch();
  const [query, setQuery] = useState('');
  const error = useSelector(state => state.contacts.error);
  const [show, setShow] = useState(error && true);

  const inputChangeHandler = event => {
    const value = event.target.value;
    setQuery(value);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      {show && (
        <Alert
          variant="danger"
          onClose={() => {
            setShow(false);
            dispatch(dissmissError());
          }}
          dismissible
        >
          <Alert.Heading>Sorry!</Alert.Heading>
          <p>{error}</p>
        </Alert>
      )}
      {
        <>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </InputGroup.Text>
            <Form.Control
              placeholder="Find contact by name ..."
              aria-label="Search bar"
              aria-describedby="basic-addon1"
              type="text"
              name="query"
              onChange={inputChangeHandler}
              id="query"
              value={query}
            />
          </InputGroup>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>№</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Options</th>
              </tr>
            </thead>
            <tbody>
              {contacts.length === 0 && (
                <tr>
                  <td colSpan={4}>You have no contacts</td>
                </tr>
              )}
              {filteredContacts.map((contact, index) => (
                <ContactItem key={contact.id} contact={contact} index={index} />
              ))}
            </tbody>
          </Table>
        </>
      }
    </>
  );
}
