import { currentFishEntry } from '../../reducers/currentFishEntry'

describe('currentFishEntry Reducer', () => {
	let intialState, currentFishState;

	beforeEach(() => {
		intialState = {
			species: "",
			image: "",
			length: "",
			weight: "",
			location: "",
			fly_id: "",
		}

		currentFishState = {
			species: "Trout",
			image: "none",
			length: "5",
			weight: "8",
			location: "Lake Unknown",
			fly_id: "6",
		}
	})

	it("should return the intial state", () => {
		const expectedResult = intialState
    const result = currentFishEntry(intialState, {});

    expect(result).toEqual(expectedResult)
	})

	it("when receiving UPDATE_FISH_ENTRY action, should return a updated property of the current fish entry objects", () => {
		const action1 = {type: 'UPDATE_FISH_ENTRY', field: 'species', data: 'Trout'}
		const action2 = {type: 'UPDATE_FISH_ENTRY', field: 'length', data: 5}

		const expectedResult = {
			species: "Trout",
			image: "",
			length: 5,
			weight: "",
			location: "",
			fly_id: "",
		}

		currentFishEntry(intialState, action1)
		const result = currentFishEntry(intialState, action2)

    expect(result).toEqual(expectedResult)
	})

	it("when receiving CLEAR_FISH_ENTRY action, should return a default property of the current fish entry object", () => {
		const action = {type: 'CLEAR_FISH_ENTRY'}
		const result = currentFishEntry(currentFishState, action)

    expect(result).toEqual(intialState)
	})

	it("when receiving SET_CURRENT_FISH action, should set state to current fish", () => {		
		const action = {type: 'SET_CURRENT_FISH', data: currentFishState}
		const result = currentFishEntry(intialState, action)

    expect(result).toEqual(currentFishState)
	})
})
