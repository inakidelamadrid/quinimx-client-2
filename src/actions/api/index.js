import { getUrl, loadTeams as apiLoadTeams } from '../../api'
// TODO: Only import needed functions
import _ from 'lodash'

export const MSG_USERS_LOADING = 'REDUX_THUNK_USERS_LOADING'
export const MSG_USERS_LOAD_SUCCESS = 'REDUX_THUNK_USERS_LOAD_SUCCESS'
export const MSG_USERS_LOAD_FAILURE = 'REDUX_THUNK_USERS_LOAD_FAILURE'

const usersLoaded = (dispatch, data) => {
  const teamsDict = _.chain(data)
    .map(team => {
      return { ...team, image_url: getUrl(`/${team.image_url}`) }
    })
    .reduce((result, value, key) => {
      result[value.name] = value
      return result
    }, {})
    .value()
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
