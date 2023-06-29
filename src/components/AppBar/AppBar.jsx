import { useSelector } from 'react-redux';

import { RiContactsBook2Line } from 'react-icons/ri';
import { Icon } from '@chakra-ui/react';

import { selectIsLoggedIn } from 'redux/selectors';

import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';

import { Header, Logo } from './AppBar.styled';

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Header>
      <Logo>
        {' '}
        <Icon as={RiContactsBook2Line} boxSize={8} color="#020c59" /> Phonebook
      </Logo>
      <Navigation />
      {isLoggedIn && <UserMenu />}
    </Header>
  );
};
