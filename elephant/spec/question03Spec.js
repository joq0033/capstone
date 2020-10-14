/* global describe beforeEach  it expect Controller Sanctuary */
describe('Question Three', () => {
  describe('Sanctuary.getElephantOwners function', () => {
    let theSanctuary
    beforeEach(() => {
      theSanctuary = Controller.setup()
    })

    it('should return a string', () => {
      expect(typeof theSanctuary.getElephantOwners()).toBe('string')
    })

    it('should NOT be hard coded', () => {
      theSanctuary = new Sanctuary()
      expect(theSanctuary.getElephantOwners()).toBe('')
    })

        // 'Adam, Taylor. [ATR]\nJoby, Thomas. [JOT]\nRobert, William. [RWM]\nTania, Paul. [TPL]\n')

    describe('Should return correctly formatted data', () => {
      describe('Should start with the first names but be sorted in ID order', () => {
        it('First Adam then Joby then Robert then Tania', () => {
          let output = theSanctuary.getElephantOwners()
          expect(output).toMatch(/^Adam.*\nJoby.*\nRobert.*\nTania.*\n/)
        })
      })
      describe('Puntuation after each first name', () => {
        it('should be a comma followed by a single space', () => {
          let output = theSanctuary.getElephantOwners()
          expect(output).toMatch(/[,\s)]/)
        })
      })
      describe('last names should also be in ID order', () => {
        it('First character of LastName should be in [TWP]', () => {
          let anElephantOwner
          anElephantOwner = theSanctuary.getElephantOwners()
          anElephantOwner = theSanctuary.allMyElephantOwners[0, 1, 2, 3]
          expect(anElephantOwner.lastName).toMatch(/^[TWP](.{3,6})/)
        })
      })
      describe('Puntuation after the last names ', () => {
        it('should be a dot and then a space', () => {
          expect(theSanctuary.getElephantOwners()).toMatch(/[\.\s]/)
        })
      })
      describe('the IDs', () => {
        it('should have three character enclosed in the square brackets ie []', () => {
          expect(theSanctuary.getElephantOwners()).toMatch(/\[\w{3}\]/)
        })
      })
      describe('end of each owner\'s details', () => {
        it('should end with the newline character', () => {
          
          expect(theSanctuary.getElephantOwners()).toMatch(/\n/)
        })
      })
    })
  })
})
