// @flow

import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import AppContainer from './AppContainer';
import AppHeader from './AppHeader';
import Sidenav from './Sidenav';
import RecipesCount from './RecipesCount';
import RecipePage from './RecipePage';
import Body from './Body';
import RecipesPage from './RecipesPage';

import reducer from '../reducers';

const store = createStore(reducer);

const App = props => {
  return (
    <Provider store={store}>
      <AppContainer>
        <Sidenav>
          <AppHeader />
          <RecipesCount />
          <RecipesPage />
        </Sidenav>
        <Body>
          <RecipePage />
        </Body>
      </AppContainer>
    </Provider>
  );
}

export default App;
