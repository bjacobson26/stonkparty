import { connect } from 'react-redux'
import { removeStock } from '../actions'
import StockList from '../components/StockList'

const getVisibleStocks = (stocks) => {
  // could eventually add filters here
  return stocks
}

const mapStateToProps = state => {
  return {
    stocks: getVisibleStocks(state.stocks)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onRemoveStockClick: id => {
      dispatch(removeStock(id))
    }
  }
}

const VisibleStocks = connect(mapStateToProps, mapDispatchToProps)(StockList)

export default VisibleStocks