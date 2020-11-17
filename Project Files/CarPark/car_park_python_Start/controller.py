from carpark import CarPark
from datetime import date


def setup():
    the_car_park = CarPark()
	
	# id	Where
    # 3 	Cashel Mall  
    # 1 	Central City  
    # 2 	Madras Street  
	# ADD CODE HERE TO CREATE THE ZONES

	# zone	id		personal name	family name		birth date		is permanent
	# 1 	6001 	Maya 			Thorne 			31 Jan 2016 	no   
    # 1 	6002 	Carl 			Umaga 			29 Aug 2016 	yes   
    # 2 	7001 	Jessica 		Bush 			31 March 2017 	yes   
    # 2 	7002 	Marge 			Clinton 		14 May 2017 	yes   
    # 3 	8001 	Jillian 		Fleming 		14 Feb 2018 	no   
    # 1 	6003 	Anna 			Kumar 			31 March 2018 	no   
    # ADD CODE HERE TO CREATE THE CLIENTS

    return the_car_park


if __name__ == '__main__':
    a_car_park = setup()
    # print(a_car_park.get_zones())
    # print(a_car_park.get_those_with_two_clients())
