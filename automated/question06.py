import unittest
from aquarium import Aquarium
from owner import Owner


class TestOwnerHasOneFish(unittest.TestCase):
    def test_a_owner_has_two_fish_exists(self):
        aquarium = Aquarium()
        owner = Owner('id', 'first_name', 'last_name', 'birth_date', aquarium)
        self.assertTrue(hasattr(owner, 'has_two_fish'))
        self.assertTrue(callable(getattr(owner, 'has_two_fish', None)))

    def test_b_has_two_fish_returns_false_with_0_fish(self):
        aquarium = Aquarium()
        owner = Owner('id', 'first_name', 'last_name', 'birth_date', aquarium)
        returned = owner.has_two_fish()
        self.assertEqual(returned, False)

    def test_c_has_two_fish_returns_false_with_1_fish(self):
        aquarium = Aquarium()
        owner = Owner('id', 'first_name', 'last_name', 'birth_date', aquarium)
        owner.add_fish('height', 'color', 'species', 'gender')
        returned = owner.has_two_fish()
        self.assertEqual(returned, False)

    def test_d_has_two_fish_returns_true_with_2_fish(self):
        aquarium = Aquarium()
        owner = Owner('id', 'first_name', 'last_name', 'birth_date', aquarium)
        owner.add_fish('height', 'color', 'species', 'gender')
        owner.add_fish('height', 'color', 'species', 'gender')
        returned = owner.has_two_fish()
        self.assertEqual(returned, True)

    def test_e_has_two_fish_returns_false_with_3_fish(self):
        aquarium = Aquarium()
        owner = Owner('id', 'first_name', 'last_name', 'birth_date', aquarium)
        owner.add_fish('height', 'color', 'species', 'gender')
        owner.add_fish('height', 'color', 'species', 'gender')
        owner.add_fish('height', 'color', 'species', 'gender')
        returned = owner.has_two_fish()
        self.assertEqual(returned, False)

if __name__ == '__main__':
    unittest.main(verbosity=3)
