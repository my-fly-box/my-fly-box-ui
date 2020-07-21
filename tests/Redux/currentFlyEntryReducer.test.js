import { currentFlyEntry } from '../../reducers/currentFlyEntry'

describe('currentFlyEntry Reducer', () => {
	let intialState;

	beforeEach(() => {
		intialState = {
			name: '',
			size: '',
			color: '',
			category: '',
			amount: '' }
	})

	it("should return the intial state", () => {
		const expectedResult = intialState
		
    const result = currentFlyEntry(intialState, {});

    expect(result).toEqual(expectedResult)
	})

	it("when receiving UPDATE_FLY_ENTRY action, should return a updated property of the current fly entry objects", () => {
		const action = {type: 'UPDATE_FLY_ENTRY', field: 'name', data: 'Tom'}

		const expectedResult = {
			name: 'Tom',
			size: '',
			color: '',
			category: '',
			amount: '' }

		const result = currentFlyEntry(intialState, action)

    expect(result).toEqual(expectedResult)
	})

	it("when receiving CLEAR_FLY_ENTRY action, should return a default property of the current fly entry objects", () => {
		const action = {type: 'CLEAR_FLY_ENTRY', field: 'name', data: 'Tom'}

		const currentState = {
			name: 'Tom',
			size: 2,
			color: 'red',
			category: 'midge',
			amount: 5 }

		const result = currentFlyEntry(currentState, action)

    expect(result).toEqual(intialState)
	})
})
