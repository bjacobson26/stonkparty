export const ADD_STOCK = 'ADD_STONK'
export const REMOVE_STOCK = 'REMOVE_STONK'
export const UPDATE_STOCK_GRAPH_DATA = 'UPDATE_STOCK_GRAPH_DATA'
export const UPDATE_STOCK_QUOTE = 'UPDATE_STOCK_QUOTE'
export const UPDATE_WALL_STREET_BETS_DATA = 'UPDATE_WALL_STREET_BETS_DATA'

export function addStock(stockTicker) {
  return { type: ADD_STOCK, stockTicker }
}

export function removeStock(index) {
  return { type: REMOVE_STOCK, index }
}

export function updateStockGraphData(stockTicker, stockGraphData) {
  return { type: UPDATE_STOCK_GRAPH_DATA, stockTicker: stockTicker, stockGraphData: stockGraphData }
}

export function updateStockQuote(stockTicker, stockQuote) {
  return { type: UPDATE_STOCK_QUOTE, stockTicker: stockTicker, stockQuote: stockQuote }
}

export function updateWallStreetBetsData(stockTicker, wallStreetBetsData) {
  return { type: UPDATE_WALL_STREET_BETS_DATA, stockTicker: stockTicker, wallStreetBetsData: wallStreetBetsData }
}