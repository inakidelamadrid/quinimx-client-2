import React from 'react'
import { storiesOf } from '@storybook/react'

import Team from './Team'
import Logo from './Necaxa.png'

storiesOf('Team', module) //Force-break
  .add('typical', () => {
    return <Team name="Necaxa" image={Logo} />
  })
