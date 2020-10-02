/*global describe beforeEach Controller it expect Hospital Doctor Patient*/

describe('Question Seven', () => {

  describe('The toString method of the Patient class', () => {
    let aPatient = new Patient('personal_name', 'family_name')
    it('should be defined', () => {
      expect(Object.getOwnPropertyNames(Patient.prototype)).toContain('toString')
    })
    
    it('should return a string', () => {
      expect(typeof aPatient.toString()).toBe('string')
    })

    it('should NOT be hard coded', () => {
      let aPatient = new Patient('newId', 'newLastName', 'newFirstName', 'newFeesOwing', 'theDoctor')
      expect(aPatient.toString()).toBe('newLastName newFirstName')
    })
  })    

  describe('The getBillablePatients function in the Hospital class', () => {
    let theHospital
    beforeEach(
            () => {
              theHospital = Controller.setup()
            }
        )

    it('should be defined', () => {
      expect(theHospital.getBillablePatients).toBeDefined()
    })
    it('should return a string', () => {
      expect(theHospital.getBillablePatients).toBeDefined()
    })

    it('Should NOT be hard coded', () => {
      theHospital = new Hospital()
      expect(theHospital.getBillablePatients()).toBe('')
    })
    /* 
    '11 - Xu Jian.\nKnightly Jude\n12 - Kumar Santosh.\nChen Liang\nKoirala Kimi\n13 - John Emily.\n'
    */
    it('should have the correct output', () => {
      expect(theHospital.getBillablePatients()).toBe('11 - Xu Jian.\nKnightly Jude\n12 - Kumar Santosh.\nChen Liang\nKoirala Kimi\n13 - John Emily.\n')
    })
  })
})
