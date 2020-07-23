import React from 'react';
import 'react-native'
import App from '../App'
import renderer from 'react-test-renderer'

describe('App', () => {
  it('renders the App', () => {
    const snap = renderer.create(
      <App />
    ).toJSON();
    expect(snap).toMatchSnapshot();
  })
})