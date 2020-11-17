describe('Question Three', () => {
  'use strict'
  describe('the CarPark.getZones function', () => {
    let theCarPark
    beforeEach(() => {
      theCarPark = Controller.setup()
    })

    it('should exist', () => {
      expect(theCarPark.getZones).not.be.undefined
    })
	
    it('should return a string', () => {
      expect(typeof theCarPark.getZones()).to.equal('string')
    })

    it('should NOT be hard coded', () => {
      theCarPark = new CarPark()
      expect(theCarPark.getZones()).to.equal('')
    })

    // '1. - Central City.\n2. - Madras Street.\n3. - Cashel Mall.\n'
    describe('Should return correctly formatted data', () => {
      describe('the zone information', () => {
        it('should start with id digit eg 1', () => {
          expect(theCarPark.getZones()).to.match(/^1.*\n2.*\n3.*\n/)
        })
      })

      describe('Puntuation after each ID', () => {
        it('should be a dot followed by a single space a minus sign and then another space', () => {
          let output = theCarPark.getZones()
          expect(output).to.match(/^\d. - /)
        })
      })
      describe('Zone names in order should follow the id', () => {
        it('Central City then Madras Street then Cashel Mall', () => {
          let output = theCarPark.getZones()
          //console.log(output.match(/(Central City)| (Madras Street)| (Cashel Mall)/))
          expect(output).to.match(/(Central City)| (Madras Street)| (Cashel Mall)/)
        })
      })
	  describe('Puntuation after the Zone name should be a DOT (.) followed by a new line', () => {
          it('Should end with the newline', () => {
            let output = theCarPark.getZones()
            expect(output).to.match(/(y.\n)| (t\.\n) | (l.\n)/)
          })
        })
    })
  })
})
