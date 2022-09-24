import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledUl = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 10px;
  list-style: none;
  border: 1px solid black;
`;

export const Navlink = styled(NavLink)`
  &.active {
    border: 2px solid red;
  }
`;
