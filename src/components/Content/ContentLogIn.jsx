import { List, ListItem, ListIcon } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';

import { Container, Title, Link } from './Content.styled';

export const ContentLogIn = () => {
  return (
    <Container>
      <Title>You are in Phonebook!</Title>
      <List spacing={3}>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="teal" />
          save important contacts
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="teal" />
          add contacts if needed
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="teal" />
          delete invalid contacts
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="teal" />
          you can easily search
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="teal" />
          to continue working <Link to="/contacts">Сlick here</Link>
        </ListItem>
      </List>
    </Container>
  );
};
