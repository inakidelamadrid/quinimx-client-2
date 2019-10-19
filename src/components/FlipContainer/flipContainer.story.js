import React from 'react'
import { storiesOf } from '@storybook/react'

import FlipContainer from './FlipContainer'

storiesOf('FlipContainer', module) //Force-break
  .add('typical', () => {
    const front = (
      <>
        <h1>PRO TIER</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
          totam.
        </p>
      </>
    )
    const back = (
      <>
        <h1>Price: $20</h1>
        <button>Buy</button>
      </>
    )

    return <FlipContainer front={front} back={back}/>
  })
