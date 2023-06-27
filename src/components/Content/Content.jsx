import { useNavigate } from 'react-router-dom';

import { Button } from '@chakra-ui/react';

import { Container, Title, Text, Box, BoxList } from './Content.styled';

export const Content = () => {
  const navigate = useNavigate();

  const handleLogin = () => navigate('/login');
  const handleRegister = () => navigate('/register');

  return (
    <Container>
      <Title>Welcome to Phonebook!</Title>
      <Text>
        Phonebook provides an opportunity to create a personal account and
        already store and work with telephone contacts in it.
      </Text>
      <Box>
        <Text>To continue working</Text>
        <BoxList>
          <li>
            <Button
              variant="solid"
              colorScheme="teal"
              size="md"
              width="120px"
              type="button"
              onClick={handleLogin}
            >
              Log In
            </Button>
          </li>
          <li>
            <Button
              variant="solid"
              colorScheme="teal"
              size="md"
              width="120px"
              type="button"
              onClick={handleRegister}
            >
              Register
            </Button>
          </li>
        </BoxList>
      </Box>
    </Container>
  );
};
