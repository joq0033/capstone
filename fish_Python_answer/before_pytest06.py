import pytest
from aquarium import Aquarium
from owner import Owner


class TestOwnerHasOneFish:
    def test_a_owner_has_two_fish_exists(self):
        aquarium = Aquarium()
        owner = Owner('id', 'first_name', 'last_name', 'birth_date')
        assert hasattr(owner, 'has_two_fish')
        assert callable(getattr(owner, 'has_two_fish', None))

    def test_b_has_two_fish_returns_false_with_0_fish(self):
        aquarium = Aquarium()
        owner = Owner('id', 'first_name', 'last_name', 'birth_date')
        returned = owner.has_two_fish()
        assert returned == False

    def test_c_has_two_fish_returns_false_with_1_fish(self):
        aquarium = Aquarium()
        owner = Owner('id', 'first_name', 'last_name', 'birth_date')
        owner.add_fish('height', 'color', 'species', 'gender')
        returned = owner.has_two_fish()
        assert returned == False

    def test_d_has_two_fish_returns_true_with_2_fish(self):
        aquarium = Aquarium()
        owner = Owner('id', 'first_name', 'last_name', 'birth_date')
        owner.add_fish('height', 'color', 'species', 'gender')
        owner.add_fish('height', 'color', 'species', 'gender')
        returned = owner.has_two_fish()
        assert returned == True

    def test_e_has_two_fish_returns_false_with_3_fish(self):
        aquarium = Aquarium()
        owner = Owner('id', 'first_name', 'last_name', 'birth_date')
        owner.add_fish('height', 'color', 'species', 'gender')
        owner.add_fish('height', 'color', 'species', 'gender')
        owner.add_fish('height', 'color', 'species', 'gender')
        returned = owner.has_two_fish()
        assert returned == False


if __name__ == '__main__':
    pytest.main(['-v', '-s', 'question06.py'])
