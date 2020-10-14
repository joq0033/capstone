/* global describeBeforeEach  it expect Controller  */
describe('Question Two', () => {
  describe('adding the four ElephantOwners', () => {
    let theSanctuary
    beforeEach(() => {
      theSanctuary = Controller.setup()
    })

    it('should have added 4 ElephantOwners', () => {
      expect(theSanctuary.allMyElephantOwners.length).toBe(4)
    })

    it('should have correctly set details for each ElephantOwner', () => {
      let anElephantOwner
      anElephantOwner = theSanctuary.sortElephantOwners()

      anElephantOwner = theSanctuary.allMyElephantOwners[0]
      expect(anElephantOwner).toBeDefined()
      expect(anElephantOwner.id).toBe('ATR')
      expect(anElephantOwner.firstName).toBe('Adam')
      expect(anElephantOwner.lastName).toBe('Taylor')
      expect(anElephantOwner.birthDate).toEqual(new Date(1980, 8, 7))

      anElephantOwner = theSanctuary.allMyElephantOwners[1]
      expect(anElephantOwner).toBeDefined()
      expect(anElephantOwner.id).toBe('JOT')
      expect(anElephantOwner.firstName).toBe('Joby')
      expect(anElephantOwner.lastName).toBe('Thomas')
      expect(anElephantOwner.birthDate).toEqual(new Date(1990, 3, 9))

      anElephantOwner = theSanctuary.allMyElephantOwners[2]
      expect(anElephantOwner).toBeDefined()
      expect(anElephantOwner.id).toBe('RWM')
      expect(anElephantOwner.firstName).toBe('Robert')
      expect(anElephantOwner.lastName).toBe('William')
      expect(anElephantOwner.birthDate).toEqual(new Date(1986, 6, 31))

      anElephantOwner = theSanctuary.allMyElephantOwners[3]
      expect(anElephantOwner).toBeDefined()
      expect(anElephantOwner.id).toBe('TPL')
      expect(anElephantOwner.firstName).toBe('Tania')
      expect(anElephantOwner.lastName).toBe('Paul')
      expect(anElephantOwner.birthDate).toEqual(new Date(1995, 7, 2))
    })
  })
})
