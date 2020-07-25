import * as actions from '../../actions/index';

describe('Action Creators', () => {
	let fliesData;

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
			}
		]
	})

	describe('Should test of Action for the currentFlies Reducer', () => {

		it('should have a type of SET_FLIES', () => {
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

		it('should have a type of ADD_FLY', () => {
			const newFlyData = [
				{
					"name": "Tom",
					"size": 4,
					"color": "red",
					"category": "fliessss",
					"amount": 1
				}
			]

			const expectedAction = {
				type: 'ADD_FLY',
				data: newFlyData
			}

			const result = actions.addFly(newFlyData)

			expect(result).toEqual(expectedAction);
		})

		it('should have a type of UPDATE_FLY', () => {
			const updatedFlyData = {
				"id": "8",
				"type": "fly",
				"attributes": {
					"id": 8,
					"name": "Tom",
					"size": 44,
					"color": "blue",
					"category": "flies",
					"amount": 2
					}
			}

			const expectedAction = {
				type: 'UPDATE_FLY',
				data: updatedFlyData
			}

			const result = actions.updateFly(updatedFlyData)

			expect(result).toEqual(expectedAction);
		})

		it('should have a type of REMOVE_FLY', () => {
			const expectedAction = {
				type: 'REMOVE_FLY',
				id: 6
			}

			const result = actions.removeFly(6)

			expect(result).toEqual(expectedAction);
		})
	})


	it('should have a type of UPDATE_FLY_ENTRY', () => {
		const expectedAction1 = {
			type: 'UPDATE_FLY_ENTRY',
			field: "name",
			data: "Bobby"
		}

		const expectedAction2 = {
			type: 'UPDATE_FLY_ENTRY',
			field: "size",
			data: 5
		}

		const result1 = actions.updateFlyEntry('name', 'Bobby')
		const result2 = actions.updateFlyEntry('size', 5)

		expect(result1).toEqual(expectedAction1);
		expect(result2).toEqual(expectedAction2);
	})

	it('should have a type of CLEAR_FLY_ENTRY', () => {
		const expectedAction = {
			type: 'CLEAR_FLY_ENTRY',
		}

		const result = actions.clearFlyEntry()

		expect(result).toEqual(expectedAction);
	})
})