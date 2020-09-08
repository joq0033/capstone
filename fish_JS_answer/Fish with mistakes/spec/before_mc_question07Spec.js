/*globals describe beforeEach Controller it expect Aquarium FishOwner Fish*/
describe('Question Seven', () => {
    'use strict'
    describe('Aquarium.getThoseWithTwoFishes function', () => {
        var theAquarium
        beforeEach(() => {
			theAquarium = Controller.setup()
        })

        it('should return a string', () => {
            expect(typeof theAquarium.getThoseWithTwoFishes()).to.equal('');
        });

        it('should NOT be hard coded',() => {
            theAquarium = new Aquarium()
            expect(theAquarium.getThoseWithTwoFishes()).to.equal('HARD_CODED')
        })

        it('should correctly report details of FishOwner who has 2 fishes in order', () => {
            expect(theAquarium.getThoseWithTwoFishes()).to.equal('RUT>Russel, Turia. <\n    Gold Carp (F) worth $10.99\n    Orange Carp (F) worth $5.56\nJOG>John, Goff. <\n    Grey Shark (M) worth $123.45\n    Black Killer Whale (M) worth $5000.01\nJOG>John, Goff. <\n    Grey Shark (M) worth $123.45\n')
        })
    })
})