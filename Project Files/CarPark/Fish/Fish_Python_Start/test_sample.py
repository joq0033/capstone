import pytest
from cattery import Cattery
from owner import Owner
import controller


class TestOwnerStr:
    def test_a_owner__str__exists(self):
        cattery = Cattery()
        owner = Owner('id', 'first_name', 'last_name', 'amount_owed', cattery)
        assert type(owner).__str__ is not object.__str__

    def test_b_owner__str__returns_string(self):
        cattery = Cattery()
        owner = Owner('id', 'first_name', 'last_name', 'amount_owed', cattery)
        returned = str(owner)
        assert isinstance(returned, str)

    def test_c_owner__str__works(self):
        cattery = Cattery()
        cattery = Cattery()
        owner = Owner('id', 'first_name', 'last_name', 'amount_owed', cattery)
        returned = str(owner)
        assert returned == 'first_name, last_name [id]'


class TestCatteryGetOwners:
    def test_cattery_get_owners(self):
        cattery = controller.setup()
        returned = cattery.get_owners()
        assert returned == 'Irene, Aitkin [165]\nCasey, van Dyke [23]\nTemepara, Williams [4]\nRuth, George [7]\n'


if __name__ == '__main__':
    pytest.main(['-v', '-s', 'question03.py'])
