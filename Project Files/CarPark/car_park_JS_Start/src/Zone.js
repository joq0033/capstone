class Zone { // eslint-disable-line no-unused-vars
	constructor  (newId, newWhere) {
		this.id = newId
		this.where = newWhere
		this.allMyClients = []
	}
  toString () {
  return `${this.id}. - ${this.where}.`
  }
  addClient (newId, newPersonalName, newFamilyName, newBirthday, newIsPermanent) {
    let aNewClient = new Client (this, newId, newPersonalName, newFamilyName, newBirthday, newIsPermanent)
    this.allMyClients.push(aNewClient)
  }
  getTemps () {
    let result = ''
    for (let aClient of this.allMyClients) {
      if (aClient.isTemp()){
          result += aClient + '\n'
      }
    }
    return result
    
  }
}
