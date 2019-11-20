import counterReducer from './counter'
import loggedReducer from './isLogged'
import teamsAPIReducer from './api/teams'
import currentMatchWeekAPIReducer from './api/currentMatchWeek'
import { combineReducers } from 'redux'

const allReducers = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer,
  teams: teamsAPIReducer,
  currentMatchWeek: currentMatchWeekAPIReducer
})
export default allReducers
