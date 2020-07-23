export const currentFish = (state = [], action) => {
	switch(action.type) {
		case 'SET_FISH':
			return state = action.data
		case 'ADD_FISH':
			return[...state, action.data]
		case 'UPDATE_FISH':
			const updateFishList = state.filter(fish => fish.id != action.data)
			return state = updateFishList.push(action.data)
		default:
			return state
	}
}