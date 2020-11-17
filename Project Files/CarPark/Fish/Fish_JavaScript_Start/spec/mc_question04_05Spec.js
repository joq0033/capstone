/*globals describe beforeEach Controller it expect aFish Aquarium FishOwner Fish*/
describe('Question Four and Question Five', () => {
    'use strict'
    describe('Fish', () => {
        let fish
        beforeEach(() => {
            fish = new Fish()
        })

        it('should have a .myFishOwner reference', () => {
            expect(fish.hasOwnProperty('myFishOwner')).to.be.ok
        })

        it('should have a .cost property', () => {
            expect(fish.hasOwnProperty('cost')).to.be.ok
        })

        it('should have a .color property', () => {
            expect(fish.hasOwnProperty('color')).to.be.ok
        })

        it('should have a .breed property', () => {
            expect(fish.hasOwnProperty('breed')).to.be.ok
        })

        it('should have a .gender propert', () => {
            expect(fish.hasOwnProperty('gender')).to.be.ok
        })
    })

    describe('write a FishOwner.addFish function to add the Fishes',() => {
        var theAquarium
        beforeEach(() => {
            theAquarium = Controller.setup()
        })

        it('FishOwner PHK should have 1 Fish', () => {
            var theFishOwner = theAquarium.findFishOwner('PHK')
            expect(theFishOwner.allMyFishes.length).to.equal(1)
        })

        it('FishOwner RUT should have 2 Fishes', () => {
            var theFishOwner = theAquarium.findFishOwner('RUT')
            expect(theFishOwner.allMyFishes.length).to.equal(2)
        })

        it('FishOwner TAN should have 1 Fish', () => {
            var theFishOwner = theAquarium.findFishOwner('TAN')
            expect(theFishOwner.allMyFishes.length).to.equal(1);
        })

        it('FishOwner JOG should have 2 Fishes', () => {
            var theFishOwner = theAquarium.findFishOwner('JOG')
            expect(theFishOwner.allMyFishes.length).to.equal(2)
        })

        it('should correctly set fish details', () => {

            /*
             PHK        Purple    Siamese Fighting Fish    M
             $2.55

             RUT        Gold      Carp      F
             $10.99

             RUT        Orange     Carp     F
             $5.56

             JOG        Black     Killer Whale    M
             $5,000.01

             JOG        Grey      Shark     M
             $123.45

             TAN        Gold     GoldFish       F
             $9.87
            */
            var aFish, theFishOwner
            theFishOwner = theAquarium.findFishOwner('PHK')
            aFish = theFishOwner.sortFishes()
            //     PHK   Purple   Siamese Fighting Fish   M
            //      $2.55
            aFish = theFishOwner.allMyFishes[0]
            expect(aFish.myFishOwner).to.deep.equal(theFishOwner)
            expect(aFish.cost).to.equal(2.55)
            expect(aFish.color).to.equal('Purple')
            expect(aFish.breed).to.equal('Siamese Fighting Fish')
            expect(aFish.gender).to.equal('M')

            theFishOwner = theAquarium.findFishOwner('RUT')
            aFish = theFishOwner.sortFishes()
            //    RUT     Gold   Carp      F
            //    $10.99
            aFish = theFishOwner.allMyFishes[0]
            expect(aFish.myFishOwner).to.deep.equal(theFishOwner)
            expect(aFish.cost).to.equal(10.99)
            expect(aFish.color).to.equal('Gold')
            expect(aFish.breed).to.equal('Carp')
            expect(aFish.gender).to.equal('F')

            //       RUT   Orange   Carp   F
            //       $5.56
            aFish = theFishOwner.allMyFishes[1]
            expect(aFish.myFishOwner).to.deep.equal(theFishOwner)
            expect(aFish.cost).to.equal(5.56)
            expect(aFish.color).to.equal('Orange')
            expect(aFish.breed).to.equal('Carp')
            expect(aFish.gender).to.equal('F')

            theFishOwner = theAquarium.findFishOwner('JOG')
            aFish = theFishOwner.sortFishes()
            //   JOG    Grey   Shark  M
            //   $123.45
            aFish = theFishOwner.allMyFishes[0]
            expect(aFish.myFishOwner).to.deep.equal(theFishOwner)
            expect(aFish.cost).to.equal(123.45)
            expect(aFish.color).to.equal('Grey')
            expect(aFish.breed).to.equal('Shark')
            expect(aFish.gender).to.equal('M')
			
            //    JOG      Black Killer Whale   M
            //    $5000.01
            aFish = theFishOwner.allMyFishes[1]
            expect(aFish.myFishOwner).to.deep.equal(theFishOwner)
            expect(aFish.cost).to.equal(5000.01)
            expect(aFish.color).to.equal('Black')
            expect(aFish.breed).to.equal('Killer Whale')
            expect(aFish.gender).to.equal('M')

            theFishOwner = theAquarium.findFishOwner('TAN')
            aFish = theFishOwner.sortFishes()
            //   TAN   Gold   GoldFish   F
            //     $9.87
            aFish = theFishOwner.allMyFishes[0]
            expect(aFish.myFishOwner).to.deep.equal(theFishOwner)
            expect(aFish.cost).to.equal(9.87)
            expect(aFish.color).to.equal('Gold')
            expect(aFish.breed).to.equal('GoldFish')
            expect(aFish.gender).to.equal('F')
        });
    });
});