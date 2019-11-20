//@format
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { loadCurrentMatchWeek } from '../../actions/api/currentMatchWeek'
import MatchWeek from '../../components/MatchWeek'

const CurrentMatchWeek = ({ data }) => {
  console.log(data)
  return <MatchWeek weekName="Jornada" matches={data} />
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
