describe('Question Six', () => {
	'use strict'
    describe('client.isTemp function', () => {
        let aClient
		beforeEach(() => {
			aClient = new Client()
		})
        
        it('should exist', () => {
            expect(aClient.isTemp()).not.to.be.undefined
        })
        
        it('should return a boolean', () => {
            expect(typeof aClient.isTemp()).to.equal('boolean')
        })

        it('should return true if the .isPermanent property is false.', () => {
            let aClient = new Client(null, null, null, null, null, false)
            expect(aClient.isTemp()).to.equal(true)
        })
            
        it('should return false if the .isPermanent property is true.', () => {
            let aClient = new Client(null, null, null, null, null, true)
            expect(aClient.isTemp()).to.equal(false)
        })
    })
})