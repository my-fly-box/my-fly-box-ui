import { combineReducers } from 'redux';
import { currentFlies } from './currentFlies';
import { currentFlyEntry } from './currentFlyEntry'


const rootReducer = combineReducers({
	currentFlies,
	currentFlyEntry,
})

export default rootReducer;