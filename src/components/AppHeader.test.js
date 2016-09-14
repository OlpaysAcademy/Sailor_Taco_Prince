import React from 'react';
import renderer from 'react-test-renderer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import AppHeader from './AppHeader';

// You can't use react-test-renderer with another library that uses react-dom, as they both try to call injectEnvironment
// https://github.com/facebook/react/issues/7601
// Apparently this will be fixed in React 15.4
jest.mock('react-dom');

it('renders correctly without current page name', () => {
    expect(renderer.create(
        <MuiThemeProvider>
            <AppHeader currentPageName="Spicy tacos" />
        </MuiThemeProvider>
    ).toJSON()).toMatchSnapshot();
});

it('renders correctly with current page name', () => {
    expect(renderer.create(
        <MuiThemeProvider>
            <AppHeader />
        </MuiThemeProvider>
    ).toJSON()).toMatchSnapshot();
});
