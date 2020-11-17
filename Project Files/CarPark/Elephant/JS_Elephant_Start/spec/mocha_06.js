/* global describe beforeEach  it expect ElephantOwner   */
describe('Question Six', () => {
  'use strict'
  describe('ElephantOwner.hasTwoElephants function', () => {
    let anElephantOwner
    beforeEach(() => {
      anElephantOwner = new ElephantOwner()
    })

    it('should exist', () => {
      expect(anElephantOwner.hasTwoElephants).not.to.be.undefined
    })

    it('should return a boolean', () => {
      expect(typeof anElephantOwner.hasTwoElephants()).to.equal('boolean')
    })

    it('should return true if the number of Elephant that person owns is equal two.', () => {
      anElephantOwner = new ElephantOwner('tao', null, null, null, null)
      anElephantOwner.addElephant(null, null, null, null)
      anElephantOwner.addElephant(null, null, null, null)
      expect(anElephantOwner.hasTwoElephants()).to.equal(true)
    })

    it('should return false if the number of Elephants that person owns is less than two.', () => {
      anElephantOwner = new ElephantOwner('tao', null, null, null, null)
      anElephantOwner.addElephant(null, null, null, null)
      expect(anElephantOwner.hasTwoElephants()).to.equal(false)
    })

    it('should return false if the number of Elephants that person owns is more than two.', () => {
      anElephantOwner = new ElephantOwner('tao', null, null, null, null)
      anElephantOwner.addElephant(null, null, null, null)
      anElephantOwner.addElephant(null, null, null, null)
      anElephantOwner.addElephant(null, null, null, null)
      expect(anElephantOwner.hasTwoElephants()).to.equal(false)
    })
  })
})
