import pytest
from carpark import CarPark
from zone import Zone
import controller


class TestZoneStr:
    def test_a_zone__str__exits(self):
        car_park = CarPark()
        zone = Zone('id', 'where', car_park)
        assert type(zone).__str__ is not object.__str__

    def test_b_zone__str__returns_string(self):
        car_park = CarPark()
        zone = Zone('id', 'where', car_park)
        returned = str(zone)
        assert isinstance(returned, str)

    def test_c_zone__str__works(self):
        car_park = CarPark()
        zone = Zone('id', 'where', car_park)
        returned = str(zone)
        assert returned == 'id=where'


class TestCarParkGetZone:
    def test_d_kennel_get_zones(self):
        car_park = controller.setup()
        returned = car_park.get_zones()
        assert returned == '1=Central City\n2=Madras Street\n3=Cashel Mall\n'


if __name__ == '__main__':
    pytest.main(['-vv', '-s', 'question03.py'])
