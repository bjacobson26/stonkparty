import { connect } from 'react-redux'
import Stock from '../components/Stock'
import { 
  updateStockGraphData, 
  updateStockQuote, 
  updateWallStreetBetsData 
} from '../actions'


const mapStateToProps = state => {
  return {
    stocks: state.stocks
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateStockGraphData: stockTicker => {
      fetch(`http://localhost:5000/stock_data/${stockTicker}`)
      .then(response => response.json())
      .then((graphData) => {
        dispatch(updateStockGraphData(stockTicker, graphData))
      })
    },
    updateStockQuote: stockTicker => {
      fetch(`http://localhost:5000/stock_quote/${stockTicker}`)
      .then(response => response.json())
      .then((stockQuote) => {
        dispatch(updateStockQuote(stockTicker, stockQuote))
      })
    },
    updateWallStreetBetsData: stockTicker => {
      fetch(`http://localhost:5000/wsb/${stockTicker}`)
      .then(response => response.json())
      .then((wsbData) => {
        dispatch(updateWallStreetBetsData(stockTicker, wsbData))
      })
    }
  }
}

export const StockContainer = connect(mapStateToProps, mapDispatchToProps)(Stock)

