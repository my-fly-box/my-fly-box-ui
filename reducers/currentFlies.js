export const currentFlies = (state = [], action) => {
	switch(action.type) {
		case 'SET_FLIES':
			return state = action.data
		case 'ADD_FLY':
			return [...state, action.data]
		default:
			return state
	}
}