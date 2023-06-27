import { NavLink } from 'react-router-dom';

import styled from '@emotion/styled';

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  font-size: 24px;
  font-weight: 500;
`;

export const Title = styled.h1`
  margin-bottom: 40px;

  text-align: center;
  font-size: 36px;
  font-weight: 700;
  color: #020c59;
`;

export const Text = styled.p`
  margin-bottom: 5px;

  font-size: 20px;
  font-weight: 500;
`;

export const Box = styled.div`
  margin: 40 auto;

  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
`;

export const BoxList = styled.ul`
  display: flex;
  gap: 20px;
  justify-content: space-between;
  align-items: center;
`;

export const Link = styled(NavLink)`
  text-decoration: underline;
  font-size: 18px;
  font-weight: 400;
  color: teal;
`;
