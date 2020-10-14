class Elephant {
  constructor (theElephantOwner, newHeight, newColor, newSpecies, newGender) {
    this.myElephantOwner = theElephantOwner
    this.height = newHeight
    this.color = newColor
    this.species = newSpecies
    this.gender = newGender
  }
  toString () {
    return '\ta ' + this.color + ' ' + this.species 
           + ' (' + this.gender + ') ' + 'with a height of ' + this.height + 'ft'
  }
}