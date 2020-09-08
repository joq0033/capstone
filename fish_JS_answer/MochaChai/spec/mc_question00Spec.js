/*globals describe beforeEach it expect Aquarium FishOwner Fish*/
describe('Basic Check For Original Source Code', () => {
    describe('Aquarium', () => {
        let theAquarium
        beforeEach(() => {
            theAquarium = new Aquarium()
        })

        describe('the allMyFishOwners property', () => {
            it('should have an .allMyFishOwners property', () => {
                expect(theAquarium.hasOwnProperty('allMyFishOwners')).to.be.ok
            })
            it('should reference an array', () => {
                expect(Array.isArray(theAquarium.allMyFishOwners)).to.be.ok
            })
        })

        it('should have an .addFishOwner function', () => {
            expect(typeof theAquarium.addFishOwner).to.equal('function')
        })

        it('should have a .findFishOwner function', () => {
            expect(typeof theAquarium.findFishOwner).to.equal('function')
        })

        it('should have a .sortFishOwners function', () => {
            expect(typeof theAquarium.sortFishOwners).to.equal('function')
        })
    })

    describe('FishOwner', () => {
        var fishOwner
        beforeEach(() => {
            fishOwner = new FishOwner()
        })

        it('should have an .id property', () => {
            expect(fishOwner.hasOwnProperty('id')).to.be.ok
        })

        it('should have a .firstName property', () => {
            expect(fishOwner.hasOwnProperty('firstName')).to.be.ok
        })

        it('should have a .lastName property', () => {
            expect(fishOwner.hasOwnProperty('lastName')).to.be.ok
        })

        it('should have a .birthDate property', () => {
            expect(fishOwner.hasOwnProperty('birthDate')).to.be.ok
        })

        it('should have a .myAquarium reference', function () {
            expect(fishOwner.hasOwnProperty('myAquarium')).to.be.ok
        })

        describe('the allMyFishes property', function () {
            it('should have an .allMyFishes reference', function () {
                expect(fishOwner.hasOwnProperty('allMyFishes')).to.be.ok
            })

            it("should reference an array", function () {
                expect(Array.isArray(fishOwner.allMyFishes)).to.be.ok
            })
        })

        it("should have a .sortFishes function", function () {
            expect(typeof fishOwner.sortFishes).to.equal('function')
        })
    })
})