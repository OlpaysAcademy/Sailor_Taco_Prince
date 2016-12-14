// @flow

import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import injectTapEventPlugin from 'react-tap-event-plugin';

import AppContainer from './AppContainer';
import AppHeader from './AppHeader';
import Sidenav from './Sidenav';
import RecipesCount from '../containers/RecipesCount';
import RecipePage from './RecipePage';
import Body from './Body';
import RecipesPage from './RecipesPage';

import reducer from '../reducers';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const store = createStore(reducer, window.devToolsExtension && window.devToolsExtension());

const App = () => {
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
