import React from 'react';
import { StyledInput } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { changeFilterInput } from 'redux/actions';

export function Filter() {
  const dispatch = useDispatch();

  const inputChangeHandler = event => {
    const value = event.target.value;
    dispatch(changeFilterInput(value));
  };

  return (
    <>
      <p>Find contacts by name</p>
      <StyledInput
        type="text"
        name="query"
        onChange={inputChangeHandler}
        id="query"
      />
    </>
  );
}
