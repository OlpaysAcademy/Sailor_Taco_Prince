// @flow

import React from 'react';

const Body = props =>
    <div style={{flex: 3, display: 'flex', flexDirection: 'column'}}>
        {props.children}
    </div>

export default Body;