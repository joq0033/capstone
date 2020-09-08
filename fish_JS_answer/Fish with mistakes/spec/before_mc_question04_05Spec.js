/*globals describe beforeEach Controller it expect aFish Aquarium FishOwner Fish*/
describe('Question Four and Question Five', () => {
    'use strict'
    describe('Fish', () => {
        let fish
        beforeEach(() => {
            fish = new Fish()
        })

        it('should have a .myFishOwner reference', () => {
            expect(fish.hasOwnProperty('')).to.be.ok
        })

        it('should have a .cost property', () => {
            expect(fish.hasOwnProperty('')).to.be.ok
        })

        it('should have a .color property', () => {
            expect(fish.hasOwnProperty('')).to.be.ok
        })

        it('should have a .breed property', () => {
            expect(fish.hasOwnProperty('')).to.be.ok
        })

        it('should have a .gender propert', () => {
            expect(fish.hasOwnProperty('')).to.be.ok
        })
    })

    describe('write a FishOwner.addFish function to add the Fishes',() => {
        var theAquarium
        beforeEach(() => {
            theAquarium = Controller.setup()
        })

        it('FishOwner PHK should have 1 Fish', () => {
            var theFishOwner = theAquarium.findFishOwner('')
            expect(theFishOwner.allMyFishes.length).to.equal(0)
        })

        it('FishOwner RUT should have 2 Fishes', () => {
            var theFishOwner = theAquarium.findFishOwner('')
            expect(theFishOwner.allMyFishes.length).to.equal(0)
        })

        it('FishOwner TAN should have 1 Fish', () => {
            var theFishOwner = theAquarium.findFishOwner('')
            expect(theFishOwner.allMyFishes.length).to.equal(0);
        })

        it('FishOwner JOG should have 2 Fishes', () => {
            var theFishOwner = theAquarium.findFishOwner('')
            expect(theFishOwner.allMyFishes.length).to.equal(0)
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
            theFishOwner = theAquarium.findFishOwner('')
            aFish = theFishOwner.sortFishes()
            //     PHK   Purple   Siamese Fighting Fish   M
            //      $2.55
            aFish = theFishOwner.allMyFishes[0]
            expect(aFish.myFishOwner).to.deep.equal(theFishOwner)
            expect(aFish.cost).to.equal()
            expect(aFish.color).to.equal('')
            expect(aFish.breed).to.equal('')
            expect(aFish.gender).to.equal('')

            theFishOwner = theAquarium.findFishOwner('')
            aFish = theFishOwner.sortFishes()
            //    RUT     Gold   Carp      F
            //    $10.99
            aFish = theFishOwner.allMyFishes[0]
            expect(aFish.myFishOwner).to.deep.equal(theFishOwner)
            expect(aFish.cost).to.equal()
            expect(aFish.color).to.equal('')
            expect(aFish.breed).to.equal('')
            expect(aFish.gender).to.equal('')

            //       RUT   Orange   Carp   F
            //       $5.56
            aFish = theFishOwner.allMyFishes[1]
            expect(aFish.myFishOwner).to.deep.equal(theFishOwner)
            expect(aFish.cost).to.equal()
            expect(aFish.color).to.equal('')
            expect(aFish.breed).to.equal('')
            expect(aFish.gender).to.equal('')

            theFishOwner = theAquarium.findFishOwner('')
            aFish = theFishOwner.sortFishes()
            //    JOG      Black Killer Whale   M
            //    $5000.01
            aFish = theFishOwner.allMyFishes[0]
            expect(aFish.myFishOwner).to.deep.equal(theFishOwner)
            expect(aFish.cost).to.equal()
            expect(aFish.color).to.equal('')
            expect(aFish.breed).to.equal('')
            expect(aFish.gender).to.equal('')

            //   JOG    Grey   Shark  M
            //   $123.45
            aFish = theFishOwner.allMyFishes[1]
            expect(aFish.myFishOwner).to.deep.equal(theFishOwner)
            expect(aFish.cost).to.equal()
            expect(aFish.color).to.equal('')
            expect(aFish.breed).to.equal('')
            expect(aFish.gender).to.equal('')

            theFishOwner = theAquarium.findFishOwner('')
            aFish = theFishOwner.sortFishes()
            //   TAN   Gold   GoldFish   F
            //     $9.87
            aFish = theFishOwner.allMyFishes[0]
            expect(aFish.myFishOwner).to.deep.equal(theFishOwner)
            expect(aFish.cost).to.equal()
            expect(aFish.color).to.equal('')
            expect(aFish.breed).to.equal('')
            expect(aFish.gender).to.equal('')
        });
    });
});