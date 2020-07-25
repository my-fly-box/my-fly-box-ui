import * as actions from '../../actions/index';

describe('Action Creators', () => {
	let fliesData, setFlyData, fishData, setFishData;

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

		setFlyData = {
			"name": "Tom",
			"size": 4,
			"color": "red",
			"category": "fliessss",
			"amount": 1
		}

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
			}
		]

		setFishData = {
			"id": 35,
			"species": "Walleye",
			"location": "Lake Minnetonka",
			"length": 4,
			"weight": 5,
			"image": "None",
			"fly_id": 20
		}

	})

	describe('Should test the Action for the currentFlies Reducer', () => {
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

	describe('Should test the Action for the currentFlyEntry Reducer', () => {
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

		it('should have a type of SET_CURRENT_FLY', () => {
			const expectedAction = {
				type: 'SET_CURRENT_FLY',
				data: setFlyData
			}
	
			const result = actions.setCurrentFly(setFlyData)
	
			expect(result).toEqual(expectedAction);
		})
	})

	describe('Should test the Action for the selectedFlyId Reducer', () => {
		it('should have a type of SET_FLY_ID', () => {
			const expectedAction = {
				type: 'SET_FLY_ID',
				data: setFlyData
			}
	
			const result = actions.setSelectedFlyId(setFlyData)
	
			expect(result).toEqual(expectedAction);
		})
	})

	describe('Should test the Action for the currentFish Reducer', () => {
		it('should have a type of SET_FISH', () => {
			const expectedAction = {
				type: 'SET_FISH',
				data: fishData
			}
	
			const result = actions.setFish(fishData)
	
			expect(result).toEqual(expectedAction);
		})

		it('should have a type of ADD_FISH', () => {
			const expectedAction = {
				type: 'ADD_FISH',
				data: setFishData
			}
	
			const result = actions.addFish(setFishData)
	
			expect(result).toEqual(expectedAction);
		})

		it('should have a type of UPDATE_FISH', () => {
			const updatedFlyData = {
				"id": "37",
				"type": "catch",
				"attributes": {
						"id": 37,
						"species": "Brook Trout",
						"location": "William’s Fok",
						"length": 45,
						"weight": 56,
						"image": "Image",
						"fly_id": 18
				}
			}

			const expectedAction = {
				type: 'UPDATE_FISH',
				data: updatedFlyData
			}
	
			const result = actions.updateFish(updatedFlyData)
	
			expect(result).toEqual(expectedAction);
		})

		it('should have a type of REMOVE_FISH', () => {
			const expectedAction = {
				type: 'REMOVE_FISH',
				id: 3
			}
	
			const result = actions.removeFish(3)
	
			expect(result).toEqual(expectedAction);
		})
	})

	describe('Should test the Action for the currentFishEntry Reducer', () => {
		it('should have a type of UPDATE_FISH_ENTRY', () => {
			const expectedAction = {
				type: 'UPDATE_FISH_ENTRY',
				field: 'species',
				data: 'Trout'
			}
	
			const result = actions.updateFishEntry('species', 'Trout')
	
			expect(result).toEqual(expectedAction);
		})

		it('should have a type of SET_CURRENT_FISH', () => {
			const expectedAction = {
				type: 'SET_CURRENT_FISH',
				data: setFishData
			}
	
			const result = actions.setCurrentFish(setFishData)
	
			expect(result).toEqual(expectedAction);
		})

		it('should have a type of CLEAR_FISH_ENTRY', () => {
			const expectedAction = {
				type: 'CLEAR_FISH_ENTRY',
			}
	
			const result = actions.clearFishEntry()
	
			expect(result).toEqual(expectedAction);
		})
	})

	describe('Should test the Action for the selectedFishId Reducer', () => {
		it('should have a type of SET_FISH_ID', () => {
			const expectedAction = {
				type: 'SET_FISH_ID',
				data: setFishData
			}
	
			const result = actions.setSelectedFishId(setFishData)
	
			expect(result).toEqual(expectedAction);
		})
	})

})