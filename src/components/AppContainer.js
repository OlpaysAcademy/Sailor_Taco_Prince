// @flow

import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import type { ChildrenProps } from '../types/components';

const AppContainer = (props : ChildrenProps ) =>
    <MuiThemeProvider>
        <div className='AppContainer' style={{ display: 'flex' }}>
            {props.children}
        </div>
    </MuiThemeProvider>

export default AppContainer;