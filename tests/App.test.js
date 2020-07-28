import React from 'react';
import 'react-native'
import App from '../App'
import { Provider } from 'react-redux'
import rootReducer from '../reducers/index'
import { createStore } from 'redux'
import renderer from 'react-test-renderer'

describe('App', () => {
  it.skip('renders the App', () => {
    const testStore = createStore(rootReducer)
    const testWrapper = <Provider store={testStore}></Provider>
    const snap = renderer.create(
      testWrapper
    ).toJSON();
    expect(snap).toMatchSnapshot();
  })
}) 