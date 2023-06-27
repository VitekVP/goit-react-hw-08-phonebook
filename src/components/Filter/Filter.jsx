import { useDispatch, useSelector } from 'react-redux';

import { Input } from '@chakra-ui/react';

import { selectFilter } from 'redux/selectors';
import { changeFilter } from 'redux/filterSlise';

import { Container, Label, Title } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleChangeFilter = event => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <Container>
      <Title>Contacts</Title>
      <Label>
        Find contacts by name:
        <Input
          type="text"
          name="filter"
          value={filter}
          onChange={handleChangeFilter}
          variant="filled"
          focusBorderColor="teal"
          placeholder="enter a name for filtering"
          color="teal"
          _placeholder={{ opacity: 0.7, color: 'inherit' }}
        />
      </Label>
    </Container>
  );
};
