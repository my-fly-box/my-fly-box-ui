export const currentFlies = (state = [], action) => {
	switch(action.type) {
		case 'SET_FLIES':
			return state = action.data

		case 'ADD_FLY':
			return [action.data, ...state]

		case 'UPDATE_FLY':
			let updateFlyList = state.filter(fly => fly.id != action.data.data.id)
    	updateFlyList.unshift(action.data.data)
			return state = updateFlyList

		case 'REMOVE_FLY':
			state = state.filter(fly => fly.id != action.id)
			return state

		default:
			return state
	}
}