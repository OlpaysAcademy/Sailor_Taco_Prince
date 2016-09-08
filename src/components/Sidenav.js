// @flow

import React from 'react';

const Sidenav = props => {
    return (
        <div style={{flex: 1}}>
            {props.children}
        </div>
    );
}

export default Sidenav;