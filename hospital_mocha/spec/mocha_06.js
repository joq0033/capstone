/*global describe beforeEach Controller it expect Hospital Doctor Patient*/
describe('Question Six', () => {
	'use strict'
    describe('Patient.getPaidStatus function', () => {
        let aPatient
        beforeEach(() => {
            aPatient = new Patient()
        })

        it('should exist', () => {
            expect(aPatient.getPaidStatus).not.to.be.undefined
        })

        it('should return a boolean', () => {
            expect(typeof aPatient.getPaidStatus()).to.equal('boolean')
        })

        it('should return true if the FeesOwing is equal to zero.', () => {
            aPatient = new Patient(null, null, null, 0, null)
            expect(aPatient.getPaidStatus()).to.equal(true)
        })

        it('should return true if the FeesOwing is more than zero.', () => {
            aPatient = new Patient(null, null, null, 100, null)
            expect(aPatient.getPaidStatus()).to.equal(false)
        })
    })
})