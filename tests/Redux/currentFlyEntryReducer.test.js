import { currentFlyEntry } from '../../reducers/currentFlyEntry'

describe('currentFlyEntry Reducer', () => {

	// beforeEach(() => {

	// })

	it("should return the intial state", () => {
		const intialState = {
			name: '',
			size: '',
			color: '',
			category: '',
			amount: '' }

		const expectedResult = intialState
		
    const result = currentFlyEntry(intialState, {});

    expect(result).toEqual(expectedResult)
	})

})
