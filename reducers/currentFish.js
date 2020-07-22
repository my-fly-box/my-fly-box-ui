export const currentFish = (state = [], action) => {
	switch(action.type) {
		case 'SET_FISH':
			return state = action.data
		default:
			return state
	}
}