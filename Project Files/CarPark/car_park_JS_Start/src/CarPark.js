/* global Zone */
class CarPark { // eslint-disable-line no-unused-vars
  constructor () {
    this.allMyZones = []
  }

  addZone (newId, newLocation) {
    let newZone = new Zone(newId, newLocation)
    this.allMyZones.push(newZone)
  }

  findZone (targetId) {
    return this.allMyZones.find(aZone => aZone.id === targetId)
  }

  sortZones () {
    this.allMyZones.sort(function (a, b) {
      return a.id - b.id
    })
  }
  getZones () {
	// add code here
    }
    return result
  }
  getTemps () {
    let result = ''
    this.sortZones()
    for (let aZone of this.allMyZones) {
      result += aZone.getTemps() 
    }
    return result
  }
}
