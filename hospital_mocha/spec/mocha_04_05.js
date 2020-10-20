/*global describe beforeEach Controller it expect Hospital Doctor Patient*/
describe('Question Four and Question Five', () => {
    describe('Patient', () => {
        var patient
        beforeEach(() => {
            patient = new Patient()
        })

        it('should have a .myDoctor reference', () => {
          expect(patient.hasOwnProperty('myDoctor')).to.be.ok
        })

        it('should have an .id property', () => {
            expect(patient.hasOwnProperty('id')).to.be.ok
        })

        it('should have a .lastName property', () => {
            expect(patient.hasOwnProperty('lastName')).to.be.ok
        })

        it('should have a .firstName property', () => {
            expect(patient.hasOwnProperty('firstName')).to.be.ok
        })

        it('should have a .feesOwing property', () => {
            expect(patient.hasOwnProperty('feesOwing')).to.be.ok
        })
    })

    describe('write a Doctor.addPatient function to add the Patients', () => {
        var theHospital
        beforeEach(() => {
            theHospital = Controller.setup()
        })

        it('Doctor 13 should have 1 Patient', () => {
            var theDoctor = theHospital.findDoctor('13')
            expect(theDoctor.allMyPatients.length).to.equal(1)
        })

        it('Doctor 11 should have 2 Patients', () => {
            var theDoctor = theHospital.findDoctor('11')
            expect(theDoctor.allMyPatients.length).to.equal(2)
        })

        it('Doctor 12 should have 2 Patients', () => {
            var theDoctor = theHospital.findDoctor('12')
            expect(theDoctor.allMyPatients.length).to.equal(2)
        })


        it('should correctly set Patient details', () => {

            /*
              ID    Last Name   First Name  Fees Owing    Doctor ID
              200   Fisher      Shelley        0            11
              400   Koirala      Kimi         25            12
              300   Chen         Liang        40            12
              500   Ahmed        Riyaz         0            13
              100   Knightly     Jude         30            11
            */
            
            
            var aPatient, theDoctor
            theDoctor = theHospital.findDoctor('13')
            aPatient = theDoctor.sortPatients()
            //500   Ahmed       Riyaz       0        13
            aPatient = theDoctor.allMyPatients[0]
            expect(aPatient.myDoctor).to.deep.equal(theDoctor)
            expect(aPatient.id).to.equal('500')
            expect(aPatient.lastName).to.equal('Ahmed')
            expect(aPatient.firstName).to.equal('Riyaz')
            expect(aPatient.feesOwing).to.equal(0)

            theDoctor = theHospital.findDoctor('11')
            aPatient = theDoctor.sortPatients()
            //100   Knightly    Jude        30       11
            aPatient = theDoctor.allMyPatients[0]
            expect(aPatient.myDoctor).to.deep.equal(theDoctor)
            expect(aPatient.id).to.equal('100')
            expect(aPatient.lastName).to.equal('Knightly')
            expect(aPatient.firstName).to.equal('Jude')
            expect(aPatient.feesOwing).to.equal(30)

            //200   Fisher      Shelley    0       11
            aPatient = theDoctor.allMyPatients[1]
            expect(aPatient.myDoctor).to.deep.equal(theDoctor)
            expect(aPatient.id).to.equal('200')
            expect(aPatient.lastName).to.equal('Fisher')
            expect(aPatient.firstName).to.equal('Shelley')
            expect(aPatient.feesOwing).to.equal(0)

            theDoctor = theHospital.findDoctor('12')
            aPatient = theDoctor.sortPatients()
            //300    Chen       Liang        4       12
            aPatient = theDoctor.allMyPatients[0]
            expect(aPatient.myDoctor).to.deep.equal(theDoctor)
            expect(aPatient.id).to.equal('300')
            expect(aPatient.lastName).to.equal('Chen')
            expect(aPatient.firstName).to.equal('Liang')
            expect(aPatient.feesOwing).to.equal(40)

            //400   Koirala    Kimi      25      12
            aPatient = theDoctor.allMyPatients[1]
            expect(aPatient.myDoctor).to.deep.equal(theDoctor)
            expect(aPatient.id).to.equal('400')
            expect(aPatient.lastName).to.equal('Koirala')
            expect(aPatient.firstName).to.equal('Kimi')
            expect(aPatient.feesOwing).to.equal(25)
        })
    })
})
