/* global describe beforeEach  it expect Controller Sanctuary */
describe('Question Seven', () => {
  'use strict'
  describe('The getThoseWithTwoElephants function in Sanctuary', () => {
    var theSanctuary  = Controller.setup()
    beforeEach(() => {
      theSanctuary = Controller.setup()
    })

    it('should return a string', () => {
      expect(typeof theSanctuary.getThoseWithTwoElephants()).to.equal('string')
    })

    it('should NOT be hard coded', () => {
      theSanctuary = new Sanctuary()
      expect(theSanctuary.getThoseWithTwoElephants()).to.equal('')
    })

    describe('Should return correctly formatted data', () => {
    // Joby, Thomas. <JOT>\n    Black African bush (M) has 12ft\n    Greyish Brown Asian (M) has 11ft\n

      describe('The firstName', () => {
        it('should be Joby', () => {
          //expect(theSanctuary.getThoseWithTwoElephants()).to.match(/(^[J][^A-Z]{3})/)
          let output = theSanctuary.getThoseWithTwoElephants()
          //console.log(output)
          expect(output).to.match(/(^[J][^A-Z]{3})/)
        })
      })
      
      describe('The punctuation after the first name', () => {
        it(' should be a comma and then a space', () => {
          expect(theSanctuary.getThoseWithTwoElephants()).to.match(/[,\s)]/)
        })
      })
      
      describe('The second name', () => {
        it('should be Thomas', () => {
          let anElephantOwner
          anElephantOwner = theSanctuary.getThoseWithTwoElephants()
          anElephantOwner = theSanctuary.allMyElephantOwners[1]
          expect(anElephantOwner.lastName).to.match(/(^[T][^A-Z]{5})/)
        })
      })
      
      describe('The punctuation after the second name', () => {
        it('should be a dot followed by a space', () => {
          expect(theSanctuary.getThoseWithTwoElephants()).to.match(/[\.\s]/)
        })
      })
      
      describe('The id ', () => {
        it('should have JOT enclosed in [] ie [JOT]', () => {
          expect(theSanctuary.getThoseWithTwoElephants()).to.match(/\[\w{3}\]/)
        })
      })
      
      describe('After the owner\'s name', () => {
        it('should be a newline', () => {
          expect(theSanctuary.getThoseWithTwoElephants()).to.match(/\n/)
        })
      })
      
      describe('Each Elephant\'s details', () => {
        it('should start with a tab  \\t character', () => {
          expect(theSanctuary.getThoseWithTwoElephants()).to.match(/\t/)
        })
      })
      
      describe('Joby\'s first elephant', () => {
        let joby = theSanctuary.findElephantOwner('JOT')
        let theElephant = joby.allMyElephants[1]
        let output = theElephant.toString()
        it('should be the Black African bush ', () => {
          expect(theSanctuary.getThoseWithTwoElephants()).to.match(/(Black\sAfrican\sbush)/)
        })
      
        it('and be a Male', () => {
          expect(theSanctuary.getThoseWithTwoElephants()).to.match(/(\s)+(\(\w\))+(\s)/)
        })
        it('with a "height of 12ft"', () => {
          expect(theSanctuary.getThoseWithTwoElephants()).to.match(/height of 12ft/)
        })
       
      })
      
      describe('Joby\'s second elephant details', () => {
        let joby = theSanctuary.findElephantOwner('JOT')
        joby.sortElephants()
        let theElephant = joby.allMyElephants[0]
        console.log(theElephant)
        let output = theElephant.toString()
        it('should start with a tab', () => {
          expect(output).to.match(/^\t/)
        })
        it('should be a Greyish Brown Asian', () => {
          expect(output).to.match(/Greyish\sBrown\sAsian/)
        })
        it('and a Male', () => {
          expect(output).to.match(/(\s)+(\(\w\))+(\s)/)
        })
      
        it('with a height of 11ft', () => {
          expect(output).to.match(/height of 11ft/)
        })
      })
    })  
  })
})
