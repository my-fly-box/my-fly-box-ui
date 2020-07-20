import * as actions from '../actions/index'

describe('action creators', () => {
	it('should have a type of SET_FLIES', () => {
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
			}
		]

		const expectedAction1 = {
			type: 'SET_FLIES',
			data: fliesData
		}

		const expectedAction2 = {
			type: 'SET_FLIES',
			data: []
		}

		const result1 = actions.setFlies(fliesData)
		const result2 = actions.setFlies([])

		expect(result1).toEqual(expectedAction1);
		expect(result2).toEqual(expectedAction2);
	})
})