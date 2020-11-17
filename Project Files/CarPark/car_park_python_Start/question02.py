import pytest
from carpark import CarPark
from zone import Zone
import controller


class TestAddingFourZones:
    def test_a_has_3_zones(self):
        car_park = controller.setup()
        assert len(car_park.all_my_zones) == 3

    def test_b_zone_details(self):
        car_park = controller.setup()

        zone = car_park.all_my_zones[0]
        assert zone.id == 3
        assert zone.where == 'Cashel Mall'

        zone = car_park.all_my_zones[1]
        assert zone.id == 1
        assert zone.where == 'Central City'

        zone = car_park.all_my_zones[2]
        assert zone.id == 2
        assert zone.where == 'Madras Street'


if __name__ == '__main__':
    pytest.main(['-v', '-s', 'question02.py'])
