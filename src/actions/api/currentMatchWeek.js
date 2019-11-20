//@format
import {
  getUrl,
  loadCurrentMatchWeek as apiLoadCurrentMatchWeek,
  loadMatches,
  loadTeams,
} from '../../api'
// TODO: Only import needed functions
import _ from 'lodash'

export const MSG_CURRENT_MATCHWEEK_LOADING = 'CURR_MW_LOADING'
export const MSG_CURRENT_MATCHWEEK_LOAD_SUCCESS = 'CURR_MW_LOAD_SUCCESS'
export const MSG_CURRENT_MATCHWEEK_LOAD_FAIL = 'CURR_MW_LOAD_FAIL'

const fillUpMatchData = (teams, matches) => {
  const teamsWithImage = teams.map(team => {
    return { ...team, image: getUrl(`/${team.image_url}`) }
  })

  return _.chain(matches)
    .map(match => _.pick(match, ['id', 'local_team_id', 'visitor_team_id']))
    .map(match => {
      const _teams = [match.local_team_id, match.visitor_team_id].map(teamId =>
        _.find(teamsWithImage, ['id', teamId])
      )
      return { id: match.id, teams: _teams }
    })
    .value()
}

const dispatchMatches = (dispatch, data) => {
  loadTeams()
    .then(response => response.json())
    .then(
      teamsData => {
        const payload = fillUpMatchData(teamsData, data)
        dispatch({ type: MSG_CURRENT_MATCHWEEK_LOAD_SUCCESS, payload: payload })
      },
      error => errorOnMatchWeekLoad(dispatch, error)
    )
}

const matchWeekLoaded = (dispatch, data) => {
  // we get the id of the matchweek and fetch all its matches
  const id = data[0].id
  loadMatches(id) //Force-break
    .then(response => response.json())
    .then(
      data => dispatchMatches(dispatch, data),
      error => errorOnMatchWeekLoad(dispatch, error)
    )
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
