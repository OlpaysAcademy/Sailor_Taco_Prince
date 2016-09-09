// @flow

import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import AppContainer from './AppContainer';
import AppHeader from './AppHeader';
import Sidenav from './Sidenav';
import RecipesCount from '../containers/RecipesCount';
import RecipePage from '../containers/RecipePage';
import Body from './Body';
import RecipesPage from './RecipesPage';

import reducer from '../reducers';

const store = createStore(reducer, window.devToolsExtension && window.devToolsExtension());

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
