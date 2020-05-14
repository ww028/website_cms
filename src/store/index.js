import { createStore } from 'redux'

const state = {
  name: 'kobe'
}

const reducer = (defaultState = state, action) =>{
  return defaultState
}

export default createStore(reducer)
