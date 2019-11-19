import { loadTeams as apiLoadTeams } from '../api'
import reduce from 'lodash/reduce'


export const MSG_USERS_LOADING = 'REDUX_THUNK_USERS_LOADING'
export const MSG_USERS_LOAD_SUCCESS = 'REDUX_THUNK_USERS_LOAD_SUCCESS'
export const MSG_USERS_LOAD_FAILURE = 'REDUX_THUNK_USERS_LOAD_FAILURE'

const usersLoaded = (dispatch, data) => {
  const teamsDict = reduce(data, (result, value, key)=>{
    result[value.name] = value
    return result
  }, {})
  dispatch({ type: MSG_USERS_LOAD_SUCCESS, payload: teamsDict })
}

const errorOnUsersLoad = (dispatch, error) => {
  dispatch({
    type: MSG_USERS_LOAD_FAILURE,
    error: error.message || 'Unexpected error!',
  })
}

export const loadTeams = () => dispatch => {
  dispatch({ type: MSG_USERS_LOADING })

  apiLoadTeams()
    .then(response => response.json())
    .then(
      data => usersLoaded(dispatch, data),
      error => errorOnUsersLoad(dispatch, error)
    )
}
