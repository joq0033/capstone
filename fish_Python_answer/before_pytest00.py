import pytest
from aquarium import Aquarium
from owner import Owner


class TestStaringAquariumCode:

    def test_a_aquarium_collection(self):
        aquarium = Aquarium()
        assert hasattr(aquarium, '')
        assert type(aquarium.all_my_owners) == list

    def test_b_aquarium_add_owner(self):
        aquarium = Aquarium()
        assert hasattr(aquarium, '')
        assert callable(getattr(aquarium, '', None))

    def test_c_aquarium_find_owner(self):
        aquarium = Aquarium()
        assert hasattr(aquarium, '')
        assert callable(getattr(aquarium, '', None))

    def test_d_aquarium_sort_owners(self):
        aquarium = Aquarium()
        assert hasattr(aquarium, '')
        assert callable(getattr(aquarium, '', None))


class TestStaringOwnerCode:
    def test_a_owner_properties(self):
        aquarium = Aquarium()
        owner = Owner('1', 'Shawn', 'Spencer', '03-24-1977', aquarium)
        assert hasattr(owner, '')
        assert hasattr(owner, '')
        assert hasattr(owner, '')
        assert hasattr(owner, '')
        assert hasattr(owner, 'my_aquarium')
        assert hasattr(owner, 'all_my_fish')
        assert type(owner.all_my_fish) == list

    def test_b_owner_methods(self):
        aquarium = Aquarium()
        owner = Owner('', '', '', '', aquarium)
        assert hasattr(owner, '')
        assert callable(getattr(owner, '', None))


if __name__ == '__main__':
    pytest.main(['-v', '-s', 'question00.py'])
