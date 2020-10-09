describe('Basic Check For Original Source Code', function () {
    describe('Hospital', function() {
        var theHospital
		
        beforeEach(function () {
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

    describe('Doctor', () => {
        var aDoctor
		
        beforeEach(function () {
            aDoctor = new Doctor()
        })

        it('should have an .id property', function() {
            expect(aDoctor.hasOwnProperty('id')).to.be.true
        })

        it('should have a .firstName property', function() {
            expect(aDoctor.hasOwnProperty('firstName')).to.be.true
        })

        it('should have a .lastName property', function() {
            expect(aDoctor.hasOwnProperty('lastName')).to.be.true
        })

        it('should have an .office property', function() {
            expect(aDoctor.hasOwnProperty('office')).to.be.true
        })

        it('should have a .fees property', function() {
            expect(aDoctor.hasOwnProperty('fees')).to.be.true
        })

        it('should have a .myHospital reference', function() {
            expect(aDoctor.hasOwnProperty('myHospital')).to.be.true
        })

        describe('the allMyPatients property', function() {
            it('should have an .allMyPatients reference', function() {
                expect(aDoctor.hasOwnProperty('allMyPatients')).to.be.true
            })

            it('should reference an array', function() {
                expect(Array.isArray(aDoctor.allMyPatients)).to.be.true
            })
        })

        it('should have a .sortPatients function', function() {
            expect(typeof aDoctor.sortPatients).to.equal('function')
        })
    })
})