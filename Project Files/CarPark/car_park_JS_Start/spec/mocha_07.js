/* global describe beforeEach  it expect Controller CarPark */
describe('Question Seven', () => {

  describe('The toString method of the Client class', () => {
    let aClient = new Client('personal_name', 'family_name')

    it('should return a string', () => {
      expect(typeof aClient.toString()).to.equal('string')
    })

    it('should NOT be hard coded', () => {
      let aClient = new Client('zone', 'id', 'personal_name', 'family_name', 'birthday', 'isPernament')
      expect(aClient.toString()).to.equal('personal_name family_name')
    })
  })    

  describe('The getTemps function in the CarPark class', () => {
    let theCarPark
    beforeEach( () => {
      theCarPark = Controller.setup()
    })

    it('should be defined', () => {
      expect(theCarPark.getTemps).not.to.be.undefined
    })
    it('should return a string', () => {
      expect(theCarPark.getTemps).not.to.be.undefined
    })

    it('Should NOT be hard coded', () => {
      theCarPark = new CarPark()
      expect(theCarPark.getTemps()).to.equal('')
    })
    /* 
    'Maya Thorne\nAnna Kumar\nJillian Fleming\n' 
    */
    it('should have the correct output', () => {
      expect(theCarPark.getTemps()).to.equal('Maya Thorne\nAnna Kumar\nJillian Fleming\n')
    })
  })
    
})
