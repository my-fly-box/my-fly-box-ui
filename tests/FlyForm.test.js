import React from 'react';
import { Text } from 'react-native'
import FlyForm from '../components/FlyForm'

import renderer from 'react-test-renderer'

describe('FlyForm', () => {
  it('renders the FlyForm', () => {
    const flyNameText = 'Name'
    const flyForm = renderer.create(<FlyForm/>)
    const textInst = flyForm.root.findAllByType(Text)
  })
})