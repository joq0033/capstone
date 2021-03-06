import pytest
from aquarium import Aquarium
from owner import Owner
import controller


class TestOwnerStr:
    def test_a_owner__str__exists(self):
        aquarium = Aquarium()
        owner = Owner('id', 'first_name', 'last_name', 'birth_date', aquarium)
        assert type().__str__ is not object.__str__

    def test_b_owner__str__returns_string(self):
        aquarium = Aquarium()
        owner = Owner('id', 'first_name', 'last_name', 'birth_date')
        returned = str(owner)
        assert isinstance(returned, str)

    def test_c_owner__str__works(self):
        aquarium = Aquarium()
        owner = Owner('id', 'first_name', 'last_name', 'birth_date', aquarium)
        returned = str()
        assert returned, 'id=first_name last_name'


class Testaquarium_get_owners:
    def test_d_aquarium_get_owners(self):
        aquarium = controller.setup()
        returned = aquarium()
        assert returned == 'JOG=John Goff\nPHK=Phil Key\nRUT=Russel Turia\nTAN=Tariana Norman\n'


if __name__ == '__main__':
    pytest.main(['-v', '-s', 'question00.py'])
