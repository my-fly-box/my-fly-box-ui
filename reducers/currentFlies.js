export const currentFlies = (state = [], action) => {
	switch(action.type) {
		case 'SET_FLIES':
			return state = action.data
		case 'ADD_FLY':
			return [...state, action.data]
		case 'UPDATE_FLY':
			let updateFlyList = state.filter(fly => fly.id != action.data.data.id)
    	updateFlyList.unshift(action.data.data)
			return state = updateFlyList
		default:
			return state
	}
}