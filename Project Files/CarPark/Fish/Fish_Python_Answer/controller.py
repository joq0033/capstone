from aquarium import Aquarium
from datetime import date


# noinspection SpellCheckingInspection
def setup():
    the_aquarium = Aquarium()
    # ID	First Name	Last Name	Birth Date
    # PHK    Phil         Key     8/05/1980
    # RUT    Russel       Turia   16/02/1984
    # TAN    Tariana      Norman  30/11/1987
    # JOG    John         Goff    12/13/1982
    the_aquarium.add_owner('PHK', 'Phil', 'Key', date(1980, 5, 8))
    the_aquarium.add_owner('RUT', 'Russel', 'Turia', date(1984, 2, 16))
    the_aquarium.add_owner('TAN', 'Tariana', 'Norman', date(1987, 11, 30))
    the_aquarium.add_owner('JOG', 'John', 'Goff', date(1982, 12, 12))

    # FishOwner ID    Colour         Breed             Gender       Cost
    #    PHK          Purple     Siamese Fighting Fish    M        $2.55
    #    RUT          Orange        Carp                  F        $5.56
    #    RUT          Gold          Carp                  F       $10.99
    #    JOG          Grey         Shark                  M       $123.45
    #    JOG          Black        Killer Whale           M     $5,000.01
    #    TAN          Gold         GoldFish               F        $9.87

    an_owner = the_aquarium.find_owner('PHK')
    an_owner.add_fish(2.55, 'Purple', 'Siamese Fighting Fish', 'M')

    an_owner = the_aquarium.find_owner('RUT')
    an_owner.add_fish(5.56, 'Orange', 'Carp', 'F')
    an_owner.add_fish(10.99, 'Gold', 'Carp', 'F')

    an_owner = the_aquarium.find_owner('JOG')
    an_owner.add_fish(123.45, 'Grey', 'Shark', 'M')
    an_owner.add_fish(5000.01, 'Black', 'Killer Whale', 'M')

    an_owner = the_aquarium.find_owner('TAN')
    an_owner.add_fish(9.87, 'Gold', 'GoldFish', 'F')

    return the_aquarium


if __name__ == '__main__':
    an_aquarium = setup()
    print(an_aquarium.get_owners())
    print(an_aquarium.get_those_with_two_fish())
