import { useSelector, useDispatch } from 'react-redux';

import { toast } from 'react-toastify';
import { RotatingLines } from 'react-loader-spinner';
import { Button } from '@chakra-ui/react';

import { logOut } from 'redux/operations';
import { selectError, selectLoading, selectUserName } from 'redux/selectors';

import { Container, Name } from './UserMenu.styled';

export const UserMenu = () => {
  const email = useSelector(selectUserName);
  const isloading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOut())
      .unwrap()
      .then(() => {
        toast.info(`you are out of the app`);
      })
      .catch(() => {
        toast.error(`${error}`);
      });
  };

  return (
    <Container>
      <Name>{email}</Name>
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
