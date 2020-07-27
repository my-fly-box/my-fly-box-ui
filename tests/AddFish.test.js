import React from 'react';
import 'react-native'
import AddFish from '../containers/AddFish'
import { Provider } from 'react-redux'
import rootReducer from '../reducers/index'
import { createStore } from 'redux'
import renderer from 'react-test-renderer'
import { fetchFlies } from '../ApiCalls'

jest.mock('../ApiCalls')


describe('AddFish', () => {
  let mockFlyData
  beforeEach(() => {
    mockFlyData = [
      {
        "id": "18",
        "type": "fly",
        "attributes": {
            "id": 18,
            "name": "Copper John",
            "size": 16,
            "color": "Copper",
            "category": "Nymph",
            "amount": 3
        }
    }
    ]
  })

  it('renders the AddFish', async () => {
    const testStore = createStore(rootReducer)
    const testWrapper = <Provider store={testStore}><AddFish /></Provider>
    fetchFlies.mockResolvedValueOnce(mockFlyData)
    const snap = renderer.create(
      testWrapper
    ).toJSON();
    expect(snap).toMatchSnapshot();
  })
}) 