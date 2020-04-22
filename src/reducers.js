import { combineReducers } from 'redux'

import {
  ADD_STOCK,
  REMOVE_STOCK,
  UPDATE_STOCK_GRAPH_DATA,
  UPDATE_STOCK_QUOTE,
  UPDATE_WALL_STREET_BETS_DATA,
  UPDATE_WSB_FEED
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
          quote: null,
          wallStreetBetsData: null
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
    case UPDATE_WALL_STREET_BETS_DATA:
      console.log('updating wsb data', action)
      newState = [...state]
      newState.map((stock, index) => {
        if(stock.stockTicker === action.stockTicker) {
          stock.wallStreetBetsData = action.wallStreetBetsData
        }

        return stock
      })

      return newState
    default:
      return state
  }
}

function feed(state = [], action) {
  switch(action.type) {
    case UPDATE_WSB_FEED:
      console.log(action)
      return action.feed
    default:
      return state
  }
}

export const stonkpartyApp = combineReducers({
  stocks,
  feed
})
