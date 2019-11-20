import {
  getUrl,
  loadCurrentMatchWeek as apiLoadCurrentMatchWeek,
} from '../../api'
// TODO: Only import needed functions
import _ from 'lodash'

export const MSG_CURRENT_MATCHWEEK_LOADING = 'CURR_MW_LOADING'
export const MSG_CURRENT_MATCHWEEK_LOAD_SUCCESS = 'CURR_MW_LOAD_SUCCESS'
export const MSG_CURRENT_MATCHWEEK_LOAD_FAIL = 'CURR_MW_LOAD_FAIL'

const matchWeekLoaded = (dispatch, data) => {
  console.log("Matchweek loaded");
  console.log(data);
  dispatch({ type: MSG_CURRENT_MATCHWEEK_LOAD_SUCCESS, payload: data })
}

const errorOnMatchWeekLoad = (dispatch, error) => {
  dispatch({
    type: MSG_CURRENT_MATCHWEEK_LOAD_FAIL,
    error: error.message || 'Unexpected error!',
  })
}

export const loadCurrentMatchWeek = () => dispatch => {
  dispatch({ type: MSG_CURRENT_MATCHWEEK_LOADING })

  apiLoadCurrentMatchWeek()
    .then(response => response.json())
    .then(
      data => matchWeekLoaded(dispatch, data),
      error => errorOnMatchWeekLoad(dispatch, error)
    )
}
