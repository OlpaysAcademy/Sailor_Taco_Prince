// @flow

import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const ReadButtons = ({ onRead, onUnread }) =>
    <div style={{ display: 'flex', alignItems: 'center' }}>
        <RaisedButton onClick={() => onRead()} style={{ margin: '0px 5px' }} label="Mark as read" />
        <RaisedButton onClick={() => onUnread()} style={{ margin: '0px 5px' }} label="Mark as unread" />
    </div>

export default ReadButtons;