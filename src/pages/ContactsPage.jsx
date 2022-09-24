import { Spinner } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getContacts } from 'redux/operations';
import { ContactsList } from 'components/ContactList/ContactList';

export function ContactsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  const contacts = useSelector(state => state.contacts.contacts);
  const isLoading = useSelector(state => state.contacts.isLoading);

  return (
    <>
      <h2>Contacts list</h2>
      {isLoading ? (
        <Spinner animation="border" />
      ) : (
        <ContactsList contacts={contacts} />
      )}
    </>
  );
}
