describe('Question Two', () => {
    'use strict'
    describe('adding the three Zones', () => {
        let theCarPark
        beforeEach(() => {
            theCarPark = Controller.setup()
        })

        it('should have added 3 Zones', () => {
            expect(theCarPark.allMyZones.length).to.equal(3)
        })

        it('should have correctly set details for each Zone', () => {
            let aZone = theCarPark.allMyZones[0]
            expect(aZone).not.to.be.undefined
            expect(aZone.id).to.equal(3)
            expect(aZone.where).to.equal('Cashel Mall')
            
            aZone = theCarPark.allMyZones[1]
            expect(aZone).not.to.be.undefined
            expect(aZone.id).to.equal(1)
            expect(aZone.where).to.equal('Central City')

            aZone = theCarPark.allMyZones[2]
            expect(aZone).not.to.be.undefined
            expect(aZone.id).to.equal(2)
            expect(aZone.where).to.equal('Madras Street')
        })
    })
})