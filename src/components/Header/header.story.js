import React from 'react'
import { storiesOf } from '@storybook/react'


import Header from './index'

storiesOf('Header', module).add('typical', () => <Header header="Hello" subheader="This is a test"/>)
