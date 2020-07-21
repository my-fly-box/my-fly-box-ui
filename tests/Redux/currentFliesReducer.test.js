import { currentFlies } from '../../reducers/currentFlies'

describe('currentFlies Reducer', () => {
	it("should return the intial state", () => {
		const expectedResult = []
		
    const result = currentFlies(undefined, {});

    expect(result).toEqual(expectedResult)
	})
	
	it("when receiving SET_FLIES action, should return a new array of Fly objects", () => {
		const fliesData = [
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

		const action = {type: 'SET_FLIES', data: fliesData}

		const expectedResult = fliesData

		const result = currentFlies(undefined, action)

    expect(result).toEqual(expectedResult)
  })
})