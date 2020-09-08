import unittest
from aquarium import Aquarium
from owner import Owner


class TestStaringAquariumCode(unittest.TestCase):

    def test_a_aquarium_collection(self):
        aquarium = Aquarium()
        self.assertTrue(hasattr(aquarium, 'all_my_owners'))
        self.assertTrue(type(aquarium.all_my_owners) == list)

    def test_b_aquarium_add_owner(self):
        aquarium = Aquarium()
        self.assertTrue(hasattr(aquarium, 'add_owner'))
        self.assertTrue(callable(getattr(aquarium, 'add_owner', None)))

    def test_c_aquarium_find_owner(self):
        aquarium = Aquarium()
        self.assertTrue(hasattr(aquarium, 'find_owner'))
        self.assertTrue(callable(getattr(aquarium, 'find_owner', None)))

    def test_d_aquarium_sort_owners(self):
        aquarium = Aquarium()
        self.assertTrue(hasattr(aquarium, 'sort_owners'))
        self.assertTrue(callable(getattr(aquarium, 'sort_owners', None)))


class TestStaringOwnerCode(unittest.TestCase):
    def test_a_owner_properties(self):
        aquarium = Aquarium()
        owner = Owner('id', 'first_name', 'last_name', 'birth_date', aquarium)
        self.assertTrue(hasattr(owner, 'id'))
        self.assertTrue(hasattr(owner, 'first_name'))
        self.assertTrue(hasattr(owner, 'last_name'))
        self.assertTrue(hasattr(owner, 'birth_date'))
        self.assertTrue(hasattr(owner, 'my_aquarium'))
        self.assertTrue(hasattr(owner, 'all_my_fish'))
        self.assertTrue(type(owner.all_my_fish) == list)

    def test_b_owner_methods(self):
        aquarium = Aquarium()
        owner = Owner('id', 'first_name', 'last_name', 'birth_date', aquarium)
        self.assertTrue(hasattr(owner, 'sort_fish'))
        self.assertTrue(callable(getattr(owner, 'sort_fish', None)))


if __name__ == '__main__':
    unittest.main(verbosity=3)
