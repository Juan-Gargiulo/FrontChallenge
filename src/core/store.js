import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import { persistStore } from 'redux-persist'

import rootReducer from './rootReducer'
import rootSagas from './rootSagas'

const sagaMiddleware = createSagaMiddleware()

let configureStore = () => {

  let store = createStore(
      rootReducer,
      compose(
          applyMiddleware(sagaMiddleware),
          window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
      )
  )

  sagaMiddleware.run(rootSagas)

  let persistor = persistStore(store)

  return { persistor, store }

}

export default configureStore
