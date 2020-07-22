const defaultFishState = {
	species: '',
	image: '',
	length: '',
	weight: '',
	location: '',
	fly_id: '' }

export const currentFishEntry = (state = defaultFishState, action) => {
	switch(action.type) {
		case 'UPDATE_FISH_ENTRY':
			state[action.field] = action.data
			return state

		case 'CLEAR_FISH_ENTRY':
			return state = {
				species: '',
				image: '',
				length: '',
				weight: '',
				location: '',
				fly_id: '' }
		default:
			return state
	}
}