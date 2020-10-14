describe('Question Four and Question Five', () => {
  'use strict'
  describe('Client', () => {
    let client
	beforeEach(() => {
	  client = new Client()
	})

    it('should have an .myZone reference', () => {
      expect(client.hasOwnProperty('myZone')).to.be.ok
    })

    it('should have a .id property', () => {
      expect(client.hasOwnProperty('id')).to.be.ok
    })

    it('should have a .personalName property', () => {
      expect(client.hasOwnProperty('personalName')).to.be.ok
    })

    it('should have a .familyName property', () => {
      expect(client.hasOwnProperty('familyName')).to.be.ok
    })

    it('should have a .birthday property', () => {
        expect(client.hasOwnProperty('birthday')).to.be.ok
    })
    it('should have a .isPermanent property', () => {
        expect(client.hasOwnProperty('isPermanent')).to.be.ok
    })
  })
  
  describe('write a Zone.addClient function to add the Clients', () => {
    var theCarPark
    beforeEach(() => {
        var theController
        theCarPark = Controller.setup()
    })

    it('Zone 1 should have 3 Clients', () => {
        var theZone = theCarPark.findZone(1)
        expect(theZone.allMyClients.length).to.equal(3)
    })
    
   it('Zone 2 should have 2 Clients', () => {
        var theZone = theCarPark.findZone(2)
        expect(theZone.allMyClients.length).to.equal(2)
    })
    
    it('Zone 3 should have 1 Client', () => {
        var theZone = theCarPark.findZone(3)
        expect(theZone.allMyClients.length).to.equal(1)
    })

    it('should correctly set client details', () => {
        /*
        1 6001 Maya Thorne 31 Jan 2016 no
        1 6002 Carl Umaga 29 Aug 2016 yes
        2 7001 Jessica Bush 31 March 2016 yes
        2 7002 Marge Clinton 14 May 2017 yes
        3 8001 Jillian Fleming 14 Feb 2018 no
        1 6003 Anna Kumar 31 March 2018 no
        */
        var aClient, theZone
        theZone = theCarPark.findZone(1)

        //1 6001 Maya Thorne 31 Jan 2016 no
        aClient = theZone.allMyClients[0]
        expect(aClient.myZone).to.deep.equal(theZone)
        expect(aClient.id).to.equal(6001)
        expect(aClient.personalName).to.equal('Maya')
        expect(aClient.familyName).to.equal('Thorne')
        expect(aClient.birthday).to.deep.equal(new Date(2016, 0, 31))
        expect(aClient.isPermanent).to.equal(false)

        //1 6002 Carl Umaga 29 Aug 2016 yes
        aClient = theZone.allMyClients[1]
        expect(aClient.myZone).to.deep.equal(theZone)
        expect(aClient.id).to.equal(6002)
        expect(aClient.personalName).to.equal('Carl')
        expect(aClient.familyName).to.equal('Umaga')
        expect(aClient.birthday).to.deep.equal(new Date(2016, 7, 29))
        expect(aClient.isPermanent).to.equal(true)

        //1 6003 Anna Kumar 31 March 2018 no
        aClient = theZone.allMyClients[2]
        expect(aClient.myZone).to.deep.equal(theZone)
        expect(aClient.id).to.equal(6003)
        expect(aClient.personalName).to.equal('Anna')
        expect(aClient.familyName).to.equal('Kumar')
        expect(aClient.birthday).to.deep.equal(new Date(2018, 2, 31))
        expect(aClient.isPermanent).to.equal(false)

        theZone = theCarPark.findZone(2)

        aClient = theZone.allMyClients[0]
        //2 7001 Jessica Bush 31 March 2017 yes
        expect(aClient.myZone).to.deep.equal(theZone)
        expect(aClient.id).to.equal(7001)
        expect(aClient.personalName).to.equal('Jessica')
        expect(aClient.familyName).to.equal('Bush')
        expect(aClient.birthday).to.deep.equal(new Date(2017, 2, 31))
        expect(aClient.isPermanent).to.equal(true)

        //2 7002 Marge Clinton 14 May 2017 yes
        aClient = theZone.allMyClients[1]
        expect(aClient.myZone).to.deep.equal(theZone)
        expect(aClient.id).to.equal(7002)
        expect(aClient.personalName).to.equal('Marge')
        expect(aClient.familyName).to.equal('Clinton')
        expect(aClient.birthday).to.deep.equal(new Date(2017, 4, 14))
        expect(aClient.isPermanent).to.equal(true)

         theZone = theCarPark.findZone(3)
        //3 8001 Jillian Fleming 14 Feb 2018 no
        aClient = theZone.allMyClients[0]
        expect(aClient.myZone).to.deep.equal(theZone)
        expect(aClient.id).to.equal(8001)
        expect(aClient.personalName).to.equal('Jillian')
        expect(aClient.familyName).to.equal('Fleming')
        expect(aClient.birthday).to.deep.equal(new Date(2018, 2, 14))
        expect(aClient.isPermanent).to.equal(false)
    })
  })
})