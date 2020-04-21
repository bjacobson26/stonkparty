import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import BeatLoader from "react-spinners/BeatLoader";

const StyledStock = styled.div`
  text-align: left;
  margin-bottom: 20px;
`;

const StyledLink = styled.a`
  font-size: 20px;
  margin-top: 20px;
`

const RedDay = styled.p`
  color: red;
`

const GreenDay = styled.p`
  color: green
`

const percentChange = (stockQuote) => (
  <div>
    {
      stockQuote.price.regularMarketChangePercent >= 0 ? 
      <GreenDay>{(stockQuote.price.regularMarketChangePercent * 100).toFixed(2)}%</GreenDay> : 
      <RedDay>{(stockQuote.price.regularMarketChangePercent * 100).toFixed(2)}%</RedDay>
    }
  </div>
)

const StockQuote = (stockQuote) => (<div>
  <h2>{stockQuote.price.shortName}</h2>
  <table class="pure-table">
    <tr>
      <th>Market Price</th>
      <th>%</th>
      <th>Day High</th>
      <th>Day Low</th>
    </tr>

    <tr>
      <td>{ stockQuote == null ? '...' : `$${stockQuote.price.regularMarketPrice}` }</td>
      <td>{ stockQuote == null ? '...' : percentChange(stockQuote) }</td>
      <td>{ stockQuote == null ? '...' : `$${stockQuote.price.regularMarketDayHigh}` }</td>
      <td>{ stockQuote == null ? '...' : `$${stockQuote.price.regularMarketDayLow}` }</td>
    </tr>
  </table>
</div>)

class Stock extends React.Component {
  componentDidMount() {
    this.props.updateStockGraphData(this.props.stockTicker)
    console.log('component mounted')
    this.props.updateStockQuote(this.props.stockTicker)
  }
  
  render() {
    return(
      <div>
        <StyledStock>
          <h1>{this.props.stockTicker}</h1>
          <div>
            { this.props.quote === null ? <BeatLoader size={20} color={"white"} /> : StockQuote(this.props.quote) }
          </div>
        </StyledStock>
        
        <div>
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
      </div>
    )
  }
}

Stock.propTypes = {
  onClick: PropTypes.func.isRequired,
  stockTicker: PropTypes.string.isRequired
}

export default Stock