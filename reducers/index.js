import { combineReducers } from 'redux';
import { currentFlies } from './currentFlies';
import { currentFlyEntry } from './currentFlyEntry'
import { selectedFlyId } from './selectedFlyId'

const rootReducer = combineReducers({
	currentFlies,
	currentFlyEntry,
	selectedFlyId
})

export default rootReducer;