import unittest
from aquarium import Aquarium
from fish import Fish
from owner import Owner
import controller


class TestFishProperties(unittest.TestCase):
    def test_a_fish_name(self):
        fish = Fish('cost', 'color', 'breed', 'gender', 'the_owner')
        self.assertTrue(hasattr(fish, 'cost'))
        self.assertEqual(fish.cost, 'cost')

    def test_b_fish_breed(self):
        fish = Fish('cost', 'color', 'breed', 'gender', 'my_owner')
        self.assertTrue(hasattr(fish, 'color'))
        self.assertEqual(fish.color, 'color')

    def test_c_fish_gender(self):
        fish = Fish('cost', 'color', 'breed', 'gender', 'my_owner')
        self.assertTrue(hasattr(fish, 'breed'))
        self.assertEqual(fish.breed, 'breed')

    def test_d_fish_secret_name(self):
        fish = Fish('cost', 'color', 'breed', 'gender', 'my_owner')
        self.assertTrue(hasattr(fish, 'gender'))
        self.assertEqual(fish.gender, 'gender')

    def test_e_fish_my_owner(self):
        fish = Fish('cost', 'color', 'breed', 'gender', 'my_owner')
        self.assertTrue(hasattr(fish, 'my_owner'))
        self.assertEqual(fish.my_owner, 'my_owner')


class TestAddFish(unittest.TestCase):
    def test_f_owner_add_fish_exists(self):
        aquarium = Aquarium()
        owner = Owner('id', 'first_name', 'last_name', 'birth_date', aquarium)
        self.assertTrue(hasattr(owner, 'add_fish'))
        self.assertTrue(callable(getattr(owner, 'add_fish', None)))

    def test_g_add_fish_increases_fish_count(self):
        aquarium = Aquarium()
        owner = Owner('id', 'first_name', 'last_name', 'birth_date', aquarium)
        owner.add_fish('cost1', 'color1', 'breed1', 'gender1')
        self.assertEqual(len(owner.all_my_fish), 1)
        owner.add_fish('cost2', 'color2', 'breed2', 'gender2')
        self.assertEqual(len(owner.all_my_fish), 2)


class TestControllerAddFishToOwners(unittest.TestCase):
    def test_h_owners_have_correct_fish_numbers(self):
        aquarium = controller.setup()

        owner = aquarium.find_owner('PHK')
        self.assertEqual(len(owner.all_my_fish), 1)

        owner = aquarium.find_owner('RUT')
        self.assertEqual(len(owner.all_my_fish), 2)

        owner = aquarium.find_owner('JOG')
        self.assertEqual(len(owner.all_my_fish), 2)

        owner = aquarium.find_owner('TAN')
        self.assertEqual(len(owner.all_my_fish), 1)

    def test_i_fish_details(self):
        aquarium = controller.setup()
        #    PHK          Purple     Siamese Fighting Fish    M        $2.55
        owner = aquarium.find_owner('PHK')
        a_fish = owner.all_my_fish[0]
        self.assertTrue(a_fish.my_owner, owner)
        self.assertEqual(a_fish.color, 'Purple')
        self.assertEqual(a_fish.breed, 'Siamese Fighting Fish')
        self.assertEqual(a_fish.gender, 'M')
        self.assertEqual(a_fish.cost, 2.55)
        #    RUT          Orange        Carp                  F        $5.56
        #    RUT          Gold          Carp                  F       $10.99
        owner = aquarium.find_owner('RUT')
        a_fish = owner.all_my_fish[0]
        self.assertTrue(a_fish.my_owner, owner)
        self.assertEqual(a_fish.color, 'Orange')
        self.assertEqual(a_fish.breed, 'Carp')
        self.assertEqual(a_fish.gender, 'F')
        self.assertEqual(a_fish.cost, 5.56)
        a_fish = owner.all_my_fish[1]
        self.assertTrue(a_fish.my_owner, owner)
        self.assertEqual(a_fish.color, 'Gold')
        self.assertEqual(a_fish.breed, 'Carp')
        self.assertEqual(a_fish.gender, 'F')
        self.assertEqual(a_fish.cost, 10.99)
        #    JOG          Grey         Shark                  M       $123.45
        #    JOG          Black        Killer Whale           M     $5,000.01
        owner = aquarium.find_owner('JOG')
        a_fish = owner.all_my_fish[0]
        self.assertTrue(a_fish.my_owner, owner)
        self.assertEqual(a_fish.color, 'Grey')
        self.assertEqual(a_fish.breed, 'Shark')
        self.assertEqual(a_fish.gender, 'M')
        self.assertEqual(a_fish.cost, 123.45)
        a_fish = owner.all_my_fish[1]
        self.assertTrue(a_fish.my_owner, owner)
        self.assertEqual(a_fish.color, 'Black')
        self.assertEqual(a_fish.breed, 'Killer Whale')
        self.assertEqual(a_fish.gender, 'M')
        self.assertEqual(a_fish.cost, 5000.01)

        #    TAN          Gold         GoldFish               F        $9.87
        owner = aquarium.find_owner('TAN')
        a_fish = owner.all_my_fish[0]
        self.assertTrue(a_fish.my_owner, owner)
        self.assertEqual(a_fish.color, 'Gold')
        self.assertEqual(a_fish.breed, 'GoldFish')
        self.assertEqual(a_fish.gender, 'F')
        self.assertEqual(a_fish.cost, 9.87)
        # TPL             Grey           African forest      M        13ft


if __name__ == '__main__':
    unittest.main(verbosity=3)
