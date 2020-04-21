import React from 'react'
import VisibleStocks from '../containers/VisibleStocks'
import AddStock from '../containers/addStock'
import styled from 'styled-components'

const Root = styled.div`
  opacity: 0.9;
  height: 1000px;
  padding: 20px;
`

const Watchlist = styled.div`
  width: 50%;
`

const App = () => {
  return(
    <Root>
      <Watchlist>
        <AddStock />
        <VisibleStocks />
      </Watchlist>
    </Root>
  )
}

export default App