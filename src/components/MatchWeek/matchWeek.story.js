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

    const team3 = {
      name: 'UANL',
      image: imagePath(baseImagePath, 'UANL.png'),
    }
    const team4 = {
      name: 'León',
      image: imagePath(baseImagePath, 'León.png'),
    }

    const team5 = {
      name: 'SanLuis',
      image: imagePath(baseImagePath, 'SanLuis.png'),
    }
    const team6 = {
      name: 'Pachuca',
      image: imagePath(baseImagePath, 'Pachuca.png'),
    }
    const team7 = {
      name: 'Puebla_F.C',
      image: imagePath(baseImagePath, 'Puebla_F.C.png'),
    }

    const team8 = {
      name: 'Veracruz',
      image: imagePath(baseImagePath, 'Veracruz.png'),
    }

    const matches = [
      [team1, team2],
      [team3, team4],
      [team5, team6],
      [team7, team8],
    ]

    return <MatchWeek weekName="Jornada 1" matches={matches}/>
  })
