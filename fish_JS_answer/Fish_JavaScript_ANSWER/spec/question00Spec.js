/*globals describe beforeEach it expect Aquarium FishOwner Fish*/
describe("Basic Check For Original Source Code", function () {
    'use strict';
    describe("Aquarium", function () {
        var theAquarium;
        beforeEach(function () {
            theAquarium = new Aquarium();
        });

        describe("the allMyFishOwners property", function () {
            it("should have an .allMyFishOwners property", function () {
                expect(theAquarium.hasOwnProperty('allMyFishOwners')).toBeTruthy();
            });
            it("should reference an array", function () {
                expect(Array.isArray(theAquarium.allMyFishOwners)).toBeTruthy();
            });
        });

        it("should have an .addFishOwner function", function () {
            expect(typeof theAquarium.addFishOwner).toBe('function');
        });

        it("should have a .findFishOwner function", function () {
            expect(typeof theAquarium.findFishOwner).toBe('function');
        });

        it("should have a .sortFishOwners function", function () {
            expect(typeof theAquarium.sortFishOwners).toBe('function');
        });
    });

    describe("FishOwner", function () {
        var fishOwner;
        beforeEach(function () {
            fishOwner = new FishOwner();
        });

        it("should have an .id property", function () {
            expect(fishOwner.hasOwnProperty('id')).toBeTruthy();
        });

        it("should have a .firstName property", function () {
            expect(fishOwner.hasOwnProperty('firstName')).toBeTruthy();
        });

        it("should have a .lastName property", function () {
            expect(fishOwner.hasOwnProperty('lastName')).toBeTruthy();
        });

        it("should have a .birthDate property", function () {
            expect(fishOwner.hasOwnProperty('birthDate')).toBeTruthy();
        });

        it("should have a .myAquarium reference", function () {
            expect(fishOwner.hasOwnProperty('myAquarium')).toBeTruthy();
        });

        describe("the allMyFishes property", function () {
            it("should have an .allMyFishes reference", function () {
                expect(fishOwner.hasOwnProperty('allMyFishes')).toBeTruthy();
            });

            it("should reference an array", function () {
                expect(Array.isArray(fishOwner.allMyFishes)).toBeTruthy();
            });
        });

        it("should have a .sortFishes function", function () {
            expect(typeof fishOwner.sortFishes).toBe('function');
        });
    });
});