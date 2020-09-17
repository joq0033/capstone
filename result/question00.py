import unittest
from aquarium import Aquarium
from owner import Owner


class TestStaringAquariumCode(unittest.TestCase):

    def test_a_aquarium_collection(self):
        aquarium = Aquarium()
        assert hasattr(aquarium, 'all_my_owners')
        assert type(aquarium.all_my_owners) == list

    def test_b_aquarium_add_owner(self):
        aquarium = Aquarium()
        assert hasattr(aquarium, 'add_owner')
        assert callable(getattr(aquarium, 'add_owner', None))

    def test_c_aquarium_find_owner(self):
        aquarium = Aquarium()
        assert hasattr(aquarium, 'find_owner')
        assert callable(getattr(aquarium, 'find_owner', None))

    def test_d_aquarium_sort_owners(self):
        aquarium = Aquarium()
        assert hasattr(aquarium, 'sort_owners')
        assert callable(getattr(aquarium, 'sort_owners', None))


class TestStaringOwnerCode(unittest.TestCase):
    def test_a_owner_properties(self):
        aquarium = Aquarium()
        owner = Owner('id', 'first_name', 'last_name', 'birth_date', aquarium)
        assert hasattr(owner, 'id')
        assert hasattr(owner, 'first_name')
        assert hasattr(owner, 'last_name')
        assert hasattr(owner, 'birth_date')
        assert hasattr(owner, 'my_aquarium')
        assert hasattr(owner, 'all_my_fish')
        assert type(owner.all_my_fish) == list

    def test_b_owner_methods(self):
        aquarium = Aquarium()
        owner = Owner('id', 'first_name', 'last_name', 'birth_date', aquarium)
        assert hasattr(owner, 'sort_fish')
        assert callable(getattr(owner, 'sort_fish', None))


if __name__ == '__main__':
    unittest.main(verbosity=3)
