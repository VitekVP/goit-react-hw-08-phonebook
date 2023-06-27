import { useSelector } from 'react-redux';

import { selectIsLoggedIn } from 'redux/selectors';

import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';

import { Header, Logo } from './AppBar.styled';

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Header>
      <Logo>Phonebook</Logo>
      <Navigation />
      {isLoggedIn && <UserMenu />}
    </Header>
  );
};
