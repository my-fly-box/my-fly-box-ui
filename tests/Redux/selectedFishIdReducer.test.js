import { selectedFishId } from '../../reducers/selectedFishId'

describe('selectedFishId Reducer', () => {
	let setFishState;

	beforeEach(() => {
		setFishState = {
			species: "Trout",
			image: "none",
			length: "5",
			weight: "8",
			location: "Lake Unknown",
			fly_id: "6",
		}
	})

	it("should return the intial state", () => {
		const expectedResult = null
    const result = selectedFishId(null, {});

    expect(result).toEqual(expectedResult)
	})

	it("when receiving SET_FISH_ID action, should return a updated state of the current Fish to edit", () => {
		const action = {type: 'SET_FISH_ID', data: setFishState}
		const result = selectedFishId(null, action)

    expect(result).toEqual(setFishState)
	})

})
