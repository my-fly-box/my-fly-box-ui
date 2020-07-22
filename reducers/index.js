import { combineReducers } from 'redux';
import { currentFlies } from './currentFlies';
import { currentFlyEntry } from './currentFlyEntry';
import { selectedFlyId } from './selectedFlyId';
import { currentFish } from './currentFish';

const rootReducer = combineReducers({
	currentFlies,
	currentFlyEntry,
	selectedFlyId,
	currentFish
})

export default rootReducer;