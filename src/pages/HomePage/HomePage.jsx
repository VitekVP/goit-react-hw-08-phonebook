import { useSelector } from 'react-redux';

import { selectIsLoggedIn } from 'redux/selectors';

import { Content } from 'components/Content/Content';
import { ContentLogIn } from 'components/Content/ContentLogIn';

const HomePage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return !isLoggedIn ? <Content /> : <ContentLogIn />;
};

export default HomePage;
