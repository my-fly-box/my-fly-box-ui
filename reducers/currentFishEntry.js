const defaultFishState = {
	species: '',
	image: '',
	length: '',
	weight: '',
	location: '',
	flyName: '' }

export const currentFishEntry = (state = defaultFishState, action) => {
	switch(action.type) {
		case 'UPDATE_FISH_ENTRY':
			state[action.field] = action.data
			return state

		case 'CLEAR_FISH_ENTRY':
			return state = defaultFishState
		default:
			return state
	}
}