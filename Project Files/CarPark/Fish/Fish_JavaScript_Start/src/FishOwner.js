class FishOwner {
	constructor  (newId, newFirstName, newLastName, newBirthDate, theAquarium) {
		this.id = newId
		this.firstName = newFirstName
		this.lastName = newLastName
		this.birthDate = newBirthDate
		this.myAquarium = theAquarium
		this.allMyFishes = []
	}

	toString  () {
		return this.id + ">" + this.firstName + ", " + this.lastName + ". " + "<"
	}

	addFish (newCost, newColor, newBreed, newGender) {
		var newFish = new Fish(this, newCost, newColor, newBreed, newGender)
		this.allMyFishes.push(newFish)
	}

	sortFishes () {
		this.allMyFishes.sort(function (a, b) {
			if (a.breed !== b.breed) {
				return a.breed > b.breed
			}
			return b.cost - a.cost
		})
	}

		// create hasTwoFishes here

	getFishes () {
		var aFish, out
		this.sortFishes()
		out = ''
		for (aFish of this.allMyFishes) {
			out += aFish + '\n'
		}
		return out
	}
}