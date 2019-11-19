import React, { useEffect } from 'react'
import { loadTeams } from '../../actions/api'
import { useDispatch } from 'react-redux'
//import
//import MatchWeek from '../../components/MatchWeek'

const MatchWeekFormPage = props => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadTeams())
    console.log('I will execute only on mount!')
  })
  return <div>MatchWeekFormPage</div>
}

export default MatchWeekFormPage
