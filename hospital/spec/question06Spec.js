/*global describe beforeEach Controller it expect Hospital Doctor Patient*/
describe('Question Six', () => {
    describe('Patient.getPaidStatus function', () => {
        var aPatient
        beforeEach(() => {
            aPatient = new Patient()
        })

        it('should exist', () => {
            expect(aPatient.getPaidStatus).toBeDefined()
        })

        it('should return a boolean', () => {
            expect(typeof aPatient.getPaidStatus()).toBe('boolean')
        })

        it('should return true if the FeesOwing is equal to zero.', () => {
            aPatient = new Patient(null, null, null, 0, null)
            expect(aPatient.getPaidStatus()).toBe(true)
        })

        it('should return true if the FeesOwing is more than zero.', () => {
            aPatient = new Patient(null, null, null, 100, null)
            expect(aPatient.getPaidStatus()).toBe(false)
        })
    })
})