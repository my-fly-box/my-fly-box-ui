import React from 'react';
import 'react-native'
import AddFish from '../containers/AddFish'
import renderer from 'react-test-renderer'

describe('AddFish', () => {
  it('renders the AddFish', () => {
    const snap = renderer.create(
      <AddFish />
    ).toJSON();
    expect(snap).toMatchSnapshot();
  })
})