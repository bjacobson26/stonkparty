import { connect } from 'react-redux'
import { updateStockGraphData } from '../actions'
import Stock from '../components/Stock'

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
    }
  }
}

export const StockContainer = connect(mapStateToProps, mapDispatchToProps)(Stock)

