/* global  ElephantOwner */
class Sanctuary { // eslint-disable-line no-unused-vars
  constructor () {
    this.allMyElephantOwners = []
  }
  addElephantOwner (newId, newFirstName, newLastName, newBirthDate) {
    let newElephantOwner = new ElephantOwner(newId, newFirstName, newLastName, newBirthDate, this)
    this.allMyElephantOwners.push(newElephantOwner)
  }
  findElephantOwner (targetOwnerId) {
    let foundOwner = null
    for (let aOwner of this.allMyElephantOwners) {
      if (aOwner.id === targetOwnerId) {
        foundOwner = aOwner
        break
      }
    }
    return foundOwner
  }
  sortElephantOwners () {
    this.allMyElephantOwners.sort(function (a, b) {
      return a.id > b.id
    })
  }
  getElephantOwners () {
    let result = ''
    this.sortElephantOwners()
    for (let anElephantOwner of this.allMyElephantOwners) {
      result += anElephantOwner + '\n'
    }
    return result
  }
  getThoseWithTwoElephants() {
  let result = ''
  for (let anElephantOwner of this.allMyElephantOwners) {
      if (anElephantOwner.hasTwoElephants()) {
        result += anElephantOwner + '\n'
        result += anElephantOwner.getAllElephants()
      }
    }
   return result

  }
}
