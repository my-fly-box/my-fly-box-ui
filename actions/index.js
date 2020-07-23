// Action for the currentFlies Reducer
export const setFlies = data => ({
	type: 'SET_FLIES',
	data
})

export const addFly = data => ({
	type: 'ADD_FLY',
	data
})

// Actions for the currentFlyEntry Reducers
export const updateFlyEntry = (field, data) => ({
	type: 'UPDATE_FLY_ENTRY',
	field,
	data
})

export const clearFlyEntry = () => ({
	type: 'CLEAR_FLY_ENTRY',
})

export const setCurrentFly = (data) => ({
	type: 'SET_CURRENT_FLY',
	data
})

export const setSelectedFlyId = (data) => ({
	type: 'SET_FLY_ID',
	data
})

// Actions for the currentFishEntry Reducers
export const updateFishEntry = (field, data) => ({
	type: 'UPDATE_FISH_ENTRY',
	field,
	data
})

export const clearFishEntry = () => ({
	type: 'CLEAR_FISH_ENTRY',
})

// Actions for the currentFish Reducer
export const setFish = data => ({
	type: 'SET_FISH',
	data
})

export const addFish = data => ({
	type: 'ADD_FISH',
	data
})

export const setCurrentFish = (data) => ({
	type: 'SET_CURRENT_FISH',
	data
})

export const setSelectedFishId = (data) => ({
	type: 'SET_FISH_ID',
	data
})