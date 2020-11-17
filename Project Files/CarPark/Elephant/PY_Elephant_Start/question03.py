import pytest
from sanctuary import Sanctuary
from owner import Owner
import controller


class TestOwnerStr:
    def test_a_owner__str__exits(self):
        sanctuary = Sanctuary()
        owner = Owner('id', 'first_name', 'last_name', 'birth_date', sanctuary)
        assert type(owner).__str__ is not object.__str__

    def test_b_owner__str__returns_string(self):
        sanctuary = Sanctuary()
        owner = Owner('id', 'first_name', 'last_name', 'birth_date', sanctuary)
        returned = str(owner)
        assert isinstance(returned, str)

    def test_c_owner__str__works(self):
        sanctuary = Sanctuary()
        owner = Owner('id', 'first_name', 'last_name', 'birth_date', sanctuary)
        returned = str(owner)
        assert returned == 'first_name, last_name [id]'


class TestSanctuaryGetOwner:
    def test_d_kennel_get_owners(self):
        sanctuary = controller.setup()
        returned = sanctuary.get_owners()
        assert returned == 'Joby, Thomas [JOT]\nRussel, Turia [RUT]\nTariana, Norman [TAN]\nJohn, Goff [JOG]\n'


if __name__ == '__main__':
    pytest.main(['-v', '-s', 'question02.py'])
