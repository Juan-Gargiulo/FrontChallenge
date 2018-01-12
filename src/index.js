import React from 'react';
import ReactDOM from 'react-dom';
import Root from '../src/Containers/Root'

import { Provider } from 'react-redux'
import store from '../src/core/store'

ReactDOM.render(
    <Provider store={store}>
        <Root />
    </Provider>
    , document.getElementById('root')
);



