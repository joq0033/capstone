/* globals describe beforeEach  it expect Sanctuary ElephantOwner  */
describe('Basic Check For Original Source Code', () => {
  describe('Sanctuary', () => {
    let theSanctuary
    beforeEach(() => {
      theSanctuary = new Sanctuary()
    })

    describe('the allMyElephantOwners property', () => {
      it('should have an .allMyElephantOwners property', () => {
        expect(theSanctuary.hasOwnProperty('allMyElephantOwners')).toBeTruthy()
      })
      it('should reference an array', () => {
        expect(Array.isArray(theSanctuary.allMyElephantOwners)).toBeTruthy()
      })
    })

    it('should have an .addElephantOwner function', () => {
      expect(typeof theSanctuary.addElephantOwner).toBe('function')
    })

    it('should have a .findElephantOwner function', () => {
      expect(typeof theSanctuary.findElephantOwner).toBe('function')
    })

    it('should have a .sortElephantOwners function', () => {
      expect(typeof theSanctuary.sortElephantOwners).toBe('function')
    })
  })

  describe('ElephantOwner', () => {
    let elephantOwner
    beforeEach(() => {
      elephantOwner = new ElephantOwner()
    })

    it('should have an .id property', () => {
      expect(elephantOwner.hasOwnProperty('id')).toBeTruthy()
    })

    it('should have a .firstName property', () => {
      expect(elephantOwner.hasOwnProperty('firstName')).toBeTruthy()
    })

    it('should have a .lastName property', () => {
      expect(elephantOwner.hasOwnProperty('lastName')).toBeTruthy()
    })

    it('should have a .birthDate property', () => {
      expect(elephantOwner.hasOwnProperty('birthDate')).toBeTruthy()
    })

    it('should have a .mySanctuary reference', () => {
      expect(elephantOwner.hasOwnProperty('mySanctuary')).toBeTruthy()
    })

    describe('the allMyElephants property', () => {
      it('should have an .allMyElephants reference', () => {
        expect(elephantOwner.hasOwnProperty('allMyElephants')).toBeTruthy()
      })

      it('should reference an array', () => {
        expect(Array.isArray(elephantOwner.allMyElephants)).toBeTruthy()
      })
    })

    it('should have a .sortElephants function', () => {
      expect(typeof elephantOwner.sortElephants).toBe('function')
    })
  })
})
