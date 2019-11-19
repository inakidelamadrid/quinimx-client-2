import React from 'react'
import { storiesOf } from '@storybook/react'

import MatchWeek from './index'
import Match from '../Match/Match'

const server = 'http://localhost:5000'
const baseImagePath = `${server}/static/images/logos`

const imagePath = (basePath, name) => `${baseImagePath}/${name}`

storiesOf('MatchWeek', module) //Force-break
  .add('default', () => {
    const team1 = {
      name: 'Necaxa',
      image: imagePath(baseImagePath, 'Necaxa.png'),
    }
    const team2 = {
      name: 'Guadalajara',
      image: imagePath(baseImagePath, 'Guadalajara.png'),
    }

    return <MatchWeek weekName="Jornada 1" />
  })
