from sanctuary import Sanctuary
from datetime import date


def setup():
    the_sanctuary = Sanctuary()

    the_sanctuary.add_owner('JOT', 'Joby', 'Thomas', date(1990, 4, 9))
    the_sanctuary.add_owner('RUT', 'Russel', 'Turia', date(1984, 2, 16))
    the_sanctuary.add_owner('TAN', 'Tariana', 'Norman', date(1987, 11, 30))
    the_sanctuary.add_owner('JOG', 'John', 'Goff', date(1982, 12, 12))

    an_owner = the_sanctuary.find_owner('JOT')
    an_owner.add_elephant('11ft', 'Greyish Brown', 'Asian',  'M')
    an_owner.add_elephant('12ft', 'Black', 'African Bush', 'M')

    an_owner = the_sanctuary.find_owner('JOG')
    an_owner.add_elephant('10ft', 'Brown', 'African Bush', 'F')

    an_owner = the_sanctuary.find_owner('TAN')
    an_owner.add_elephant('7ft', 'Grey', 'Asian', 'F')

    an_owner = the_sanctuary.find_owner('RUT')
    an_owner.add_elephant('13ft', 'Grey', 'African Forest', 'M')

    return the_sanctuary


if __name__ == '__main__':
    an_sanctuary = setup()
    print(an_sanctuary.get_owners())
    print(an_sanctuary.get_those_with_one_elephant())
