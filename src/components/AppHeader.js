// @flow

import React from 'react';
import AppBar from 'material-ui/AppBar';

import Logo from './Logo';

import type { Recipe } from '../types/state';

type Props = { currentPageName: Recipe.name };

const AppHeader = ({ currentPageName }: Props) =>
    <AppBar title={currentPageName} iconElementLeft={<Logo/>} />

export default AppHeader;