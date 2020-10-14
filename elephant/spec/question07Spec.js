/* global describe beforeEach  it expect Controller Sanctuary */
describe('Question Seven', () => {
  
  describe('The getThoseWithTwoElephants function in Sanctuary', () => {
    var theSanctuary  = Controller.setup()
    beforeEach(() => {
      theSanctuary = Controller.setup()
    })

    it('should return a string', () => {
      expect(typeof theSanctuary.getThoseWithTwoElephants()).toBe('string')
    })

    it('should NOT be hard coded', () => {
      theSanctuary = new Sanctuary()
      expect(theSanctuary.getThoseWithTwoElephants()).toBe('')
    })

    describe('Should return correctly formatted data', () => {
    // Joby, Thomas. <JOT>\n    Black African bush (M) has 12ft\n    Greyish Brown Asian (M) has 11ft\n

      describe('The firstName', () => {
        it('should be Joby', () => {
          //expect(theSanctuary.getThoseWithTwoElephants()).toMatch(/(^[J][^A-Z]{3})/)
          let output = theSanctuary.getThoseWithTwoElephants()
          //console.log(output)
          expect(output).toMatch(/(^[J][^A-Z]{3})/)
        })
      })
      
      describe('The punctuation after the first name', () => {
        it(' should be a comma and then a space', () => {
          expect(theSanctuary.getThoseWithTwoElephants()).toMatch(/[,\s)]/)
        })
      })
      
      describe('The second name', () => {
        it('should be Thomas', () => {
          let anElephantOwner
          anElephantOwner = theSanctuary.getThoseWithTwoElephants()
          anElephantOwner = theSanctuary.allMyElephantOwners[1]
          expect(anElephantOwner.lastName).toMatch(/(^[T][^A-Z]{5})/)
        })
      })
      
      describe('The punctuation after the second name', () => {
        it('should be a dot followed by a space', () => {
          expect(theSanctuary.getThoseWithTwoElephants()).toMatch(/[\.\s]/)
        })
      })
      
      describe('The id ', () => {
        it('should have JOT enclosed in [] ie [JOT]', () => {
          expect(theSanctuary.getThoseWithTwoElephants()).toMatch(/\[\w{3}\]/)
        })
      })
      
      describe('After the owner\'s name', () => {
        it('should be a newline', () => {
          expect(theSanctuary.getThoseWithTwoElephants()).toMatch(/\n/)
        })
      })
      
      describe('Each Elephant\'s details', () => {
        it('should start with a tab  \\t character', () => {
          expect(theSanctuary.getThoseWithTwoElephants()).toMatch(/\t/)
        })
      })
      
      describe('Joby\'s first elephant', () => {
        let joby = theSanctuary.findElephantOwner('JOT')
        let theElephant = joby.allMyElephants[0]
        let output = theElephant.toString()
        it('should be the Black African bush ', () => {
          expect(theSanctuary.getThoseWithTwoElephants()).toMatch(/(Black\sAfrican\sbush)/)
        })
      
        it('and be a Male', () => {
          expect(theSanctuary.getThoseWithTwoElephants()).toMatch(/(\s)+(\(\w\))+(\s)/)
        })
        it('with a "height of 12ft"', () => {
          expect(theSanctuary.getThoseWithTwoElephants()).toMatch(/height of 12ft/)
        })
       
      })
      
      describe('Joby\'s second elephant details', () => {
        let joby = theSanctuary.findElephantOwner('JOT')
        joby.sortElephants()
        let theElephant = joby.allMyElephants[1]
        console.log(theElephant)
        let output = theElephant.toString()
        it('should start with a tab', () => {
          expect(output).toMatch(/^\t/)
        })
        it('should be a Greyish Brown Asian', () => {
          expect(output).toMatch(/Greyish\sBrown\sAsian/)
        })
        it('and a Male', () => {
          expect(output).toMatch(/(\s)+(\(\w\))+(\s)/)
        })
      
        it('with a height of 11ft', () => {
          expect(output).toMatch(/height of 11ft/)
        })
      })
    })  
  })
})
