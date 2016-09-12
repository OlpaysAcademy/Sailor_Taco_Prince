import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Sidebar from './Sidebar';
import Body from './Body';
import sailorTacoPrince from './reducers';

let store = createStore(sailorTacoPrince, window.devToolsExtension && window.devToolsExtension());

class Container extends Component {
    render() {
        return (
            <Provider store={store}>
                <div style={{ display: 'flex' }}>
                    <Sidebar />
                    <Body />
                </div>
            </Provider>
        );
    }
}

export default Container;
