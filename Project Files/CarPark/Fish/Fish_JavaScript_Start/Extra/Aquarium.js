class Aquarium {
	constructor () {
		this.allMyFishOwners = []
	}

	addFishOwner  (newId, newFirstName, newLastName, newBirthDate) {
		var newFishOwner = new FishOwner(newId, newFirstName, newLastName, newBirthDate, this)
		this.allMyFishOwners.push(newFishOwner)
	}

	findFishOwner (targetOwnerId) {
		var foundOwner, aOwner
		foundOwner = null
		for (aOwner of this.allMyFishOwners) {
			if (aOwner.id === targetOwnerId) {
				foundOwner = aOwner
				break
			}
		}
		return foundOwner
	}

	sortFishOwners () {
		this.allMyFishOwners.sort(function (a, b) {
			return a.id > b.id
		})
	}

	getFishOwners () {
		var out, aFishOwner;
		this.sortFishOwners()
		out = ''
		for (aFishOwner of this.allMyFishOwners) {
			out += aFishOwner + '\n'
		}
		return out
	}

	getThoseWithTwoFishes  () {
		var out, aFishOwner;
		this.sortFishOwners()
		out = ''
		for (aFishOwner of this.allMyFishOwners) {
			if (aFishOwner.hasTwoFishes()) {
				out += aFishOwner + '\n'
				out += aFishOwner.getFishes()
			}
		}
		return out
	}
}