/*globals describe beforeEach Controller it expect Hospital Doctor Patient*/
describe("Question Three", function () {
    'use strict';
    describe("Hospital.getDoctors function", function () {
        var theHospital;
        beforeEach(function () {
            theHospital = Controller.setup();
        });

        it("should return a string", function () {
            expect(typeof theHospital.getDoctors()).toBe('string');
        });

        it("should NOT be hard coded", function () {
            theHospital = new Hospital();
            expect(theHospital.getDoctors()).toBe('');
        });

        it("should return correctly formatted data in the right order", function () {
            expect(theHospital.getDoctors()).toBe('11 - Xu Jian.\n12 - Kumar Santosh.\n13 - John Emily.\n');
        });
    });
});