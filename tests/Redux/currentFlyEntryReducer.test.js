import { currentFlyEntry } from '../../reducers/currentFlyEntry'

describe('currentFlyEntry Reducer', () => {
	let intialState, currentFlyState;

	beforeEach(() => {
		intialState = {
			name: '',
			size: '',
			color: '',
			category: '',
			amount: '' }

		currentFlyState = {
			name: 'Tom',
			size: 2,
			color: 'red',
			category: 'midge',
			amount: 5 
		}
	})

	it("should return the intial state", () => {
		const expectedResult = intialState
    const result = currentFlyEntry(intialState, {});

    expect(result).toEqual(expectedResult)
	})

	it("when receiving UPDATE_FLY_ENTRY action, should return a updated property of the current fly entry objects", () => {
		const action1 = {type: 'UPDATE_FLY_ENTRY', field: 'name', data: 'Tom'}
		const action2 = {type: 'UPDATE_FLY_ENTRY', field: 'color', data: 'Red'}

		const expectedResult = {
			name: 'Tom',
			size: '',
			color: 'Red',
			category: '',
			amount: '' }

		currentFlyEntry(intialState, action1)
		const result = currentFlyEntry(intialState, action2)

    expect(result).toEqual(expectedResult)
	})

	it("when receiving CLEAR_FLY_ENTRY action, should return a default property of the current fly entry objects", () => {
		const action = {type: 'CLEAR_FLY_ENTRY'}
		const result = currentFlyEntry(currentFlyState, action)

    expect(result).toEqual(intialState)
	})

	it("when receiving SET_CURRENT_FLY action, should set state to current fly", () => {		
		const action = {type: 'SET_CURRENT_FLY', data: currentFlyState}
		const result = currentFlyEntry(intialState, action)

    expect(result).toEqual(currentFlyState)
	})
})
