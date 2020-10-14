class  Client {
	constructor (theZone, newId, newPersonalName, newFamilyName, newBirthday, newIsPermanent) {
    this.myZone = theZone
    this.id = newId
    this.personalName = newPersonalName
    this.familyName = newFamilyName
    this.birthday = newBirthday
    this.isPermanent = newIsPermanent
	}
  isTemp () {
    return ! this.isPermanent
  }
  toString () {
    return this.personalName + ' '  + this.familyName
  }
}