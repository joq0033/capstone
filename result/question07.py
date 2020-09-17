import unittest
from aquarium import Aquarium
from fish import Fish
import controller


class TestFishStr(unittest.TestCase):
    def test_a_fish__str__exists(self):
        fish = Fish('cost', 'color', 'breed', 'gender', 'the_owner')
        assert type(fish).__str__ is not object.__str__

    def test_b_fish__str__works(self):
        fish = Fish('cost', 'color', 'breed', 'gender', 'the_owner')
        returned = str(fish)
        assert returned == 'color breed [gender] worth $cost'


class TestAquarium_get_those_with_two_fish(unittest.TestCase):
    def test_c_aquarium_get_those_with_two_fish_exists(self):
        aquarium = Aquarium()
        assert hasattr(aquarium, 'get_those_with_two_fish')
        assert callable(getattr(aquarium, 'get_those_with_two_fish', None))

    def test_d_aquarium_get_those_with_two_fish_returns_string(self):
        aquarium = Aquarium()
        returned = aquarium.get_those_with_two_fish()
        assert isinstance(returned, str)

    def test_e_aquarium_get_those_with_two_fish_not_hard_coded(self):
        aquarium = Aquarium()
        returned = aquarium.get_those_with_two_fish()
        assert len(returned) == 0

    # noinspection SpellCheckingInspection
    def test_f_aquarium_get_those_with_two_fish_works(self):
        aquarium = controller.setup()
        returned = aquarium.get_those_with_two_fish()
        assert returned ==
                         'JOG=John Goff\nBlack Killer Whale [M] worth $5000.01\nGrey Shark [M] worth $123.45\nPurple Siamese Fighting Fish [M] worth $2.55\nRUT=Russel Turia\nOrange Carp [F] worth $5.56\nGold Carp [F] worth $10.99\nGold GoldFish [F] worth $9.87\n'


if __name__ == '__main__':
    unittest.main(verbosity=3)
