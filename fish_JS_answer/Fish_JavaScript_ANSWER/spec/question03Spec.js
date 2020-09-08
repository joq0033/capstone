/*globals describe beforeEach Controller it expect Aquarium FishOwner Fish*/
describe("Question Three", function () {
    'use strict';
    describe("Aquarium.getFishOwners function", function () {
        var theAquarium;
        beforeEach(function () {
            theAquarium = Controller.setup();
        });

        it("should return a string", function () {
            expect(typeof theAquarium.getFishOwners()).toBe('string');
        });

        it("should NOT be hard coded", function () {
            theAquarium = new Aquarium();
            expect(theAquarium.getFishOwners()).toBe('');
        });

        it("should return correctly formatted data in the right order", function () {
            expect(theAquarium.getFishOwners()).toBe('Phil, Key. <PHK>\nRussel, Turia. <RUT>\nTariana, Norman. <TAN>\nJohn, Goff. <JOG>\n');
        });
		
    });
});