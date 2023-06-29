import styled from '@emotion/styled';

export const ListItem = styled.li`
  padding: 4px 8px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  font-weight: 700;
  color: #020c59;

  box-shadow: 0px 0px 3px 0px teal;
  border-radius: 4px;

  &:not(:last-child) {
    margin-bottom: 6px;
  }
`;

export const BoxIcon = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;
