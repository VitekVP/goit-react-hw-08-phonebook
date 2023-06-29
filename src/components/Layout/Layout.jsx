import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ChakraProvider } from '@chakra-ui/react';

import { Loader } from 'components/Loader/Loader';
import { AppBar } from 'components/AppBar/AppBar';

import { Main } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <ChakraProvider>
        <AppBar />
        <Main>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </Main>
      </ChakraProvider>

      <ToastContainer theme="colored" autoClose={3000} position="top-center" />
    </>
  );
};

export default Layout;
