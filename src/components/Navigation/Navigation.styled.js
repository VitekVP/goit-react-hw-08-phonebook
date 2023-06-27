import { NavLink } from 'react-router-dom';

import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  gap: 30px;
  align-items: center;
`;

export const Link = styled(NavLink)`
  padding: 2px 6px;

  font-size: 20px;
  font-weight: 700;
  color: #64ed66;
  text-decoration: none;

  border-radius: 4px;
  cursor: pointer;
  transition: color 300ms linear;

  &.active {
    color: white;
  }
`;
