/* global describe beforeEach  it expect ElephantOwner   */
describe('Question Six', () => {
  describe('ElephantOwner.hasTwoElephants function', () => {
    let anElephantOwner
    beforeEach(() => {
      anElephantOwner = new ElephantOwner()
    })

    it('should exist', () => {
      expect(anElephantOwner.hasTwoElephants).toBeDefined()
    })

    it('should return a boolean', () => {
      expect(typeof anElephantOwner.hasTwoElephants()).toBe('boolean')
    })

    it('should return true if the number of Elephant that person owns is equal two.', () => {
      anElephantOwner = new ElephantOwner('tao', null, null, null, null)
      anElephantOwner.addElephant(null, null, null, null)
      anElephantOwner.addElephant(null, null, null, null)
      expect(anElephantOwner.hasTwoElephants()).toBe(true)
    })

    it('should return false if the number of Elephants that person owns is less than two.', () => {
      anElephantOwner = new ElephantOwner('tao', null, null, null, null)
      anElephantOwner.addElephant(null, null, null, null)
      expect(anElephantOwner.hasTwoElephants()).toBe(false)
    })

    it('should return false if the number of Elephants that person owns is more than two.', () => {
      anElephantOwner = new ElephantOwner('tao', null, null, null, null)
      anElephantOwner.addElephant(null, null, null, null)
      anElephantOwner.addElephant(null, null, null, null)
      anElephantOwner.addElephant(null, null, null, null)
      expect(anElephantOwner.hasTwoElephants()).toBe(false)
    })
  })
})
