import { persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import cards from './cards/cardReducer'

const config = {
  key: 'root',
  storage,
}

const reducers = { cards }

export default persistCombineReducers( config, reducers )
