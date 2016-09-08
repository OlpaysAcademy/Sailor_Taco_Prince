// @flow

import React from 'react';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

import App from './components/App';

import './index.css';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

render(
  <App />,
  document.getElementById('root')
);
