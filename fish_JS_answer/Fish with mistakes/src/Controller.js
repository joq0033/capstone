class Controller {

	static setup  () {
		var theAquarium, theFishOwner;
		theAquarium = new Aquarium();
		/*
		ID	First Name	Last Name	Birth Date
		PHK    Phil         Key     8/05/1980
		RUT    Russel       Turia   16/02/1984
		TAN    Tariana      Norman  30/11/1987
		JOG    John         Goff    12/13/1982
		*/
		theAquarium.addFishOwner('PHK', 'Phil', 'Key', new Date(1980, 4, 8) )
		theAquarium.addFishOwner('RUT', 'Russel', 'Turia', new Date(1984, 1, 16) )
		theAquarium.addFishOwner('TAN', 'Tariana', 'Norman', new Date(1987, 10, 30) )
		theAquarium.addFishOwner('JOG', 'John', 'Goff', new Date(1982, 11, 12) )

		/*
		FishOwner ID    Colour         Breed             Gender       Cost

		   PHK          Purple     Siamese Fighting Fish    M        $2.55

		   RUT          Orange        Carp                  F        $5.56

		   RUT          Gold          Carp                  F       $10.99

		   JOG          Grey         Shark                  M       $123.45

		   JOG          Black        Killer Whale           M     $5,000.01

		   TAN          Gold         GoldFish               F        $9.87
		*/
		theFishOwner = theAquarium.findFishOwner('PHK')
		theFishOwner.addFish(2.55, 'Purple', 'Siamese Fighting Fish', 'M')

		theFishOwner = theAquarium.findFishOwner('RUT')
		theFishOwner.addFish(5.56, 'Orange', 'Carp', 'F')
		theFishOwner.addFish(10.99, 'Gold', 'Carp', 'F')

		theFishOwner = theAquarium.findFishOwner('JOG')
		theFishOwner.addFish(123.45, 'Grey', 'Shark', 'M')
		theFishOwner.addFish(5000.01, 'Black', 'Killer Whale', 'M')

		theFishOwner = theAquarium.findFishOwner('TAN')
		theFishOwner.addFish(9.87, 'Gold', 'GoldFish', 'F')
		return theAquarium
	}
}