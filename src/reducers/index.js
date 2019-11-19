import counterReducer from './counter'
import loggedReducer from './isLogged'
import teamsAPIReducer from './api/teams'
import { combineReducers } from 'redux'

const allReducers = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer,
  teams: teamsAPIReducer
})
export default allReducers
