/*globals describe beforeEach Controller it expect aFish Aquarium FishOwner Fish*/
describe('Question Six', () => {
    'use strict'
    describe('FishOwner.hasTwoFishes function', () => {
        let aFishOwner
        beforeEach(() => {
            aFishOwner = new FishOwner()
        });

        it('should exist', () => {
            expect(aFishOwner.hasTwoFishes).be.undefined
        })

        it('should return a boolean', () => {
            expect(typeof aFishOwner.hasTwoFishes()).to.equal('')
        })

        it('should return true if the number of Fish that person owns is equal two.', () => {
            aFishOwner = new FishOwner('tao', null, null, null, null)
            aFishOwner.addFish(null, null, null, null);
            aFishOwner.addFish(null, null, null, null);
            expect(aFishOwner.hasTwoFishes()).to.equal(false);
        });

        it('should return false if the number of Fish that person owns is less than two.', () => {
            aFishOwner = new FishOwner('tao', null, null, null, null)
            aFishOwner.addFish(null, null, null, null)
            expect(aFishOwner.hasTwoFishes()).to.equal(true)
        });

        it('should return false if the number of Fish that person owns is more than two.', () => {
            aFishOwner = new FishOwner('tao', null, null, null, null)
            aFishOwner.addFish(null, null, null, null)
            aFishOwner.addFish(null, null, null, null)
            aFishOwner.addFish(null, null, null, null)
            expect(aFishOwner.hasTwoFishes()).to.equal(true)
        })
    })
})