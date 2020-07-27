import { selectedFlyId } from '../../reducers/selectedFlyId'

describe('selectedFlyId Reducer', () => {
	let setFlyState;

	beforeEach(() => {
		setFlyState = {
			name: 'Tom',
			size: 2,
			color: 'red',
			category: 'midge',
			amount: 5 
		}
	})

	it("should return the intial state", () => {
		const expectedResult = null
    const result = selectedFlyId(null, {});

    expect(result).toEqual(expectedResult)
	})

	it("when receiving SET_FLY_ID action, should return a updated state of the current Fly to edit", () => {
		const action = {type: 'SET_FLY_ID', data: setFlyState}
		const result = selectedFlyId(null, action)

    expect(result).toEqual(setFlyState)
	})

})
