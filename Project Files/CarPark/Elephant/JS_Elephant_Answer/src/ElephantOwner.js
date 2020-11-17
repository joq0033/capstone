class ElephantOwner {
  constructor (newId, newFirstName, newLastName, newBirthDate, theSanctuary) {
    this.id = newId
    this.firstName = newFirstName
    this.lastName = newLastName
    this.birthDate = newBirthDate
    this.mySanctuary = theSanctuary
    this.allMyElephants = []
  }
  sortElephants () {
    this.allMyElephants.sort(function (a, b) {
      if (a.species !== b.species) {
        return a.species > b.species
      }
      return b.height - a.height
    })
  } 
  toString () {
    return this.firstName + ', ' + this.lastName + '. [' + this.id + ']'
  }
  addElephant(newColor, newSpecies, newGender, newHeight) {
    let newElephant = new Elephant( this, newHeight, newColor, newSpecies, newGender)
    this.allMyElephants.push(newElephant)
  }
  hasTwoElephants() {
    return this.allMyElephants.length === 2
  }
  getAllElephants() {
    let result = ''
    this.sortElephants()
    for (let anElephant of this.allMyElephants){
      result += anElephant + '\n'
    }
    return result
  }
}
