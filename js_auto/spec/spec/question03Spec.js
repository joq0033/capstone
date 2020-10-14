/*global describe beforeEach Controller it expect Hospital Doctor Patient*/

describe('Question Three', () => {
  describe('Hospital.getDoctors function', () => {
    let theHospital
    beforeEach(() => {
      theHospital = Controller.setup()
    })

    it('should exist', () => {
      expect(theHospital.getDoctors).toBeDefined()
    })
	
    it('should return a string', () => {
      expect(typeof theHospital.getDoctors()).toBe('string')
    })

    it('should NOT be hard coded', () => {
      theHospital = new Hospital()
      expect(theHospital.getDoctors()).toBe('')
    })

    // '11 - Xu Jian.\n12 - Kumar Santosh.\n13 - John Emily.\n'
    describe('Should return correctly formatted data', () => {
      describe('the hospital information', () => {
        it('should start with two id digit eg 11', () => {
          expect(theHospital.getDoctors()).toMatch(/^\d\d/)
        })
      })
      describe('Puntuation after each ID', () => {
        it('should be a space followed by a  minus sign and then another space', () => {
          let output = theHospital.getDoctors()
          expect(output).toMatch(/^\d\d - /)
        })
      })
      describe('names in order should follow the id', () => {
        it('Xu Jian then Kumar Santosh then John Emily', () => {
          let output = theHospital.getDoctors()
          expect(output).toMatch(/(Xu Jian)| (Kumar Santosh)| (John Emily)/)
        })
      })
	  describe('Puntuation after the name should be a DOT (.) followed by a new line', () => {
          it('Should end with the newline', () => {
            let output = theHospital.getDoctors()
            expect(output).toMatch(/(y.\n)| (t\.\n) | (l.\n)/)
          })
        })
    })
  })
})
