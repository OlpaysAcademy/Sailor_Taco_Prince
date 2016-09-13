// @flow

import React from 'react';

import type { ChildrenProps } from '../types/components';

const Sidenav = ({ children }: ChildrenProps) => {
    return (
        <div style={{flex: 1}}>
            {children}
        </div>
    );
}

export default Sidenav;