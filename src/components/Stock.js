import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import BeatLoader from "react-spinners/BeatLoader";
const moment = require('moment')

const StyledStock = styled.div`
  text-align: left;
  margin-top: 20px;
  margin-bottom: 20px;
  border: 1px solid grey;
  padding: 20px;
  border-radius: 4px;
  opacity: 1;
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
  <p>{moment().format("MMMM Do YYYY, h:mm:ss a")}</p>
  <table class="pure-table">
    <tr>
      <th>Market Price</th>
      <th>% Change</th>
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
  constructor(props) {
    super(props);

    this.state = {
      lastRefreshAt: null
    }

    this.fetchData = this.fetchData.bind(this)
    this.beginPolling = this.beginPolling.bind(this)
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData() {
    this.props.updateStockGraphData(this.props.stockTicker)
    this.props.updateStockQuote(this.props.stockTicker)
    this.props.updateWallStreetBetsData(this.props.stockTicker)
    
    this.setState({ lastRefreshAt: moment() })
    this.beginPolling()
  }

  beginPolling() {
    setTimeout(this.fetchData, 30000)
  }
  
  render() {
    return(
      <div>
        <StyledStock>
          <h1>{this.props.stockTicker}</h1>
          <div>
            { this.props.quote === null ? <BeatLoader size={20} color={"green"} /> : StockQuote(this.props.quote) }
          </div>
          <br></br>
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
        </StyledStock>
      </div>
    )
  }
}

Stock.propTypes = {
  onClick: PropTypes.func.isRequired,
  stockTicker: PropTypes.string.isRequired
}

export default Stock