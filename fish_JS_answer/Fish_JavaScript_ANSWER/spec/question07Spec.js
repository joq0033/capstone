/*globals describe beforeEach Controller it expect Aquarium FishOwner Fish*/
describe("Question Seven", function () {
    'use strict';
    describe("Aquarium.getThoseWithTwoFishes function", function () {
        var theAquarium;
        beforeEach(
            function () {
                theAquarium = Controller.setup();
            }
        );

        it("should return a string", function () {
            expect(typeof theAquarium.getThoseWithTwoFishes()).toBe('string');
        });

        it("should NOT be hard coded", function () {
            theAquarium = new Aquarium();
            expect(theAquarium.getThoseWithTwoFishes()).toBe('');
        });

        it("should correctly report details of FishOwner who has 2 fishes in order", function () {
            expect(theAquarium.getThoseWithTwoFishes()).toBe('John, Goff. <JOG>\n    Black Killer Whale (M) worth $5000.01\n    Grey Shark (M) worth $123.45\nRussel, Turia. <RUT>\n    Gold Carp (F) worth $10.99\n    Orange Carp (F) worth $5.56\n');
        });
    });
});