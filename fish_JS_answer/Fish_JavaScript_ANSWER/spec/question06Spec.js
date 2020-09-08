/*globals describe beforeEach Controller it expect aFish Aquarium FishOwner Fish*/
describe("Question Six", function () {
    'use strict';
    describe("FishOwner.hasTwoFishes function", function () {
        var aFishOwner, aFish;
        beforeEach(function () {
            aFishOwner = new FishOwner();
            aFish = new Fish();
        });

        it("should exist", function () {
            expect(aFishOwner.hasTwoFishes).toBeDefined();
        });

        it("should return a boolean", function () {
            expect(typeof aFishOwner.hasTwoFishes()).toBe('boolean');
        });

        it("should return true if the number of Fish that person owns is equal two.", function () {
            aFishOwner = new FishOwner('tao', null, null, null, null);
            aFish = aFishOwner.addFish(null, null, null, null);
            aFish = aFishOwner.addFish(null, null, null, null);
            expect(aFishOwner.hasTwoFishes()).toBe(true);
        });

        it("should return false if the number of Fish that person owns is less than two.", function () {
            aFishOwner = new FishOwner('tao', null, null, null, null);
            aFish = aFishOwner.addFish(null, null, null, null);
            expect(aFishOwner.hasTwoFishes()).toBe(false);
        });

        it("should return false if the number of Fish that person owns is more than two.", function () {
            aFishOwner = new FishOwner('tao', null, null, null, null);
            aFish = aFishOwner.addFish(null, null, null, null);
            aFish = aFishOwner.addFish(null, null, null, null);
            aFish = aFishOwner.addFish(null, null, null, null);
            expect(aFishOwner.hasTwoFishes()).toBe(false);
        });
    });
});