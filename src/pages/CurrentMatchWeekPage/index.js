//@format
import React, { useEffect } from 'react'
import isEmpty from 'lodash/isEmpty'
import { useSelector, useDispatch } from 'react-redux'

import { loadTeams } from '../../actions/api'
import { loadCurrentMatchWeek } from '../../actions/api/currentMatchWeek'

const CurrentMatchWeek = ({ data }) => {
  console.log(data)
  return <div>CurrentMatchWeek</div>
}
const CurrentMatchWeekPage = props => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadCurrentMatchWeek())
  }, [dispatch])

  const matchWeekState = useSelector(state => state.currentMatchWeek)
  if (matchWeekState.loading) return <div> Loading </div>
  else
    return matchWeekState.error ? (
      <div> Error </div>
    ) : (
      <CurrentMatchWeek data={matchWeekState.data} />
    )
}
export default React.memo(CurrentMatchWeekPage)
