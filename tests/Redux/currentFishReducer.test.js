import { currentFish } from '../../reducers/currentFish'

describe('currentFlies Reducer', () => {
	let fishData, newFishData;

	beforeEach(() => {
		fishData = [
			{
				"id": "37",
				"type": "catch",
				"attributes": {
						"id": 37,
						"species": "Brook Trout",
						"location": "William’s Fok",
						"length": 4,
						"weight": 5,
						"image": "Img",
						"fly_id": 18
				}
			},
			{
				"id": "35",
				"type": "catch",
				"attributes": {
						"id": 35,
						"species": "Walleye",
						"location": "Lake Minnetonka",
						"length": 4,
						"weight": 5,
						"image": "None",
						"fly_id": 20
				}
			}
		]

		newFishData = 
		{
			"id": "99",
			"type": "catch",
			"attributes": {
					"id": 99,
					"species": "Sun Fish",
					"location": "Lake Minnetonka",
					"length": 44,
					"weight": 55,
					"image": "None",
					"fly_id": 15
			}
		}
	})

	it("should return the intial state", () => {
		const expectedResult = []
    const result = currentFish(undefined, {});

    expect(result).toEqual(expectedResult)
	})
	
	it("when receiving SET_FISH action, should return a new array of Fish objects", () => {
		const action = {type: 'SET_FISH', data: fishData}
		const expectedResult = fishData
		const result = currentFish(undefined, action)

    expect(result).toEqual(expectedResult)
	})
	
	it("when receiving ADD_FISH action, should return an updated array of Fish objects", () => {
		const updatedFishData = [
			newFishData,
			{
				"id": "37",
				"type": "catch",
				"attributes": {
						"id": 37,
						"species": "Brook Trout",
						"location": "William’s Fok",
						"length": 4,
						"weight": 5,
						"image": "Img",
						"fly_id": 18
				}
			},
			{
				"id": "35",
				"type": "catch",
				"attributes": {
						"id": 35,
						"species": "Walleye",
						"location": "Lake Minnetonka",
						"length": 4,
						"weight": 5,
						"image": "None",
						"fly_id": 20
				}
			}
		]

		const action = {type: 'ADD_FISH', data: newFishData}
		const expectedResult = updatedFishData
		const result = currentFish(fishData, action)

    expect(result).toEqual(expectedResult)
	})
	
	it("when receiving UPDATE_FISH action, should return an updated currentFish array", () => {
		const updatedFishData = [
			{
				"id": "37",
				"type": "catch",
				"attributes": {
						"id": 37,
						"species": "Silly Trout",
						"location": "William’s Fok",
						"length": 4,
						"weight": 5,
						"image": "Img",
						"fly_id": 18
				}
			},
			{
				"id": "35",
				"type": "catch",
				"attributes": {
						"id": 35,
						"species": "Walleye",
						"location": "Lake Minnetonka",
						"length": 4,
						"weight": 5,
						"image": "None",
						"fly_id": 20
				}
			}
		]

		const newFishData = { data: {
				"id": "37",
				"type": "catch",
				"attributes": {
						"id": 37,
						"species": "Silly Trout",
						"location": "William’s Fok",
						"length": 4,
						"weight": 5,
						"image": "Img",
						"fly_id": 18
				}
			}
		}

		const action = {type: 'UPDATE_FISH', data: newFishData}
		const expectedResult = updatedFishData
		const result = currentFish(fishData, action)

    expect(result).toEqual(expectedResult)
	})

	it("when receiving REMOVE_FISH action, should return an updated currentFish array", () => {
		const updatedFishData = [
			{
				"id": "35",
				"type": "catch",
				"attributes": {
						"id": 35,
						"species": "Walleye",
						"location": "Lake Minnetonka",
						"length": 4,
						"weight": 5,
						"image": "None",
						"fly_id": 20
				}
			}
		]

		const action = {type: 'REMOVE_FISH', id: 37}
		const expectedResult = updatedFishData
		const result = currentFish(fishData, action)

    expect(result).toEqual(expectedResult)
	})

})