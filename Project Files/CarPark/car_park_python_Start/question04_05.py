import pytest
from carpark import CarPark
from client import Client
from zone import Zone
from datetime import date
import controller


class TestClientProperties:
    def test_a_client_id(self):
        client = Client('id', 'personal_name', 'family_name', 'birth_day', 'is_permanent', 'the_zone')
        assert hasattr(client, 'id')
        assert client.id == 'id'

    def test_b_client_height(self):
        client = Client('id', 'personal_name', 'family_name', 'birth_day', 'is_permanent', 'the_zone')
        assert hasattr(client, 'personal_name')
        assert client.personal_name == 'personal_name'

    def test_c_client_family_name(self):
        client = Client('id', 'personal_name', 'family_name', 'birth_day', 'is_permanent', 'the_zone')
        assert hasattr(client, 'family_name')
        assert client.family_name == 'family_name'

    def test_d_client_birth_day(self):
        client = Client('id', 'personal_name', 'family_name', 'birth_day', 'is_permanent', 'the_zone')
        assert hasattr(client, 'birth_day')
        assert client.birth_day == 'birth_day'

    def test_e_client_is_permanent(self):
        client = Client('id', 'personal_name', 'family_name', 'birth_day', 'is_permanent', 'the_zone')
        assert hasattr(client, 'is_permanent')
        assert client.is_permanent == 'is_permanent'


class TestAddClient:
    def test_f_owner_add_client_exists(self):
        car_park = CarPark()
        zone = Zone('id', 'where', car_park)
        assert hasattr(zone, 'add_client')
        assert callable(getattr(zone, 'add_client', None))

    def test_g_add_client_increases_client_count(self):
        car_park = CarPark()
        zone = Zone('id', 'where', car_park)
        zone.add_client('id1', 'personal_name1', 'family_name1', 'birth_day1', 'is_permanent1')
        assert len(zone.all_my_clients) == 1
        zone.add_client('id2', 'personal_name2', 'family_name2', 'birth_day2', 'is_permanent2')
        assert len(zone.all_my_clients) == 2


class TestControllerAddClientToZones:
    def test_h_zones_have_correct_client_numbers(self):
        car_park = controller.setup()

        zone = car_park.find_zone(1)
        assert len(zone.all_my_clients) == 3

        zone = car_park.find_zone(2)
        assert len(zone.all_my_clients) == 2

        zone = car_park.find_zone(3)
        assert len(zone.all_my_clients) == 1

    def test_i_client_details(self):
        car_park = controller.setup()

        zone = car_park.find_zone(1)
        a_client = zone.all_my_clients[0]
        assert a_client.id == 6001
        assert a_client.personal_name == 'Maya'
        assert a_client.family_name == 'Thorne'
        assert a_client.birth_day == date(2016, 1, 31)
        assert a_client.is_permanent == False
        a_client = zone.all_my_clients[1]
        assert a_client.id == 6002
        assert a_client.personal_name == 'Carl'
        assert a_client.family_name == 'Umaga'
        assert a_client.birth_day == date(2016, 7, 29)
        assert a_client.is_permanent == True
        a_client = zone.all_my_clients[2]
        assert a_client.id == 6003
        assert a_client.personal_name == 'Anna'
        assert a_client.family_name == 'Kumar'
        assert a_client.birth_day == date(2018, 2, 20)
        assert a_client.is_permanent == False

        zone = car_park.find_zone(2)
        a_client = zone.all_my_clients[0]
        assert a_client.id == 7001
        assert a_client.personal_name == 'Jessica'
        assert a_client.family_name == 'Bush'
        assert a_client.birth_day == date(2017, 2, 12)
        assert a_client.is_permanent == True
        a_client = zone.all_my_clients[1]
        assert a_client.id == 7002
        assert a_client.personal_name == 'Marge'
        assert a_client.family_name == 'Clinton'
        assert a_client.birth_day == date(2017, 4, 14)
        assert a_client.is_permanent == True

        zone = car_park.find_zone(3)
        a_client = zone.all_my_clients[0]
        assert a_client.id == 8001
        assert a_client.personal_name == 'Jillian'
        assert a_client.family_name == 'Fleming'
        assert a_client.birth_day == date(2018, 2, 14)
        assert a_client.is_permanent == False


if __name__ == '__main__':
    pytest.main(['-vv', '-s', 'question04_05.py'])
