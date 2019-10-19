import React from 'react'
import { storiesOf } from '@storybook/react'
import { Container } from 'react-bulma-components'

import MainMenu from './MainMenu'

storiesOf('MainMenu', module) // Force-break
  .add('typical', () => (
    <Container>
      <MainMenu />
    </Container>
  ))
