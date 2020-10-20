describe('Question Seven', () => {
  describe('The toString method of the Patient class', () => {
    let aPatient = new Patient('personal_name', 'family_name')
    it('should be defined', () => {
      expect(Object.getOwnPropertyNames(Patient.prototype)).to.contain('toString')
    })
    
    it('should return a string', () => {
      expect(typeof aPatient.toString()).to.be.equal('string')
    })

    it('should NOT be hard coded', () => {
      let aPatient = new Patient('newId', 'newLastName', 'newFirstName', 'newFeesOwing', 'theDoctor')
      expect(aPatient.toString()).to.be.equal('newLastName newFirstName')
    })
  })    

  describe('The getBillablePatients function in the Hospital class', () => {
    let theHospital
    beforeEach(
            () => {
              theHospital = Controller.setup()
            })

    it('should be defined', () => {
      expect(theHospital.getBillablePatients).not.to.be.undefined
    })
    it('should return a string', () => {
      expect(theHospital.getBillablePatients).not.to.be.undefined
    })

    it('Should NOT be hard coded', () => {
      theHospital = new Hospital()
      expect(theHospital.getBillablePatients()).to.be.equal('')
    })
    /* 
    '11 - Xu Jian.\nKnightly Jude\n12 - Kumar Santosh.\nChen Liang\nKoirala Kimi\n13 - John Emily.\n'
    */
    it('should have the correct output', () => {
      expect(theHospital.getBillablePatients()).to.be.equal('11 - Xu Jian.\nKnightly Jude\n12 - Kumar Santosh.\nChen Liang\nKoirala Kimi\n13 - John Emily.\n')
    })
  })
})
