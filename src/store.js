import { createStore } from 'redux'
import stonkpartyApp from './reducers'

const store = createStore(stonkpartyApp, window.STATE_FROM_SERVER)