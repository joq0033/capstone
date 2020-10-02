class Hospital {
	constructor () {
		this.allMyDoctors = []
	}

	addDoctor (newId, newFirstName, newLastName, newOffice, newFees) {
		var newDoctor = new Doctor(newId, newFirstName, newLastName, newOffice, newFees, this)
		this.allMyDoctors.push(newDoctor)
	}

	findDoctor (targetOwnerId) {
		let foundDoctor = null;
		for (let aDoctor of this.allMyDoctors) {
			if (aDoctor.id === targetOwnerId) {
				foundDoctor = aDoctor
				break
			}
		}
		return foundDoctor
	}

	sortDoctors () {
		this.allMyDoctors.sort(function (a, b) {
			return a.id - b.id
		})
	}
}