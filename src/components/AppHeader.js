// @flow

import React from 'react';
import AppBar from 'material-ui/AppBar';

import Logo from './Logo';

type Props = { currentPageName: string }

const AppHeader = ({ currentPageName }: Props) =>
    <AppBar title={currentPageName} iconElementLeft={<Logo/>} />

export default AppHeader;