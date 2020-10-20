describe('Basic Check For Original Source Code', function() {
    describe('Hospital', function() {
        var theHospital
		
        beforeEach(function() {
            theHospital = new Hospital()
        })

        describe('the allMyDoctors property', function() {
            it('should have an .allMyDoctors property', function() {
                expect(theHospital.hasOwnProperty('allMyDoctors')).to.be.true
            })
            it('should reference an array', function() {
                expect(Array.isArray(theHospital.allMyDoctors)).to.be.true
            })
        })

        it('should have an .addDoctor function', function() {
            expect(typeof theHospital.addDoctor).to.equal('function')
        })

        it('should have a .findDoctor function', function() {
            expect(typeof theHospital.findDoctor).to.equal('function')
        })

        it('should have a .sortDoctors function', function() {
            expect(typeof theHospital.sortDoctors).to.equal('function')
        })
    })

    describe('Doctor', function() {
        var doctor
        beforeEach(function() {
            doctor = new Doctor()
        })

        it('should have an .id property', function() {
            expect(doctor.hasOwnProperty('id')).to.be.true
        })

        it('should have a .firstName property', function() {
            expect(doctor.hasOwnProperty('firstName')).to.be.true
        })

        it('should have a .lastName property', function() {
            expect(doctor.hasOwnProperty('lastName')).to.be.true
        })

        it('should have an .office property', function() {
            expect(doctor.hasOwnProperty('office')).to.be.true
        })

        it('should have a .fees property', function() {
            expect(doctor.hasOwnProperty('fees')).to.be.true
        })

        it('should have a .myHospital reference', function() {
            expect(doctor.hasOwnProperty('myHospital')).to.be.true
        })

        describe('the allMyPatients property', function() {
            it('should have an .allMyPatients reference', function() {
                expect(doctor.hasOwnProperty('allMyPatients')).to.be.true
            })

            it('should reference an array', function() {
                expect(Array.isArray(doctor.allMyPatients)).to.be.true
            })
        })

        it('should have a .sortPatients function', function() {
            expect(typeof doctor.sortPatients).to.be.equal('function')
        })
    })
})