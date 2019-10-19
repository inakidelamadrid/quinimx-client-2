import React from 'react'
import { storiesOf } from '@storybook/react'

import ProfileCard from './ProfileCard'
import Photo from './leysvan.jpg' 

storiesOf('ProfileCard', module) //Force-break
  .add('typical', () => {
    const name = 'Dr. Leysvan Morales Hernandez'
    const jobTitle = 'Medico Cirujano'
    const image = <img src={Photo}/>
    return <ProfileCard name={name} jobTitle={jobTitle} image={image}/>
  })
