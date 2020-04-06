import React from 'react'
import PropTypes from 'prop-types'

const Stock = ({ onClick, stockTicker }) => {
  return(
    <li
      onClick={onClick}
      style={{ fontSize: '25px' }}
     >
       {stockTicker}
    </li>
  )
}

Stock.propTypes = {
  onClick: PropTypes.func.isRequired,
  stockTicker: PropTypes.string.isRequired
}

export default Stock