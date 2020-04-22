import React from 'react'
import { connect } from 'react-redux'
import { addStock } from '../actions'
import styled from 'styled-components'

let StyledInput = styled.input`
  font-size: 50px;
  border: none;
  border-bottom: 1px solid grey;
  text-align: center;
  opacity: 0.9;
  display: block;
  margin: auto;
  width: 250px;
`

let Label = styled.p`
  text-align: center;
`

let AddStock = ({ dispatch }) => {
  let input

  return (
    <div>
      <Label>ENTER A STOCK SYMBOL</Label>
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
            placeholder={'SPY'}
            ref={ node => {
              input = node
            }}
          />
       </form>
    </div>
  )
}

AddStock = connect()(AddStock)
export default AddStock