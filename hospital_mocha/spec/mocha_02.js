describe('Question Two', () => {
  describe('adding the three Doctors', () => {
	var theHospital
    beforeEach(() => {
  	theHospital = Controller.setup()
    })

    it('should have added 3 Doctors', () => {
  	expect(theHospital.allMyDoctors.length).to.equal(3)
    })

    it('should have correctly set details for each Doctor', () => {
	  var aDoctor
	  aDoctor = theHospital.allMyDoctors[0]
	  expect(aDoctor).not.to.be.undefined
	  expect(aDoctor.id).to.equal('11')
	  expect(aDoctor.firstName).to.equal('Jian')
	  expect(aDoctor.lastName).to.equal('Xu')
	  expect(aDoctor.office).to.equal('N400')
	  expect(aDoctor.fees).to.equal(50)

	  aDoctor = theHospital.allMyDoctors[2]
	  expect(aDoctor).not.to.be.undefined
	  expect(aDoctor.id).to.equal('12')
	  expect(aDoctor.firstName).to.equal('Santosh')
	  expect(aDoctor.lastName).to.equal('Kumar')
	  expect(aDoctor.office).to.equal('A22')
	  expect(aDoctor.fees).to.equal(40)

	  aDoctor = theHospital.allMyDoctors[1]
	  expect(aDoctor).not.to.be.undefined
	  expect(aDoctor.id).to.equal('13')
	  expect(aDoctor.firstName).to.equal('Emily')
	  expect(aDoctor.lastName).to.equal('John')
	  expect(aDoctor.office).to.equal('W7')
	  expect(aDoctor.fees).to.equal(25)
    })
  })
})