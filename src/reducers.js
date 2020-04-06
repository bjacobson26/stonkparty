import { combineReducers } from 'redux'

import {
  ADD_STOCK,
  REMOVE_STOCK
} from './actions'

function stocks(state = [], action) {
  switch(action.type) {
    case ADD_STOCK:
      return [
        ...state,
        {
          stockTicker: action.stockTicker
        }
      ]
    case REMOVE_STOCK:
      let newState = [...state]
      newState.splice(action.index, 1)
      return newState
    default:
      return state
  }
}

export const stonkpartyApp = combineReducers({
  stocks
})