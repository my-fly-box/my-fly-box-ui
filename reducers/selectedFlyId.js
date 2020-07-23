export const selectedFlyId = (state = null, action) => {
	switch(action.type) {
    case 'SET_FLY_ID':
      state = action.data
      return state
		default:
			return state
	}
}