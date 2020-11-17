from carpark import CarPark
from datetime import date


def setup():
    the_car_park = CarPark()

    the_car_park.add_zone(3, 'Cashel Mall')
    the_car_park.add_zone(1, 'Central City')
    the_car_park.add_zone(2, 'Madras Street')

    a_zone = the_car_park.find_zone(1)
    a_zone.add_client(6001, 'Maya', 'Thorne', date(2016, 1, 31), False)
    a_zone.add_client(6002, 'Carl', 'Umaga', date(2016, 7, 29), True)
    a_zone.add_client(6003, 'Anna', 'Kumar', date(2018, 2, 20), False)

    a_zone = the_car_park.find_zone(2)
    a_zone.add_client(7001, 'Jessica', 'Bush', date(2017, 2, 12), True)
    a_zone.add_client(7002, 'Marge', 'Clinton', date(2017, 4, 14), True)

    a_zone = the_car_park.find_zone(3)
    a_zone.add_client(8001, 'Jillian', 'Fleming', date(2018, 2, 14), False)

    return the_car_park


if __name__ == '__main__':
    a_car_park = setup()
    print(a_car_park.get_zones())
    print(a_car_park.get_those_with_two_clients())
