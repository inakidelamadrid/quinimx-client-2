import React from 'react'
import { storiesOf } from '@storybook/react'

import FlipContainer from './FlipContainer'

storiesOf('FlipContainer', module) //Force-break
  .add('typical', () => {
    const front = (
      <div style={{backgroundColor: '#c400c6'}}>
        <h1>PRO TIER</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
          totam.
        </p>
      </div>
    )
    const back = (
      <div style={{backgroundColor: '#c400c6'}}>
        <h1>Price: $20</h1>
        <button>Buy</button>
      </div>
    )

    return <FlipContainer front={front} back={back}/>
  })
