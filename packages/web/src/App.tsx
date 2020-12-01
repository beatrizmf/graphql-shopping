// eslint-disable-next-line import/no-extraneous-dependencies
import 'dotenv/config';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import AppProvider from './hooks';

import GlobalStyle from './styles/global';

import Routes from './routes';
import { apolloClient } from './services/apolloClient';

const App: React.FC = () => (
  <>
    <ApolloProvider client={apolloClient}>
      <AppProvider>
        <Router>
          <Routes />
        </Router>
      </AppProvider>
    </ApolloProvider>
    <GlobalStyle />
  </>
);

export default App;
