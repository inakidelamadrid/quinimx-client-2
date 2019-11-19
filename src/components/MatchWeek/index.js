import React from 'react'
import Match from '../Match/Match'
import Team from '../Team/Team'
import styles from './styles.module.scss'
//import { useSelector, useDispatch } from 'react-redux'
// import { increment } from './actions'

const getTeam = obj => <Team {...obj} />
const MatchWeek = ({ weekName, matches }) => {
  //const counter = useSelector(state => state.counter)
  //const dispatch = useDispatch()
  // dispatch(increment())
  return (
    <div>
      <h1 className={styles.matchweekTitle}>
        {weekName ? weekName : 'MatchWeek'}
      </h1>

      <div>
        {matches.map((match, index) => (
          <Match key={index}
            matchName={`Partido ${index + 1}`}
            local={getTeam(match[0])}
            visitor={getTeam(match[1])}
          />
        ))}
      </div>
    </div>
  )
}

export default React.memo(MatchWeek)
