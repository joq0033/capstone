class Doctor {
	constructor (newId, newFirstName, newLastName, newOffice, newFees, theHospital) {
		this.id = newId
		this.firstName = newFirstName
		this.lastName = newLastName
		this.office = newOffice
		this.fees = newFees
		this.myHospital = theHospital
		this.allMyPatients = []
	}

	sortPatients () {
		this.allMyPatients.sort(function (a, b) {
			return a.id - b.id
		})
	}
}