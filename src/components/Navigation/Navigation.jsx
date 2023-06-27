import { useSelector } from 'react-redux';

import { selectIsLoggedIn } from 'redux/selectors';

import { Link, List } from './Navigation.styled';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <List>
      <li>
        <Link to="/">Home</Link>
      </li>
      {isLoggedIn && (
        <li>
          <Link to="/contacts">Contacts</Link>
        </li>
      )}
    </List>
  );
};
