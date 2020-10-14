class Controller { 
 
  static setup () {
    let  theCarPark = new CarPark()
    /*
      3 Cashel Mall  
      1 Central City  
      2 Madras Street  
    */  
    // ADD CODE HERE TO CREATE THE ZONES
    theCarPark.addZone(3, 'Cashel Mall')
    theCarPark.addZone(1, 'Central City')
    theCarPark.addZone(2, 'Madras Street')    

    /*
    1 6001 Maya Thorne 31 Jan 2016 no   
    1 6002 Carl Umaga 29 Aug 2016 yes   
    2 7001 Jessica Bush 31 March 2017 yes   
    2 7002 Marge Clinton 14 May 2017 yes   
    3 8001 Jillian Fleming 14 Feb 2018 no   
    1 6003 Anna Kumar 31 March 2018 no   
    */
    //ADD CODE HERE TO CREATE THE CLIENTS
    let aZone
    aZone = theCarPark.findZone(1)
    aZone.addClient(6001, 'Maya', 'Thorne', new Date(2016, 0, 31), false)
    aZone.addClient(6002, 'Carl', 'Umaga', new Date(2016, 7, 29), true)
    aZone.addClient(6003, 'Anna', 'Kumar', new Date(2018, 2, 31), false)
    
    aZone = theCarPark.findZone(2)
    aZone.addClient(7001, 'Jessica', 'Bush', new Date(2017, 2, 31), true)
    aZone.addClient(7002, 'Marge', 'Clinton', new Date(2017, 4, 14), true)
    
    aZone = theCarPark.findZone(3)
    aZone.addClient(8001, 'Jillian', 'Fleming', new Date(2018, 2, 14), false)
    
    
   return theCarPark
  }
}