class Controller {
	static setup () {
		var theHospital
		theHospital = new Hospital()
		// ADD CODE HERE TO CREATE THE DOCTORS
    theHospital.addDoctor('11', 'Jian', 'Xu', 'N400', 50)
    theHospital.addDoctor('13', 'Emily', 'John', 'W7', 25)
    theHospital.addDoctor('12', 'Santosh', 'Kumar',  'A22', 40)

		/*
		  ID    Last Name    First Name   Office  Fees
		  11     Xu            Jian       N400    $50
		  13     John          Emily      W7      $25
		  12     Kumar         Santosh    A22     $40
		*/

		//ADD CODE HERE TO CREATE THE PATIENTS
    let  theDoctor = theHospital.findDoctor('11')
    theDoctor.addPatient('200', 'Fisher', 'Shelley', 0)
    
    theDoctor = theHospital.findDoctor('12')
    theDoctor.addPatient('400', 'Koirala', 'Kimi', 25)
    theDoctor.addPatient('300', 'Chen', 'Liang', 40)
    
    theDoctor = theHospital.findDoctor('13')
    theDoctor.addPatient('500', 'Ahmed', 'Riyaz', 0)
    
    theDoctor = theHospital.findDoctor('11')
    theDoctor.addPatient('100', 'Knightly', 'Jude', 30)
    
		/*
		  ID   Last Name      First Name  Fees Owing    Doctor ID
		  200  Fisher          Shelley      0            11
		  400  Koirala          Kimi       25            12
		  300  Chen             Liang      40            12
		  500  Ahmed            Riyaz       0            13
		  100  Knightly         Jude       30            11
		*/

		return theHospital
	}
}