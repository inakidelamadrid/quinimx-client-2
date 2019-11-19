import { loadTeams as apiLoadTeams } from '../api'

const MSG_USERS_LOADING = 'REDUX_THUNK_USERS_LOADING'
const MSG_USERS_LOAD_SUCCESS = 'REDUX_THUNK_USERS_LOAD_SUCCESS'
const MSG_USERS_LOAD_FAILURE = 'REDUX_THUNK_USERS_LOAD_FAILURE'

const usersLoaded = (dispatch, data) => {
  dispatch({ type: MSG_USERS_LOAD_SUCCESS, payload: data })
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
