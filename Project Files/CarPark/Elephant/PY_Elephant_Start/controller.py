from sanctuary import Sanctuary
from datetime import date


def setup():
    the_sanctuary = Sanctuary()

	# ADD CODE HERE TO CREATE THE ELEPHANTOWNERS

    # ID   First Name     Last Name  Birth Date
    # JOT  Joby           Thomas     09/04/1990
    # ATR  Adam           Taylor     07/09/1980
    # RWM  Robert         Wiliam     31/07/1986
    # TPL  Tania          Paul       02/08/1995

	# ADD CODE HERE TO CREATE THE ELEPHANT

    # FishOwner ID    Colour         Species         Gender       Height
    # JOT             Greyish Brown  Asian               M        11ft
    # RWM             Brown          African bush        F        10ft
    # ATR             Grey           Asian               F        7ft
    # TPL             Grey           African forest      M        13ft
    # JOT             Black          African bush        M        12ft

    return the_sanctuary


if __name__ == '__main__':
    an_sanctuary = setup()
    print(an_sanctuary.get_owners())
    print(an_sanctuary.get_those_with_one_elephant())
