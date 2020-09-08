class Fish {
	constructor (theFishOwner, newCost, newColor, newBreed, newGender) {
		this.myFishOwner = theFishOwner
		this.cost = newCost
		this.color = newColor
		this.breed = newBreed
		this.gender = newGender
	}

	toString () {
		let result = ''
		result +=  "    " + this.color + " " + this.breed + " (" + this.gender + ") worth $" + this.cost.toString()
		return result
	}
}