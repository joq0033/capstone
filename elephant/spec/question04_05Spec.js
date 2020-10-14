/* global describe beforeEach  it expect Controller Elephant */
describe('Question Four and Question Five', () => {
  describe('Elephant', () => {
    let elephant
    beforeEach(() => {
      elephant = new Elephant()
    })

    it('should have a .myElephantOwner reference', () => {
      expect(elephant.hasOwnProperty('myElephantOwner')).toBeTruthy()
    })

    it('should have a .height property', () => {
      expect(elephant.hasOwnProperty('height')).toBeTruthy()
    })

    it('should have a .color property', () => {
      expect(elephant.hasOwnProperty('color')).toBeTruthy()
    })

    it('should have a .species property', () => {
      expect(elephant.hasOwnProperty('species')).toBeTruthy()
    })

    it('should have a .gender property', () => {
      expect(elephant.hasOwnProperty('gender')).toBeTruthy()
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
      expect(theElephantOwner.allMyElephants.length).toBe(2)
    })

    it('ElephantOwner ATR should have 1 Elephant', () => {
      const theElephantOwner = theSanctuary.findElephantOwner('ATR')
      expect(theElephantOwner.allMyElephants.length).toBe(1)
    })

    it('ElephantOwner RWM should have 1 Elephant', () => {
      const theElephantOwner = theSanctuary.findElephantOwner('RWM')
      expect(theElephantOwner.allMyElephants.length).toBe(1)
    })

    it('ElephantOwner TPL should have 1 Elephant', () => {
      const theElephantOwner = theSanctuary.findElephantOwner('TPL')
      expect(theElephantOwner.allMyElephants.length).toBe(1)
    })

    it('should correctly set elephant details', () => {
      let anElephant

      let theElephantOwner

      theElephantOwner = theSanctuary.findElephantOwner('JOT')
      anElephant = theElephantOwner.sortElephants()

      anElephant = theElephantOwner.allMyElephants[0]
      expect(anElephant.myElephantOwner).toEqual(theElephantOwner)
      expect(anElephant.height).toBe(12)
      expect(anElephant.color).toBe('Black')
      expect(anElephant.species).toBe('African bush')
      expect(anElephant.gender).toBe('M')

      anElephant = theElephantOwner.allMyElephants[1]
      expect(anElephant.myElephantOwner).toEqual(theElephantOwner)
      expect(anElephant.height).toBe(11)
      expect(anElephant.color).toBe('Greyish Brown')
      expect(anElephant.species).toBe('Asian')
      expect(anElephant.gender).toBe('M')

      theElephantOwner = theSanctuary.findElephantOwner('ATR')
      anElephant = theElephantOwner.sortElephants()

      anElephant = theElephantOwner.allMyElephants[0]
      expect(anElephant.myElephantOwner).toEqual(theElephantOwner)
      expect(anElephant.height).toBe(7)
      expect(anElephant.color).toBe('Grey')
      expect(anElephant.species).toBe('Asian')
      expect(anElephant.gender).toBe('F')

      theElephantOwner = theSanctuary.findElephantOwner('RWM')
      anElephant = theElephantOwner.sortElephants()

      anElephant = theElephantOwner.allMyElephants[0]
      expect(anElephant.myElephantOwner).toEqual(theElephantOwner)
      expect(anElephant.height).toBe(10)
      expect(anElephant.color).toBe('Brown')
      expect(anElephant.species).toBe('African bush')
      expect(anElephant.gender).toBe('F')

      theElephantOwner = theSanctuary.findElephantOwner('TPL')
      anElephant = theElephantOwner.sortElephants()

      anElephant = theElephantOwner.allMyElephants[0]
      expect(anElephant.myElephantOwner).toEqual(theElephantOwner)
      expect(anElephant.height).toBe(13)
      expect(anElephant.color).toBe('Grey')
      expect(anElephant.species).toBe('African forest')
      expect(anElephant.gender).toBe('M')
    })
  })
})
