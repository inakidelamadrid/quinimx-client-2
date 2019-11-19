import React from 'react'
import Match from '../Match/Match'
import Team from '../Team/Team'

const getTeam = obj => <Team {...obj} />
const MatchWeek = ({ weekName, matches }) => {
  return (
    <div>
      <div>{weekName ? weekName : 'MatchWeek'}</div>

      <div>
        {matches.map((match, index) => (
          <Match
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
