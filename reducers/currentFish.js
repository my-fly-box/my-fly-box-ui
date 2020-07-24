export const currentFish = (state = [], action) => {
	switch(action.type) {
		case 'SET_FISH':
			return state = action.data
		case 'ADD_FISH':
			return[action.data, ...state]
		case 'UPDATE_FISH':
			let updateFishList = state.filter(fish => fish.id != action.data.data.id)
    	updateFishList.unshift(action.data.data)
			return state = updateFishList
		case 'REMOVE_FISH':
			state = state.filter(fish => fish.id != action.id)
			return state
		default:
			return state
	}
}