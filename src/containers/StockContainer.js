import { connect } from 'react-redux'
import Stock from '../components/Stock'
import { 
  updateStockGraphData, 
  updateStockQuote, 
  updateWallStreetBetsData 
} from '../actions'

import { STONKS_API_URL } from '../constants'

const mapStateToProps = state => {
  return {
    stocks: state.stocks
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateStockGraphData: stockTicker => {
      fetch(`${STONKS_API_URL}/stock_data/${stockTicker}`)
      .then(response => response.json())
      .then((graphData) => {
        dispatch(updateStockGraphData(stockTicker, graphData))
      })
    },
    updateStockQuote: stockTicker => {
      fetch(`${STONKS_API_URL}/stock_quote/${stockTicker}`)
      .then(response => response.json())
      .then((stockQuote) => {
        dispatch(updateStockQuote(stockTicker, stockQuote))
      })
    },
    updateWallStreetBetsData: stockTicker => {
      fetch(`${STONKS_API_URL}/wsb/${stockTicker}`)
      .then(response => response.json())
      .then((wsbData) => {
        dispatch(updateWallStreetBetsData(stockTicker, wsbData))
      })
    }
  }
}

export const StockContainer = connect(mapStateToProps, mapDispatchToProps)(Stock)

