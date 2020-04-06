import React from 'react'
import { connect } from 'react-redux'
import { addStock } from '../actions'

let AddStock = ({ dispatch }) => {
  let input

  return (
    <div>
      <form
        onSubmit={ e => {
          e.preventDefault()
          if(!input.value.trim()) {
            return
          }
          dispatch(addStock(input.value))
          input.value = ''
        }}
       >
         <input
            ref={ node => {
              input = node
            }}
          />
          <button type="submit">Add Stonk</button>
       </form>
    </div>
  )
}

AddStock = connect()(AddStock)
export default AddStock