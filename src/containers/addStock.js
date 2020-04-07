import React from 'react'
import { connect } from 'react-redux'
import { addStock } from '../actions'
import styled from 'styled-components'

let StyledInput = styled.input`
  font-size: 50px;
  border: none;
  border-bottom: 1px solid black;
  text-align: center;
  display: block;
  margin: auto;
`

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
         <StyledInput
            placeholder={'Enter Stock Ticker...'}
            ref={ node => {
              input = node
            }}
          />
          {/* <button type="submit">Add Stonk</button> */}
       </form>
    </div>
  )
}

AddStock = connect()(AddStock)
export default AddStock