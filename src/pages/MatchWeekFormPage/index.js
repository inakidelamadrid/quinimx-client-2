import React, { useEffect } from 'react'
import { loadTeams } from '../../actions/api'
import { useDispatch, useSelector } from 'react-redux'
import _ from 'lodash'
import MatchWeek from '../../components/MatchWeek'

const MatchWeekFormPage = props => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadTeams())
  }, [dispatch])

  const teamsData = useSelector(state => state.teams)
  if (!_.isEmpty(teamsData.data)) {
    const teams = _.values(teamsData.data).map(team => {
      return {...team, image: team.image_url }
    })
    const matches = _.chunk(teams.slice(0, 18), 2)

    return <div><MatchWeek weekName="Jornada 19" matches={matches}/></div>
  }
  return <div>MatchWeekFormPage</div>
}

export default MatchWeekFormPage
