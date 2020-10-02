class Controller {
	static setup () {
		var theHospital
		theHospital = new Hospital()
		// ADD CODE HERE TO CREATE THE DOCTORS

		/*
		  ID    Last Name    First Name   Office  Fees
		  11     Xu            Jian       N400    $50
		  13     John          Emily      W7      $25
		  12     Kumar         Santosh    A2      $40
		*/

		//ADD CODE HERE TO CREATE THE PATIENTS

		/*
		  ID   Last Name      First Name  Fees Owing    Doctor ID
		  200  Fisher          Shelleyu     0            11
		  400  Koirala          Kimi       25            12
		  300  Chen             Liang      40            12
		  500  Ahmed            Riyaz       0            13
		  100  Knightly         Jude       30            11
		*/

		return theHospital
	}
}