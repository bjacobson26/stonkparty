import React from 'react'
import VisibleStocks from '../containers/VisibleStocks'
import AddStock from '../containers/addStock'

const App = () => {
  return(
    <div>
      <AddStock />
      <VisibleStocks />
    </div>
  )
}

export default App