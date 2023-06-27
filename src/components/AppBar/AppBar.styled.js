// import { NavLink } from 'react-router-dom';

import styled from '@emotion/styled';

export const Header = styled.header`
  position: fixed;
  top: 5px;
  left: 5px;
  right: 5px;
  z-index: 1000;

  height: 80px;
  max-width: 100%;
  margin-bottom: 40px;
  margin-top: 5px;
  padding: 0 20px;

  display: flex;
  gap: 30px;
  align-items: center;

  border-radius: 4px;
  background-color: teal;
  box-shadow: 0px 8px 9px 0px rgba(0, 0, 0, 0.75);
`;

export const Logo = styled.span`
  font-size: 26px;
  font-weight: 700;
  color: #020c59;
`;

export const List = styled.ul`
  display: flex;
  gap: 30px;
`;
