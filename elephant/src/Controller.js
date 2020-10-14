/* global Sanctuary */
class Controller { // eslint-disable-line no-unused-vars
  static setup () {
    let theSanctuary, anElephantOwner
    theSanctuary = new Sanctuary()
    // ADD CODE HERE TO CREATE THE ELEPHANTOWNERS

    /*
    ID   First Name     Last Name  Birth Date
    JOT  Joby           Thomas     09/04/1990
    ATR  Adam           Taylor     07/09/1980
    RWM  Robert         Wiliam     31/07/1986
    TPL  Tania          Paul       02/08/1995
    */
    // ADD CODE HERE TO CREATE THE ELEPHANT
    theSanctuary.addElephantOwner ('JOT', 'Joby', 'Thomas', new Date(1990, 3, 9))
    theSanctuary.addElephantOwner ('ATR', 'Adam', 'Taylor', new Date(1980, 8, 7))
    theSanctuary.addElephantOwner ('RWM', 'Robert', 'William', new Date(1986, 6, 31))
    theSanctuary.addElephantOwner ('TPL', 'Tania', 'Paul', new Date(1995, 7, 2))
    /*
    FishOwner ID    Colour         Species         Gender       Height
    JOT             Greyish Brown  Asian               M        11ft
    RWM             Brown          African bush        F        10ft
    ATR             Grey           Asian               F        7ft
    TPL             Grey           African forest      M        13ft
    JOT             Black          African bush        M        12ft
    */
    anElephantOwner = theSanctuary.findElephantOwner('JOT')
    anElephantOwner.addElephant('Greyish Brown', 'Asian', 'M', 11)
    
    anElephantOwner = theSanctuary.findElephantOwner('RWM')
    anElephantOwner.addElephant('Brown', 'African bush', 'F', 10)
    
    anElephantOwner = theSanctuary.findElephantOwner('ATR')
    anElephantOwner.addElephant('Grey', 'Asian', 'F', 7)
    
    anElephantOwner = theSanctuary.findElephantOwner('TPL')
    anElephantOwner.addElephant('Grey', 'African forest', 'M', 13)
    
    anElephantOwner = theSanctuary.findElephantOwner('JOT')
    anElephantOwner.addElephant('Black', 'African bush', 'M', 12)
    
    
    
    return theSanctuary
  }
}
