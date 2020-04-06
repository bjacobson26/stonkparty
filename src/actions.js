export const ADD_STOCK = 'ADD_STONK'
export const REMOVE_STOCK = 'REMOVE_STONK'

export function addStock(stockTicker) {
  return { type: ADD_STOCK, stockTicker }
}

export function removeStock(index) {
  return { type: REMOVE_STOCK, index }
}
