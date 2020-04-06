import React from 'react'
import PropTypes from 'prop-types'
import Stock from './Stock'

const StockList = ({ stocks, onRemoveStockClick }) => {
  return(
    <ul>
      {stocks.map((stock, index) => (
        <Stock key={index} {...stock} onClick={() => onRemoveStockClick(index)} />
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