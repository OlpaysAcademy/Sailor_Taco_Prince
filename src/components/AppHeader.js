// @flow

import React from 'react';
import AppBar from 'material-ui/AppBar';

import Logo from './Logo';

const AppHeader = props =>
    <AppBar title={props.currentPageName} iconElementLeft={<Logo/>} />

export default AppHeader;