import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { toast } from 'react-toastify';
import { RotatingLines } from 'react-loader-spinner';
import { Input, InputGroup, InputRightElement, Button } from '@chakra-ui/react';

import { register } from 'redux/operations';
import { selectError, selectLoading } from 'redux/selectors';

import { NoServise } from 'components/NoServise/NoServise';

import {
  Container,
  Title,
  FormPhonebook,
  Label,
  Text,
  Link,
} from './RegisterForm.styled';

export const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);
  const isloading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  const handleInputChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
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
    setName('');
    setEmail('');
    setPassword('');
  };

  const handleClick = () => setShow(!show);

  const handleSubmit = event => {
    event.preventDefault();

    dispatch(register({ name, email, password }))
      .unwrap()
      .then(() => {
        toast.info('Wellcome');
        reset();
      });
  };

  return (
    <Container>
      <Title>Registration</Title>
      {error && <NoServise message={error} />}
      <FormPhonebook onSubmit={handleSubmit}>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            value={name}
            onChange={handleInputChange}
            required
            variant="filled"
            focusBorderColor="teal"
            placeholder="Enter your name"
            color="teal"
            _placeholder={{ opacity: 0.7, color: 'inherit' }}
          />
        </Label>
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
          {isloading && <RotatingLines strokeColor="white" width="16" />}
          Register
        </Button>
      </FormPhonebook>
      <Text>
        Already have an account? <Link to="/login">Log in!</Link>
      </Text>
    </Container>
  );
};
