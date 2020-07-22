export const setFlies = data => ({
	type: 'SET_FLIES',
	data
})

export const addFly = data => ({
	type: 'ADD_FLY',
	data
})

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