import { combineReducers } from 'redux';
import { currentFlies } from './currentFlies';
import { currentFlyEntry } from './currentFlyEntry';
import { currentFishEntry } from './currentFishEntry'
import { selectedFlyId } from './selectedFlyId'

const rootReducer = combineReducers({
	currentFlies,
	currentFlyEntry,
	selectedFlyId,
	currentFishEntry
})

export default rootReducer;