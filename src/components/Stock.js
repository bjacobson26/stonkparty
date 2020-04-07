import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledStock = styled.div`
  font-size: 50px;
  text-align: left;
`;

const StyledLink = styled.a`
  font-size: 20px;
`

const Stock = ({ onClick, stockTicker }) => {
  return(
    <div>
      <StyledStock>{stockTicker}</StyledStock>
      <StyledLink 
        href=""
        onClick={e => {
          e.preventDefault()
          onClick()
        }}
      >
          Remove
      </StyledLink>
    </div>
  )
}

Stock.propTypes = {
  onClick: PropTypes.func.isRequired,
  stockTicker: PropTypes.string.isRequired
}

export default Stock