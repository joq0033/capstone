import pytest
from carpark import CarPark
from zone import Zone


class TestStartingCarParkCode:

    def test_a_car_park_collection(self):
        car_park = CarPark()
        assert hasattr(car_park, 'all_my_zones')
        assert type(car_park.all_my_zones) == list

    def test_b_car_park_add_zone(self):
        car_park = CarPark
        assert hasattr(car_park, 'add_zone')
        assert callable(getattr(car_park, 'add_zone', None))

    def test_c_car_park_find_zone(self):
        car_park = CarPark
        assert hasattr(car_park, 'find_zone')
        assert callable(getattr(car_park, 'find_zone', None))

    def test_d_car_park_sort_zones(self):
        car_park = CarPark
        assert hasattr(car_park, 'sort_zones')
        assert callable(getattr(car_park, 'sort_zones', None))


class TestStartingZoneCode:
    def test_a_zone_properties(self):
        car_park = CarPark()
        zone = Zone('21', 'Cebu', car_park)
        assert hasattr(zone, 'id')
        assert hasattr(zone, 'where')
        assert hasattr(zone, 'my_car_park')
        assert hasattr(zone, 'all_my_clients')
        assert type(zone.all_my_clients) == list

    def test_b_zone_methods(self):
        car_park = CarPark()
        zone = Zone('21', 'Cebu', car_park)
        assert hasattr(zone, 'sort_clients')
        assert callable(getattr(zone, 'sort_clients', None))


if __name__ == '__main__':
    pytest.main(['-v', '-s', 'question00.py'])
