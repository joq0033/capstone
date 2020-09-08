/*globals describe beforeEach Controller it expect Aquarium FishOwner Fish*/
describe("Question Two", () => {
    describe('adding the four FishOwners', () => {
        let theAquarium
        beforeEach(() => {
            theAquarium = Controller.setup()
        })

        it('should have added 4 FishOwners', () => {
            expect(theAquarium.allMyFishOwners.length).to.equal(4)
        })

        it('should have correctly set details for each FishOwner', () => {
			theAquarium.sortFishOwners
            let aFishOwner = theAquarium.allMyFishOwners[0]
            expect(aFishOwner).not.to.be.undefined
            expect(aFishOwner.id).to.equal('PHK')
            expect(aFishOwner.firstName).to.equal('Phil')
            expect(aFishOwner.lastName).to.equal('Key')
            expect(aFishOwner.birthDate).to.deep.equal(new Date(1980, 4, 8))

            aFishOwner = theAquarium.allMyFishOwners[1]
            expect(aFishOwner).not.to.be.undefined
            expect(aFishOwner.id).to.equal('RUT')
            expect(aFishOwner.firstName).to.equal('Russel')
            expect(aFishOwner.lastName).to.equal('Turia')
            expect(aFishOwner.birthDate).to.deep.equal(new Date(1984, 1, 16))

            aFishOwner = theAquarium.allMyFishOwners[2]
            expect(aFishOwner).not.to.be.undefined
            expect(aFishOwner.id).to.equal('TAN')
            expect(aFishOwner.firstName).to.equal('Tariana')
            expect(aFishOwner.lastName).to.equal('Norman')
            expect(aFishOwner.birthDate).to.deep.equal(new Date(1987, 10, 30))
			
			aFishOwner = theAquarium.allMyFishOwners[3]
            expect(aFishOwner).not.to.be.undefined
            expect(aFishOwner.id).to.equal('JOG')
            expect(aFishOwner.firstName).to.equal('John')
            expect(aFishOwner.lastName).to.equal('Goff')
            expect(aFishOwner.birthDate).to.deep.equal(new Date(1982, 11, 12))
        })
    })
})