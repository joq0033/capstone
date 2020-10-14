/* global describeBeforeEach  it expect Controller  */
describe('Question Two', () => {
  describe('adding the four ElephantOwners', () => {
    let theSanctuary
    beforeEach(() => {
      theSanctuary = Controller.setup()
    })

    it('should have added 4 ElephantOwners', () => {
      expect(theSanctuary.allMyElephantOwners.length).to.equal(4)
    })

    it('should have correctly set details for each ElephantOwner', () => {
      theSanctuary.sortElephantOwners
      let anElephantOwner = theSanctuary.allMyElephantOwners[1]
      expect(anElephantOwner).not.to.be.undefined
      expect(anElephantOwner.id).to.equal('ATR')
      expect(anElephantOwner.firstName).to.equal('Adam')
      expect(anElephantOwner.lastName).to.equal('Taylor')
      expect(anElephantOwner.birthDate).to.deep.equal(new Date(1980, 8, 7))

      anElephantOwner = theSanctuary.allMyElephantOwners[0]
      expect(anElephantOwner).not.to.be.undefined
      expect(anElephantOwner.id).to.equal('JOT')
      expect(anElephantOwner.firstName).to.equal('Joby')
      expect(anElephantOwner.lastName).to.equal('Thomas')
      expect(anElephantOwner.birthDate).to.deep.equal(new Date(1990, 3, 9))

      anElephantOwner = theSanctuary.allMyElephantOwners[2]
      expect(anElephantOwner).not.to.be.undefined
      expect(anElephantOwner.id).to.equal('RWM')
      expect(anElephantOwner.firstName).to.equal('Robert')
      expect(anElephantOwner.lastName).to.equal('William')
      expect(anElephantOwner.birthDate).to.deep.equal(new Date(1986, 6, 31))

      anElephantOwner = theSanctuary.allMyElephantOwners[3]
      expect(anElephantOwner).not.to.be.undefined
      expect(anElephantOwner.id).to.equal('TPL')
      expect(anElephantOwner.firstName).to.equal('Tania')
      expect(anElephantOwner.lastName).to.equal('Paul')
      expect(anElephantOwner.birthDate).to.deep.equal(new Date(1995, 7, 2))
    })
  })
})
