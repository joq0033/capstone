/*globals describe beforeEach Controller it expect aFish Aquarium FishOwner Fish*/
describe("Question Four and Question Five", function () {
    'use strict';
    describe("Fish", function () {
        var fish;
        beforeEach(function () {
            fish = new Fish();
        });

        it("should have a .myFishOwner reference", function () {
            expect(fish.hasOwnProperty('myFishOwner')).toBeTruthy();
        });

        it("should have a .cost property", function () {
            expect(fish.hasOwnProperty('cost')).toBeTruthy();
        });

        it("should have a .color property", function () {
            expect(fish.hasOwnProperty('color')).toBeTruthy();
        });

        it("should have a .breed property", function () {
            expect(fish.hasOwnProperty('breed')).toBeTruthy();
        });

        it("should have a .gender property", function () {
            expect(fish.hasOwnProperty('gender')).toBeTruthy();
        });
    });

    describe("write a FishOwner.addFish function to add the Fishes", function () {
        var theAquarium;
        beforeEach(function () {
            theAquarium = Controller.setup();
        });

        it("FishOwner PHK should have 1 Fish", function () {
            var theFishOwner = theAquarium.findFishOwner('PHK');
            expect(theFishOwner.allMyFishes.length).toBe(1);
        });

        it("FishOwner RUT should have 2 Fishes", function () {
            var theFishOwner = theAquarium.findFishOwner('RUT');
            expect(theFishOwner.allMyFishes.length).toBe(2);
        });

        it("FishOwner TAN should have 1 Fish", function () {
            var theFishOwner = theAquarium.findFishOwner('TAN');
            expect(theFishOwner.allMyFishes.length).toBe(1);
        });

        it("FishOwner JOG should have 2 Fishes", function () {
            var theFishOwner = theAquarium.findFishOwner('JOG');
            expect(theFishOwner.allMyFishes.length).toBe(2);
        });

        it("should correctly set fish details", function () {

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
            var aFish, theFishOwner;
            theFishOwner = theAquarium.findFishOwner('PHK');
            aFish = theFishOwner.sortFishes();
            //     PHK   Purple   Siamese Fighting Fish   M
            //      $2.55
            aFish = theFishOwner.allMyFishes[0];
            expect(aFish.myFishOwner).toEqual(theFishOwner);
            expect(aFish.cost).toBe(2.55);
            expect(aFish.color).toBe('Purple');
            expect(aFish.breed).toBe('Siamese Fighting Fish');
            expect(aFish.gender).toBe('M');

            theFishOwner = theAquarium.findFishOwner('RUT');
            aFish = theFishOwner.sortFishes();
            //    RUT     Gold   Carp      F
            //    $10.99
            aFish = theFishOwner.allMyFishes[0];
            expect(aFish.myFishOwner).toEqual(theFishOwner);
            expect(aFish.cost).toBe(10.99);
            expect(aFish.color).toBe('Gold');
            expect(aFish.breed).toBe('Carp');
            expect(aFish.gender).toBe('F');

            //       RUT   Orange   Carp   F
            //       $5.56
            aFish = theFishOwner.allMyFishes[1];
            expect(aFish.myFishOwner).toEqual(theFishOwner);
            expect(aFish.cost).toBe(5.56);
            expect(aFish.color).toBe('Orange');
            expect(aFish.breed).toBe('Carp');
            expect(aFish.gender).toBe('F');

            theFishOwner = theAquarium.findFishOwner('JOG');
            aFish = theFishOwner.sortFishes();
            //    JOG      Black Killer Whale   M
            //    $5000.01
            aFish = theFishOwner.allMyFishes[0];
            expect(aFish.myFishOwner).toEqual(theFishOwner);
            expect(aFish.cost).toBe(5000.01);
            expect(aFish.color).toBe('Black');
            expect(aFish.breed).toBe('Killer Whale');
            expect(aFish.gender).toBe('M');

            //   JOG    Grey   Shark  M
            //   $123.45
            aFish = theFishOwner.allMyFishes[1];
            expect(aFish.myFishOwner).toEqual(theFishOwner);
            expect(aFish.cost).toBe(123.45);
            expect(aFish.color).toBe('Grey');
            expect(aFish.breed).toBe('Shark');
            expect(aFish.gender).toBe('M');

            theFishOwner = theAquarium.findFishOwner('TAN');
            aFish = theFishOwner.sortFishes();
            //   TAN   Gold   GoldFish   F
            //     $9.87
            aFish = theFishOwner.allMyFishes[0];
            expect(aFish.myFishOwner).toEqual(theFishOwner);
            expect(aFish.cost).toBe(9.87);
            expect(aFish.color).toBe('Gold');
            expect(aFish.breed).toBe('GoldFish');
            expect(aFish.gender).toBe('F');
        });
    });
});