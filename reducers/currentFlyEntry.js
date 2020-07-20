export const currentFlyEntry = (state = {
	name: '',
	size: null,
	color: "",
	category: "",
	amount: null }, action) => {
	switch(action.type) {
		case 'UPDATE_FLY_ENTRY':
			state[action.field] = action.data
			return state
		case 'CLEAR_FLY_ENTRY':
			return state = {
				name: '',
				size: null,
				color: "",
				category: "",
				amount: null }
		default:
			return state
	}
}