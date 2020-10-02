class Hospital {
	constructor () {
		this.allMyDoctors = []
	}

	addDoctor (newId, newFirstName, newLastName, newOffice, newFees) {
		var newDoctor = new Doctor(newId, newFirstName, newLastName, newOffice, newFees, this)
		this.allMyDoctors.push(newDoctor)
	}

	findDoctor (targetOwnerId) {
		return this.allMyDoctors.find(aDoctor => aDoctor.id === targetOwnerId)
	}

	sortDoctors () {
		this.allMyDoctors.sort(function (a, b) {
			return a.id - b.id
		})
	}
  
  getDoctors () {
    let result = ''
    this.sortDoctors()
    for (let aDoctor of this.allMyDoctors) {
      result += aDoctor + '\n'
    }
    return result
  }
  
  getBillablePatients () {
    let result = ''
    this.sortDoctors()
    for (let aDoctor of this.allMyDoctors) {
      result += aDoctor + '\n'
      result += aDoctor.getBillablePatients()
    }
    
    return result
  }
}