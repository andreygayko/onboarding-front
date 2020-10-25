/* eslint-disable react/display-name */
import React from 'react';
import { useRoutes, useRedirect } from 'hookrouter';
import { CookiesProvider } from 'react-cookie';
import { Provider } from 'react-redux';

import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core';

import PageHeader from './components/Layout/PageHeader/PageHeader';
import PageContent from './components/Layout/PageContent/PageContent';

import store from './redux/store';

//Pages
import { HomePage, PageNotFound, Auth } from './pages';

const routes = {
  '/home': () => <HomePage />,
  '/auth': () => <Auth />,
};

const theme = createMuiTheme();

const App = () => {
  useRedirect('/', '/auth');
  const routeResult = useRoutes(routes);
  return (
    <Provider store={store}>
      <CookiesProvider>
        <ThemeProvider theme={theme}>
          <PageHeader />
          <PageContent>
            {routeResult ? routeResult : <PageNotFound />}
          </PageContent>
        </ThemeProvider>
      </CookiesProvider>
    </Provider>
  );
};

export default App;
