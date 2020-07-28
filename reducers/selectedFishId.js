export const selectedFishId = (state = null, action) => {
	switch(action.type) {
    case 'SET_FISH_ID':
      state = action.data
			return state
			
		default:
			return state
	}
}