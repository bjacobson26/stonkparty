import React from 'react'
import PropTypes from 'prop-types'
import { StockContainer } from '../containers/StockContainer'

const StockList = ({ stocks, onRemoveStockClick }) => {
  return(
    <ul>
      {stocks.map((stock, index) => (
        <StockContainer key={index} {...stock} onClick={() => onRemoveStockClick(index)} />
      ))}
    </ul>
  )
}

StockList.propTypes = {
  stocks: PropTypes.arrayOf(
    PropTypes.shape({
      stockTicker: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onRemoveStockClick: PropTypes.func.isRequired
}

export default StockList