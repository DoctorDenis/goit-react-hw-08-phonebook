import { Form, Button, Container } from 'react-bootstrap';
// import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register, login } from 'redux/operations';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export function AuthForm({ registered }) {
  const dispatch = useDispatch();
  const authInfo = useSelector(state => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (authInfo.isLoggedIn) {
      // dispatch(getContacts());
      navigate('/');
    }
  }, [dispatch, authInfo.isLoggedIn, navigate]);

  function formSubmitHandler(e) {
    e.preventDefault();
    const { name, email, password } = e.target;
    const user = {
      name: name.value,
      email: email.value,
      password: password.value,
    };

    if (registered) {
      dispatch(login(user));
    } else {
      dispatch(register(user));
    }
  }
  return (
    <Container breakpoints={['sm']}>
      <Form onSubmit={formSubmitHandler} className="">
        {!registered && (
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Your name"
              autoComplete="off"
            />
          </Form.Group>
        )}

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            autoComplete="off"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}
