// @flow

import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const AppContainer = (props: any ) =>
    <MuiThemeProvider>
        <div className='AppContainer' style={{ display: 'flex' }}>
            {props.children}
        </div>
    </MuiThemeProvider>

export default AppContainer;