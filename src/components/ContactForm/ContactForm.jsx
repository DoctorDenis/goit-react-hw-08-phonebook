import { useState } from 'react';
import { StyledForm, StyledButton } from './ContactForm.styled';
import styles from '../../index.module.css';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { addContact } from 'redux/operations';

export function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onChangeEventHandler = event => {
    switch (event.target.name) {
      case 'name':
        setName(event.target.value);
        break;
      case 'number':
        setNumber(event.target.value);
        break;
      default:
        return;
    }
  };

  const onSubmitHandler = event => {
    event.preventDefault();
    const contact = {
      name,
      number,
    };
    dispatch(addContact(contact));
    event.target.reset();
    setName('');
    setNumber('');
    navigate('/contacts');
  };

  return (
    <StyledForm onSubmit={onSubmitHandler}>
      <label htmlFor="name">Name</label>
      <input
        className={styles.form_input}
        type="text"
        name="name"
        value={name}
        id="name"
        onChange={onChangeEventHandler}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <label htmlFor="number">Number</label>
      <input
        className={styles.form_input}
        id="number"
        type="tel"
        name="number"
        value={number}
        onChange={onChangeEventHandler}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <StyledButton type="submit">Add contact</StyledButton>
    </StyledForm>
  );
}
