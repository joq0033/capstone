from aquarium import Aquarium
from datetime import date


# noinspection SpellCheckingInspection
def setup():
    the_aquarium = Aquarium()
	
	# ADD CODE HERE TO CREATE OWNER
    # ID	First Name	Last Name	Birth Date
    # PHK    Phil         Key     8/05/1980
    # RUT    Russel       Turia   16/02/1984
    # TAN    Tariana      Norman  30/11/1987
    # JOG    John         Goff    12/13/1982

	# ADD CODE HERE TO CREATE FISH
    # FishOwner ID    Colour         Breed             Gender       Cost
    #    PHK          Purple     Siamese Fighting Fish    M        $2.55
    #    RUT          Orange        Carp                  F        $5.56
    #    RUT          Gold          Carp                  F       $10.99
    #    JOG          Grey         Shark                  M       $123.45
    #    JOG          Black        Killer Whale           M     $5,000.01
    #    TAN          Gold         GoldFish               F        $9.87

    return the_aquarium


if __name__ == '__main__':
    an_aquarium = setup()
    print(an_aquarium.get_owners())
    print(an_aquarium.get_those_with_two_fish())
