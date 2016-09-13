// @flow

import React from 'react';

import type { ChildrenProps } from '../types/components';

const Body = ({ children }: ChildrenProps) =>
    <div style={{ flex: 3, display: 'flex', flexDirection: 'column' }}>
        {children}
    </div>

export default Body;