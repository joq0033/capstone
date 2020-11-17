describe('Basic Check For Original Source Code', () => {
    describe('CarPark', function() {
        var theCarPark
        beforeEach(function() {
            theCarPark = new CarPark()
        })

        it('should have an allMyZones property', function() {
            expect(theCarPark.hasOwnProperty('allMyZones')).to.be.true
        })

        describe('the allMyZones property', function() {
            it('should reference an array', function() {
                expect(Array.isArray(theCarPark.allMyZones)).to.be.true
            })
        })

        it('should have an addZone function', function() {
            expect(typeof theCarPark.addZone).to.equal('function')
        })
    })

		describe('Zone', function(){
			var zone = new Zone()

        it('should have an .id property', function() {
            expect(zone.hasOwnProperty('id')).to.be.true
        })

        it('should have a .where property', function() {
            expect(zone.hasOwnProperty('where')).to.be.true
        })
        describe('the allMyClients property', function() {
            it('should have a .allMyClients reference', function() {
                expect(zone.hasOwnProperty('allMyClients')).to.be.true
        })
            it('should reference an array', function() {
                expect(Array.isArray(zone.allMyClients)).to.be.true
            })
        })

    })

})