import React from 'react';
import 'react-native'
import App from '../App'
import renderer from 'react-test-renderer'
import { waitFor} from 'react-native-testing-library';

describe('App', () => {
  it('renders the App', () => {
    const tree = waitFor(() => renderer.create(<App />).toJSON());
     waitFor(() => expect(tree.children.length).toBe(1))
  })
}) 
