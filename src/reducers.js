import { combineReducers } from 'redux'

import {
  ADD_STOCK,
  REMOVE_STOCK,
  UPDATE_STOCK_GRAPH_DATA,
  UPDATE_STOCK_QUOTE
} from './actions'

function stocks(state = [], action) {
  let newState

  switch(action.type) {
    case ADD_STOCK:
      return [
        ...state,
        {
          stockTicker: action.stockTicker,
          graphData: null,
          quote: null
        }
      ]
    case REMOVE_STOCK:
      newState = [...state]
      newState.splice(action.index, 1)
      return newState
    case UPDATE_STOCK_GRAPH_DATA:
      newState = [...state]
      newState.map((stock, index) => {
        if(stock.stockTicker === action.stockTicker) {
          stock.graphData = action.stockGraphData
        }

        return stock
      })

      return newState
    case UPDATE_STOCK_QUOTE:
      console.log('updating stock quote')
      newState = [...state]
      newState.map((stock, index) => {
        if(stock.stockTicker === action.stockTicker) {
          stock.quote = action.stockQuote
        }

        return stock
      })

      return newState
    default:
      return state
  }
}

export const stonkpartyApp = combineReducers({
  stocks
})
