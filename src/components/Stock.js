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

class Stock extends React.Component {
  componentDidMount() {
    this.props.updateStockGraphData(this.props.stockTicker)
  }
  
  render() {
    return(
      <div>
        <StyledStock>{this.props.stockTicker}</StyledStock>
        <p>{this.props.graphData == null ? 'Loading graph data...' : 'Graph data loaded'}</p>
        <StyledLink 
          href=""
          onClick={e => {
            e.preventDefault()
            this.props.onClick()
          }}
        >
            Remove
        </StyledLink>
      </div>
    )
  }
}

Stock.propTypes = {
  onClick: PropTypes.func.isRequired,
  stockTicker: PropTypes.string.isRequired
}

export default Stock