import React from 'react'
import VisibleStocks from '../containers/VisibleStocks'
import AddStock from '../containers/addStock'
import styled from 'styled-components'

const Root = styled.div`
  background-color: black;
  opacity: 0.9;
  height: 1000px;
  padding: 20px;
  color: white;
`

const App = () => {
  return(
    <Root>
      <AddStock />
      <VisibleStocks />
    </Root>
  )
}

export default App