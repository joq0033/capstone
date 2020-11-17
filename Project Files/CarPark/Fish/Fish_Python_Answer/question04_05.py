import pytest
from aquarium import Aquarium
from fish import Fish
from owner import Owner
import controller


class TestFishProperties:
    def test_a_fish_name(self):
        fish = Fish('cost', 'color', 'breed', 'gender', 'my_owner')
        assert hasattr(fish, 'cost')
        assert fish.cost == 'cost'

    def test_b_fish_breed(self):
        fish = Fish('cost', 'color', 'breed', 'gender', 'my_owner')
        assert hasattr(fish, 'color')
        assert fish.color == 'color'

    def test_c_fish_gender(self):
        fish = Fish('cost', 'color', 'breed', 'gender', 'my_owner')
        assert hasattr(fish, 'breed')
        assert fish.breed == 'breed'

    def test_d_fish_secret_name(self):
        fish = Fish('cost', 'color', 'breed', 'gender', 'my_owner')
        assert hasattr(fish, 'gender')
        assert fish.gender == 'gender'

    def test_e_fish_my_owner(self):
        fish = Fish('cost', 'color', 'breed', 'gender', 'my_owner')
        assert hasattr(fish, 'my_owner')
        assert fish.my_owner == 'my_owner'


class TestAddFish:
    def test_f_owner_add_fish_exists(self):
        aquarium = Aquarium()
        owner = Owner('id', 'first_name', 'last_name', 'birth_date', aquarium)
        assert hasattr(owner, 'add_fish')
        assert callable(getattr(owner, 'add_fish', None))

    def test_g_add_fish_increases_fish_count(self):
        aquarium = Aquarium()
        owner = Owner('id', 'first_name', 'last_name', 'birth_date', aquarium)
        owner.add_fish('cost1', 'color1', 'breed1', 'gender1')
        assert len(owner.all_my_fish) == 1
        owner.add_fish('cost2', 'color2', 'breed2', 'gender2')
        assert len(owner.all_my_fish) == 2


class TestControllerAddFishToOwners:
    def test_h_owners_have_correct_fish_numbers(self):
        aquarium = controller.setup()

        owner = aquarium.find_owner('PHK')
        assert len(owner.all_my_fish) == 1

        owner = aquarium.find_owner('RUT')
        assert len(owner.all_my_fish) == 2

        owner = aquarium.find_owner('JOG')
        assert len(owner.all_my_fish) == 2

        owner = aquarium.find_owner('TAN')
        assert len(owner.all_my_fish) == 1

    def test_i_fish_details(self):
        aquarium = controller.setup()

        #    PHK          Purple     Siamese Fighting Fish    M        $2.55
        owner = aquarium.find_owner('PHK')
        a_fish = owner.all_my_fish[0]
        assert a_fish.my_owner, owner
        assert a_fish.color == 'Purple'
        assert a_fish.breed == 'Siamese Fighting Fish'
        assert a_fish.gender == 'M'
        assert a_fish.cost == 2.55

        #    RUT          Orange        Carp                  F        $5.56
        #    RUT          Gold          Carp                  F       $10.99
        owner = aquarium.find_owner('RUT')
        a_fish = owner.all_my_fish[0]
        assert a_fish.my_owner, owner
        assert a_fish.color == 'Orange'
        assert a_fish.breed == 'Carp'
        assert a_fish.gender == 'F'
        assert a_fish.cost == 5.56
        a_fish = owner.all_my_fish[1]
        assert a_fish.my_owner, owner
        assert a_fish.color == 'Gold'
        assert a_fish.breed == 'Carp'
        assert a_fish.gender == 'F'
        assert a_fish.cost == 10.99

        #    JOG          Grey         Shark                  M       $123.45
        #    JOG          Black        Killer Whale           M     $5,000.01
        owner = aquarium.find_owner('JOG')
        a_fish = owner.all_my_fish[0]
        assert a_fish.my_owner, owner
        assert a_fish.color == 'Grey'
        assert a_fish.breed == 'Shark'
        assert a_fish.gender == 'M'
        assert a_fish.cost == 123.45
        a_fish = owner.all_my_fish[1]
        assert a_fish.my_owner, owner
        assert a_fish.color == 'Black'
        assert a_fish.breed == 'Killer Whale'
        assert a_fish.gender == 'M'
        assert a_fish.cost == 5000.01

        #    TAN          Gold         GoldFish               F        $9.87
        owner = aquarium.find_owner('TAN')
        a_fish = owner.all_my_fish[0]
        assert a_fish.my_owner, owner
        assert a_fish.color == 'Gold'
        assert a_fish.breed == 'GoldFish'
        assert a_fish.gender == 'F'
        assert a_fish.cost == 9.87
        # TPL             Grey           African forest      M        13ft


if __name__ == '__main__':
    pytest.main(['-v', '-s', 'question04_05.py'])
