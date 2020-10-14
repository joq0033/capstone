/* global describe beforeEach Controller it expect  */

describe('adding the three Doctors', () => { // eslint-disable-line no-unused-vars
  var theHospital
  beforeEach(() => {
    theHospital = Controller.setup()
  })

  it('should have added 3 Doctors', () => {
    expect(theHospital.allMyDoctors.length).toBe(3)
  })

  it('should have correctly set details for each Doctor', () => {
    let aDoctor = theHospital.sortDoctors()

    aDoctor = theHospital.allMyDoctors[0]
    expect(aDoctor).toBeDefined()
    expect(aDoctor.id).toBe('11')
    expect(aDoctor.firstName).toBe('Jian')
    expect(aDoctor.lastName).toBe('Xu')
    expect(aDoctor.office).toBe('N400')
    expect(aDoctor.fees).toBe(50)

    aDoctor = theHospital.allMyDoctors[1]
    expect(aDoctor).toBeDefined()
    expect(aDoctor.id).toBe('12')
    expect(aDoctor.firstName).toBe('Santosh')
    expect(aDoctor.lastName).toBe('Kumar')
    expect(aDoctor.office).toBe('A22')
    expect(aDoctor.fees).toBe(40)

    aDoctor = theHospital.allMyDoctors[2]
    expect(aDoctor).toBeDefined()
    expect(aDoctor.id).toBe('13')
    expect(aDoctor.firstName).toBe('Emily')
    expect(aDoctor.lastName).toBe('John')
    expect(aDoctor.office).toBe('W7')
    expect(aDoctor.fees).toBe(25)
  })
})
