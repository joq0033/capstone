/*globals describe beforeEach Controller it expect Aquarium FishOwner Fish*/
describe("Question Two", function () {
    'use strict';
    describe("adding the four FishOwners", function () {
        var theAquarium;
        beforeEach(function () {
            theAquarium = Controller.setup();
        });

        it("should have added 4 FishOwners", function () {
            expect(theAquarium.allMyFishOwners.length).toBe(4);
        });

        it("should have correctly set details for each FishOwner", function () {
            var aFishOwner;
            aFishOwner = theAquarium.sortFishOwners();

            aFishOwner = theAquarium.allMyFishOwners[0];
            expect(aFishOwner).toBeDefined();
            expect(aFishOwner.id).toBe('PHK');
            expect(aFishOwner.firstName).toBe('Phil');
            expect(aFishOwner.lastName).toBe('Key');
            expect(aFishOwner.birthDate).toEqual(new Date(1980, 4, 8));

            aFishOwner = theAquarium.allMyFishOwners[1];
            expect(aFishOwner).toBeDefined();
            expect(aFishOwner.id).toBe('RUT');
            expect(aFishOwner.firstName).toBe('Russel');
            expect(aFishOwner.lastName).toBe('Turia');
            expect(aFishOwner.birthDate).toEqual(new Date(1984, 1, 16));

            aFishOwner = theAquarium.allMyFishOwners[2];
            expect(aFishOwner).toBeDefined();
            expect(aFishOwner.id).toBe('TAN');
            expect(aFishOwner.firstName).toBe('Tariana');
            expect(aFishOwner.lastName).toBe('Norman');
            expect(aFishOwner.birthDate).toEqual(new Date(1987, 10, 30));
			
			aFishOwner = theAquarium.allMyFishOwners[3];
            expect(aFishOwner).toBeDefined();
            expect(aFishOwner.id).toBe('JOG');
            expect(aFishOwner.firstName).toBe('John');
            expect(aFishOwner.lastName).toBe('Goff');
            expect(aFishOwner.birthDate).toEqual(new Date(1982, 11, 12));
        });
    });
});