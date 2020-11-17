/*globals describe beforeEach Controller it expect Aquarium FishOwner Fish*/
describe('Question Three', () => {
    'use strict'
    describe('Aquarium.getCatOwners function', () => {
        let theAquarium
        beforeEach(() => {
            theAquarium = Controller.setup()
        })

        it('should return a string', () => {
            expect(typeof theAquarium.getFishOwners()).to.equal('string')
        })

        it("should NOT be hard coded", () => {
            theAquarium = new Aquarium()
            expect(theAquarium.getFishOwners()).to.equal('')
        })

        it("should return correctly formatted data in the right order", () => {
            expect(theAquarium.getFishOwners()).to.equal('PHK>Phil, Key. <\nRUT>Russel, Turia. <\nTAN>Tariana, Norman. <\nJOG>John, Goff. <\n')
        })
    })
})
