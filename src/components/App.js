import React from 'react'
import VisibleStocks from '../containers/VisibleStocks'
import AddStock from '../containers/addStock'
import styled from 'styled-components'
import LiveFeed from '../containers/LiveFeed'

const Root = styled.div`
  opacity: 0.9;
  height: 1000px;
  padding: 20px;
  display: flex;
`

const Watchlist = styled.div`
  width: 50%;
`

const Feed = styled.div`
  width: 50%;
`

const App = () => {
  return(
    <Root>
      <Watchlist>
        <AddStock />
        <VisibleStocks />
      </Watchlist>
      <Feed>
        <LiveFeed />
      </Feed>
    </Root>
  )
}

export default App