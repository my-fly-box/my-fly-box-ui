export const currentFlies = (state = [], action) => {
	switch(action.type) {
		case 'GET_FLIES':
			return state = action.data
		default:
			return state
	}
}