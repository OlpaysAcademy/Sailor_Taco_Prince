// @flow

import React from 'react';
import AppBar from 'material-ui/AppBar';

import Logo from './Logo';

const AppHeader = ({ currentPageName }: any) =>
    <AppBar title={currentPageName} iconElementLeft={<Logo/>} />

AppHeader.propTypes = {
    currentPageName: React.PropTypes.string
};

export default AppHeader;