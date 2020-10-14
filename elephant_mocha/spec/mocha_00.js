/* globals describe beforeEach  it expect Sanctuary ElephantOwner  */
describe('Basic Check For Original Source Code', () => {
  describe('Sanctuary', () => {
    let theSanctuary
    beforeEach(() => {
      theSanctuary = new Sanctuary()
    })

    describe('the allMyElephantOwners property', () => {
      it('should have an .allMyElephantOwners property', () => {
        expect(theSanctuary.hasOwnProperty('allMyElephantOwners')).to.be.ok
      })
	  
      it('should reference an array', () => {
        expect(Array.isArray(theSanctuary.allMyElephantOwners)).to.be.ok
      })
    })

    it('should have an .addElephantOwner function', () => {
      expect(typeof theSanctuary.addElephantOwner).to.equal('function')
    })

    it('should have a .findElephantOwner function', () => {
      expect(typeof theSanctuary.findElephantOwner).to.equal('function')
    })

    it('should have a .sortElephantOwners function', () => {
      expect(typeof theSanctuary.sortElephantOwners).to.equal('function')
    })
  })

  describe('ElephantOwner', () => {
    let elephantOwner
    beforeEach(() => {
      elephantOwner = new ElephantOwner()
    })

    it('should have an .id property', () => {
      expect(elephantOwner.hasOwnProperty('id')).to.be.ok
    })

    it('should have a .firstName property', () => {
      expect(elephantOwner.hasOwnProperty('firstName')).to.be.ok
    })

    it('should have a .lastName property', () => {
      expect(elephantOwner.hasOwnProperty('lastName')).to.be.ok
    })

    it('should have a .birthDate property', () => {
      expect(elephantOwner.hasOwnProperty('birthDate')).to.be.ok
    })

    it('should have a .mySanctuary reference', () => {
      expect(elephantOwner.hasOwnProperty('mySanctuary')).to.be.ok
    })

    describe('the allMyElephants property', () => {
      it('should have an .allMyElephants reference', () => {
        expect(elephantOwner.hasOwnProperty('allMyElephants')).to.be.ok
      })

      it('should reference an array', () => {
        expect(Array.isArray(elephantOwner.allMyElephants)).to.be.ok
      })
    })

    it('should have a .sortElephants function', () => {
      expect(typeof elephantOwner.sortElephants).to.equal('function')
    })
  })
})
