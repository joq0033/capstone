import pytest
from sanctuary import Sanctuary
from owner import Owner


class TestOwnerHasOneElephant:
    def test_a_owner_has_one_elephant_exists(self):
        sanctuary = Sanctuary()
        owner = Owner('id', 'first_name', 'last_name', 'birth_date', sanctuary)
        assert hasattr(owner, 'has_one_elephant')
        assert callable(getattr(owner, 'has_one_elephant', None))

    def test_b_has_one_elephant_returns_false_with_0_elephant(self):
        sanctuary = Sanctuary()
        owner = Owner('id', 'first_name', 'last_name', 'birth_date', sanctuary)
        returned = owner.has_one_elephant()
        assert returned == False

    def test_c_has_one_elephant_returns_false_with_3_elephant(self):
        sanctuary = Sanctuary()
        owner = Owner('id', 'first_name', 'last_name', 'birth_date', sanctuary)
        owner.add_elephant('height', 'color', 'species', 'gender')
        owner.add_elephant('height', 'color', 'species', 'gender')
        owner.add_elephant('height', 'color', 'species', 'gender')
        returned = owner.has_one_elephant()
        assert returned == False

    def test_d_has_one_elephant_returns_true_with_1_elephant(self):
        sanctuary = Sanctuary()
        owner = Owner('id', 'first_name', 'last_name', 'birth_date', sanctuary)
        owner.add_elephant('height', 'color', 'species', 'gender')
        returned = owner.has_one_elephant()
        assert returned == True

    def test_e_has_one_elephant_returns_false_with_2_elephant(self):
        sanctuary = Sanctuary()
        owner = Owner('id', 'first_name', 'last_name', 'birth_date', sanctuary)
        owner.add_elephant('height', 'color', 'species', 'gender')
        owner.add_elephant('height', 'color', 'species', 'gender')
        returned = owner.has_one_elephant()
        assert returned == False


if __name__ == '__main__':
    pytest.main(['-v', '-s', 'question06.py'])
