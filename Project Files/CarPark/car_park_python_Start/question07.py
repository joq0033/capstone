import pytest
from carpark import CarPark
from client import Client
import controller


class TestClientStr:
    def test_a_client__str__exists(self):
        client = Client('id', 'personal_name', 'family_name', 'birth_day', 'is_permanent', 'the_car_park')
        assert type(client).__str__ is not object.__str__

    def test_b_elephant__str__works(self):
        client = Client('id', 'personal_name', 'family_name', 'birth_day', 'is_permanent', 'the_car_park')
        returned = str(client)
        assert returned == 'personal_name family_name'


class TestCarPark_get_those_with_two_clients:
    def test_c_car_park_get_those_with_two_clients_exists(self):
        car_park = CarPark()
        assert hasattr(car_park, 'get_those_with_two_clients')
        assert callable(getattr(car_park, 'get_those_with_two_clients', None))

    def test_d_car_park_get_those_with_two_clients_returns_string(self):
        car_park = CarPark()
        returned = car_park.get_those_with_two_clients()
        assert isinstance(returned, str)

    def test_e_car_park_get_those_with_two_clients_not_hard_coded(self):
        car_park = CarPark()
        returned = car_park.get_those_with_two_clients()
        assert len(returned) == 0

    # noinspection SpellCheckingInspection
    def test_f_car_park_get_those_with_two_clients_works(self):
        car_park = controller.setup()
        returned = car_park.get_those_with_two_clients()
        assert returned == '  Maya Thorne\n''  Carl Umaga\n''  Anna Kumar\n''2=Madras Street\n''  Jessica Bush\n''  Marge Clinton\n''  Jillian Fleming\n'


if __name__ == '__main__':
    pytest.main(['-vv', '-s', 'question07.py'])
