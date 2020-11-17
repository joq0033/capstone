/* global describe beforeEach  it expect Controller Elephant */
describe('Question Four and Question Five', () => {
  'use strict'
  describe('Elephant', () => {
    let elephant
    beforeEach(() => {
      elephant = new Elephant()
    })

    it('should have a .myElephantOwner reference', () => {
      expect(elephant.hasOwnProperty('myElephantOwner')).to.be.ok
    })

    it('should have a .height property', () => {
      expect(elephant.hasOwnProperty('height')).to.be.ok
    })

    it('should have a .color property', () => {
      expect(elephant.hasOwnProperty('color')).to.be.ok
    })

    it('should have a .species property', () => {
      expect(elephant.hasOwnProperty('species')).to.be.ok
    })

    it('should have a .gender property', () => {
      expect(elephant.hasOwnProperty('gender')).to.be.ok
    })
  })

  describe('write a ElephantOwner.addElephant function to add the Elephants', () => {
    let theSanctuary
    beforeEach(() => {
      theSanctuary = Controller.setup()
    })

  /* HERE tests for the .addElephant method in ElephantOwner  
  it( 'should be an .addElephant method in ElephantOwner', () => {
    
  })
  
  it('should take 4 parameters',  () => {
    
  })
  
  it(should have as a first paramater
  
  */
  
    
    
    it('ElephantOwner JOT should have 2 Elephants', () => {
      const theElephantOwner = theSanctuary.findElephantOwner('JOT')
      expect(theElephantOwner.allMyElephants.length).to.equal(2)
    })

    it('ElephantOwner ATR should have 1 Elephant', () => {
      const theElephantOwner = theSanctuary.findElephantOwner('ATR')
      expect(theElephantOwner.allMyElephants.length).to.equal(1)
    })

    it('ElephantOwner RWM should have 1 Elephant', () => {
      const theElephantOwner = theSanctuary.findElephantOwner('RWM')
      expect(theElephantOwner.allMyElephants.length).to.equal(1)
    })

    it('ElephantOwner TPL should have 1 Elephant', () => {
      const theElephantOwner = theSanctuary.findElephantOwner('TPL')
      expect(theElephantOwner.allMyElephants.length).to.equal(1)
    })

    it('should correctly set elephant details', () => {
      let anElephant

      let theElephantOwner

      theElephantOwner = theSanctuary.findElephantOwner('JOT')
      anElephant = theElephantOwner.sortElephants()

      anElephant = theElephantOwner.allMyElephants[1]
      expect(anElephant.myElephantOwner).to.deep.equal(theElephantOwner)
      expect(anElephant.height).to.equal(12)
      expect(anElephant.color).to.equal('Black')
      expect(anElephant.species).to.equal('African bush')
      expect(anElephant.gender).to.equal('M')

      anElephant = theElephantOwner.allMyElephants[0]
      expect(anElephant.myElephantOwner).to.deep.equal(theElephantOwner)
      expect(anElephant.height).to.equal(11)
      expect(anElephant.color).to.equal('Greyish Brown')
      expect(anElephant.species).to.equal('Asian')
      expect(anElephant.gender).to.equal('M')

      theElephantOwner = theSanctuary.findElephantOwner('ATR')
      anElephant = theElephantOwner.sortElephants()

      anElephant = theElephantOwner.allMyElephants[0]
      expect(anElephant.myElephantOwner).to.deep.equal(theElephantOwner)
      expect(anElephant.height).to.equal(7)
      expect(anElephant.color).to.equal('Grey')
      expect(anElephant.species).to.equal('Asian')
      expect(anElephant.gender).to.equal('F')

      theElephantOwner = theSanctuary.findElephantOwner('RWM')
      anElephant = theElephantOwner.sortElephants()

      anElephant = theElephantOwner.allMyElephants[0]
      expect(anElephant.myElephantOwner).to.deep.equal(theElephantOwner)
      expect(anElephant.height).to.equal(10)
      expect(anElephant.color).to.equal('Brown')
      expect(anElephant.species).to.equal('African bush')
      expect(anElephant.gender).to.equal('F')

      theElephantOwner = theSanctuary.findElephantOwner('TPL')
      anElephant = theElephantOwner.sortElephants()

      anElephant = theElephantOwner.allMyElephants[0]
      expect(anElephant.myElephantOwner).to.deep.equal(theElephantOwner)
      expect(anElephant.height).to.equal(13)
      expect(anElephant.color).to.equal('Grey')
      expect(anElephant.species).to.equal('African forest')
      expect(anElephant.gender).to.equal('M')
    })
  })
})
