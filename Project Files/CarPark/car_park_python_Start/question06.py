import pytest
from carpark import CarPark
from zone import Zone


class TestZoneHasTwoClients:
    def test_a_ownerzone_has_two_clients_exists(self):
        car_park = CarPark()
        zone = Zone('id', 'where', car_park)
        assert hasattr(zone, 'has_two_clients')
        assert callable(getattr(zone, 'has_two_clients', None))

    def test_b_has_two_clients_returns_false_with_0_clients(self):
        car_park = CarPark()
        zone = Zone('id', 'where', car_park)
        returned = zone.has_two_clients()
        assert returned == False

    def test_c_has_two_clients_returns_false_with_1_client(self):
        car_park = CarPark()
        zone = Zone('id', 'where', car_park)
        zone.add_client('id', 'personal_name', 'family_name', 'birth_day', 'is_permanent')
        returned = zone.has_two_clients()
        assert returned == False

    def test_d_has_two_clients_returns_true_with_2_clients(self):
        car_park = CarPark()
        zone = Zone('id', 'where', car_park)
        zone.add_client('id', 'personal_name', 'family_name', 'birth_day', 'is_permanent')
        zone.add_client('id', 'personal_name', 'family_name', 'birth_day', 'is_permanent')
        returned = zone.has_two_clients()
        assert returned == True

    def test_e_has_two_clients_returns_false_with_3_clients(self):
        car_park = CarPark()
        zone = Zone('id', 'where', car_park)
        zone.add_client('id', 'personal_name', 'family_name', 'birth_day', 'is_permanent')
        zone.add_client('id', 'personal_name', 'family_name', 'birth_day', 'is_permanent')
        zone.add_client('id', 'personal_name', 'family_name', 'birth_day', 'is_permanent')
        returned = zone.has_two_clients()
        assert returned == False


if __name__ == '__main__':
    pytest.main(['-v', '-s', 'question06.py'])
