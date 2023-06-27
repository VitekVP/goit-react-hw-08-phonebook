import { NavLink } from 'react-router-dom';

import styled from '@emotion/styled';

export const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;

  display: flex;
  flex-direction: column;

  border: 2px solid teal;
  border-radius: 4px;
  box-shadow: 0px 6px 9px 0px rgba(0, 0, 0, 0.75);
`;

export const Title = styled.h2`
  margin-bottom: 20px;

  text-align: center;
  font-size: 26px;
  font-weight: 700;
  color: #020c59;
`;

export const FormPhonebook = styled.form`
  padding: 10px;
  margin-bottom: 10px;

  display: flex;
  flex-direction: column;
  gap: 15px;

  border-radius: 4px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;

  font-size: 14px;
  font-weight: 600;
  color: #020c59;
`;

export const Text = styled.p`
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  color: #020c59;
`;

export const Link = styled(NavLink)`
  text-decoration: underline;
  font-size: 18px;
  font-weight: 400;
  color: teal;
`;
