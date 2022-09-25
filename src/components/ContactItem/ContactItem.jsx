import { Button } from 'react-bootstrap';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact, editContact } from '../../redux/operations';

export function ContactItem({ contact: { id, name, number }, index }) {
  const [isEdited, setIsEdited] = useState(false);
  const [contactName, setContactName] = useState(name);
  const [phone, setPhone] = useState(number);
  const dispatch = useDispatch();

  function saveBtnClickHandler() {
    setIsEdited(false);
    const contact = {
      id,
      name: contactName,
      number: phone,
    };
    dispatch(editContact(contact));
  }

  function deleteBtnClickHandler() {
    dispatch(deleteContact(id));
  }

  return (
    <tr key={id}>
      <td>{index + 1}</td>
      <td>
        {isEdited ? (
          <input
            type="text"
            name="name"
            value={contactName}
            onChange={e => {
              setContactName(e.currentTarget.value);
              console.log(contactName);
            }}
          ></input>
        ) : (
          name
        )}
      </td>
      <td>
        {isEdited ? (
          <input
            type="text"
            name="number"
            value={phone}
            onChange={e => {
              setPhone(e.currentTarget.value);
            }}
          ></input>
        ) : (
          number
        )}
      </td>
      <td>
        {isEdited ? (
          <Button variant="outline-primary" onClick={saveBtnClickHandler}>
            Save
          </Button>
        ) : (
          <>
            <Button
              className="me-3"
              variant="outline-success"
              onClick={() => setIsEdited(true)}
            >
              Edit
            </Button>
            <Button variant="outline-danger" onClick={deleteBtnClickHandler}>
              Delete
            </Button>
          </>
        )}
      </td>
    </tr>
  );
}
