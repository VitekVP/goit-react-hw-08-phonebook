import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { toast } from 'react-toastify';
import { RotatingLines } from 'react-loader-spinner';
import { Input, InputGroup, InputRightElement, Button } from '@chakra-ui/react';

import { logIn } from 'redux/operations';
import { selectError, selectLoading } from 'redux/selectors';

import { NoServise } from 'components/NoServise/NoServise';

import {
  Container,
  Title,
  FormPhonebook,
  Label,
  Text,
  Link,
} from './LoginForm.styled';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);
  const isloading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  const handleInputChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  const handleClick = () => setShow(!show);

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(logIn({ email, password }))
      .unwrap()
      .then(() => {
        toast.info('Wellcome');
        reset();
      });
  };

  return (
    <Container>
      <Title>Login</Title>
      {error && <NoServise message={error} />}
      <FormPhonebook onSubmit={handleSubmit}>
        <Label>
          Email
          <Input
            type="email"
            name="email"
            value={email}
            onChange={handleInputChange}
            required
            variant="filled"
            focusBorderColor="teal"
            placeholder="Enter your email"
            color="teal"
            _placeholder={{ opacity: 0.7, color: 'inherit' }}
          />
        </Label>

        <Label>
          Password
          <InputGroup>
            <Input
              name="password"
              value={password}
              onChange={handleInputChange}
              required
              type={show ? 'text' : 'password'}
              placeholder="Enter password"
              variant="filled"
              focusBorderColor="teal"
              color="teal"
              _placeholder={{ opacity: 0.7, color: 'inherit' }}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement>
          </InputGroup>
        </Label>
        <Button type="submit" colorScheme="teal">
          {isloading && <RotatingLines strokeColor="white" width="16" />} Log In
        </Button>
      </FormPhonebook>
      <Text>
        Don't have an account? <Link to="/register">Register!</Link>
      </Text>
    </Container>
  );
};
