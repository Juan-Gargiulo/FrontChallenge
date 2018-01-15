import React from 'react';
import ReactDOM from 'react-dom';
import Root from '../src/Containers/Root'

import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/es/integration/react'


import configureStore from '../src/core/store'

const { persistor, store } = configureStore();

ReactDOM.render(
    <Provider store={store}>
      <PersistGate loading={<p>loading...</p>} onBeforeLift={()=>{}} persistor={persistor}>
          <Root />
      </PersistGate>
    </Provider>
    , document.getElementById('root')
);



