import { currentFlies } from '../../reducers/currentFlies'

describe('currentFlies Reducer', () => {
	let fliesData, newFlyData;

	beforeEach(() => {
		fliesData = [
			{
				"id": "8",
				"type": "fly",
				"attributes": {
					"id": 8,
					"name": "Tom",
					"size": 4,
					"color": "red",
					"category": "fliessss",
					"amount": 1
					}
			},
			{
				"id": "11",
				"type": "FLY",
				"attributes": {
					"id": 11,
					"name": "JERRY",
					"size": 8,
					"color": "Blue",
					"category": "dry fly",
					"amount": 3
					}
			}
		]

		newFlyData = 
		{
			"id": "9",
			"type": "fly",
			"attributes": {
				"id": 9,
				"name": "New Tom",
				"size": 6,
				"color": "orange",
				"category": "dirt fly",
				"amount": 2
				}
		}
	})

	it("should return the intial state", () => {
		const expectedResult = []
		
    const result = currentFlies(undefined, {});

    expect(result).toEqual(expectedResult)
	})
	
	it("when receiving SET_FLIES action, should return a new array of Fly objects", () => {
		const action = {type: 'SET_FLIES', data: fliesData}

		const expectedResult = fliesData

		const result = currentFlies(undefined, action)

    expect(result).toEqual(expectedResult)
	})
	
	it("when receiving ADD_FLY action, should return an udpated array of Fly objects", () => {
		const updatedFliesData = [
			{
				"id": "8",
				"type": "fly",
				"attributes": {
					"id": 8,
					"name": "Tom",
					"size": 4,
					"color": "red",
					"category": "fliessss",
					"amount": 1
					}
			},
			{
				"id": "11",
				"type": "FLY",
				"attributes": {
					"id": 11,
					"name": "JERRY",
					"size": 8,
					"color": "Blue",
					"category": "dry fly",
					"amount": 3
					}
			},
			{
				"id": "9",
				"type": "fly",
				"attributes": {
					"id": 9,
					"name": "New Tom",
					"size": 6,
					"color": "orange",
					"category": "dirt fly",
					"amount": 2
					}
			}
		]

		const action = {type: 'ADD_FLY', data: newFlyData}

		const expectedResult = updatedFliesData

		const result = currentFlies(fliesData, action)

    expect(result).toEqual(expectedResult)
  })

})