import { combineReducers } from 'redux'
import { currentFlies } from './currentFlies'

const rootReducer = combineReducers({
	currentFlies,
})

export default rootReducer;