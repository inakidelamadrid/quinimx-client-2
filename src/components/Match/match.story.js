import React from 'react'
import { storiesOf } from '@storybook/react'

import Match from './Match'
import Team from '../Team/Team'

//import Logo from './Necaxa.png'
const server = 'http://localhost:5000'
const baseImagePath = `${server}/static/images/logos`

const imagePath = (basePath, name) => `${baseImagePath}/${name}`

storiesOf('Match', module) //Force-break
  .add('default', () => {
    const team1 = {
      name: 'Necaxa',
      image: imagePath(baseImagePath, 'Necaxa.png'),
    }
    const team2 = {
      name: 'Guadalajara',
      image: imagePath(baseImagePath, 'Guadalajara.png'),
    }

    return (
      <Match
        local={<Team {...team1} />}
        visitor={<Team {...team2} />}
        result={null}
      />
    )
  })
