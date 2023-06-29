import { useSelector, useDispatch } from 'react-redux';

import { toast } from 'react-toastify';
import { RotatingLines } from 'react-loader-spinner';
import { Button, Icon } from '@chakra-ui/react';
import { IoIosContact } from 'react-icons/io';

import { logOut } from 'redux/operations';
import { selectLoading, selectUserName } from 'redux/selectors';

import { Container, Name } from './UserMenu.styled';

export const UserMenu = () => {
  const name = useSelector(selectUserName);
  const isloading = useSelector(selectLoading);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOut())
      .unwrap()
      .then(() => {
        toast.info(`You are out of the app`);
      })
      .catch(() => {
        toast.error(`Sorry samething wrong, please try again!`);
      });
  };

  return (
    <Container>
      <Name>
        <Icon as={IoIosContact} boxSize={8} color="white" />
        {name}
      </Name>
      <Button
        colorScheme="whatsapp"
        width="100px"
        border="2px"
        borderColor="green.500"
        type="button"
        onClick={handleLogOut}
      >
        {isloading && <RotatingLines strokeColor="white" width="16" />}
        Logout
      </Button>
    </Container>
  );
};
