import pytest
from sanctuary import Sanctuary
from elephant import Elephant
from owner import Owner
import controller


class TestElephantProperties:
    def test_a_elephant_height(self):
        elephant = Elephant('height', 'color', 'species', 'gender', 'the_owner')
        assert hasattr(elephant, 'height')
        assert elephant.height == 'height'

    def test_b_elephant_color(self):
        elephant = Elephant('height', 'color', 'species', 'gender', 'my_owner')
        assert hasattr(elephant, 'color')
        assert elephant.color == 'color'

    def test_c_elephant_species(self):
        elephant = Elephant('height', 'color', 'species', 'gender', 'my_owner')
        assert hasattr(elephant, 'species')
        assert elephant.species == 'species'

    def test_d_elephant_gender(self):
        elephant = Elephant('height', 'color', 'species', 'gender', 'my_owner')
        assert hasattr(elephant, 'gender')
        assert elephant.gender == 'gender'

    def test_e_elephant_my_owner(self):
        elephant = Elephant('height', 'color', 'species', 'gender', 'my_owner')
        assert hasattr(elephant, 'my_owner')
        assert elephant.my_owner == 'my_owner'


class TestAddElephant:
    def test_f_owner_add_elephant_exists(self):
        sanctuary = Sanctuary()
        owner = Owner('id', 'first_name', 'last_name', 'birth_date', sanctuary)
        assert hasattr(owner, 'add_elephant')
        assert callable(getattr(owner, 'add_elephant', None))

    def test_g_add_elephant_increases_elephant_count(self):
        sanctuary = Sanctuary()
        owner = Owner('id', 'first_name', 'last_name', 'birth_date', sanctuary)
        owner.add_elephant('height1', 'color1', 'species1', 'gender1')
        assert len(owner.all_my_elephants) == 1
        owner.add_elephant('height', 'color2', 'species2', 'gender2')
        assert len(owner.all_my_elephants) == 2


class TestControllerAddElephantToOwners:
    def test_h_owners_have_correct_elephant_numbers(self):
        sanctuary = controller.setup()

        owner = sanctuary.find_owner('JOT')
        assert len(owner.all_my_elephants) == 2

        owner = sanctuary.find_owner('RUT')
        assert len(owner.all_my_elephants) == 1

        owner = sanctuary.find_owner('JOG')
        assert len(owner.all_my_elephants) == 1

        owner = sanctuary.find_owner('TAN')
        assert len(owner.all_my_elephants) == 1

    def test_i_elephant_details(self):
        sanctuary = controller.setup()

        owner = sanctuary.find_owner('JOT')
        a_elephant = owner.all_my_elephants[0]
        assert a_elephant.my_owner, owner
        assert a_elephant.height == '11ft'
        assert a_elephant.gender == 'M'
        assert a_elephant.color == 'Greyish Brown'
        assert a_elephant.species == 'Asian'
        a_elephant = owner.all_my_elephants[1]
        assert a_elephant.my_owner, owner
        assert a_elephant.color == 'Black'
        assert a_elephant.species == 'African Bush'
        assert a_elephant.gender == 'M'
        assert a_elephant.height == '12ft'

        owner = sanctuary.find_owner('JOG')
        a_elephant = owner.all_my_elephants[0]
        assert a_elephant.my_owner, owner
        assert a_elephant.color == 'Brown'
        assert a_elephant.species == 'African Bush'
        assert a_elephant.gender == 'F'
        assert a_elephant.height == '10ft'

        owner = sanctuary.find_owner('TAN')
        a_elephant = owner.all_my_elephants[0]
        assert a_elephant.my_owner, owner
        assert a_elephant.color == 'Grey'
        assert a_elephant.species == 'Asian'
        assert a_elephant.gender == 'F'
        assert a_elephant.height == '7ft'

        owner = sanctuary.find_owner('RUT')
        a_elephant = owner.all_my_elephants[0]
        assert a_elephant.my_owner, owner
        assert a_elephant.color == 'Grey'
        assert a_elephant.species == 'African Forest'
        assert a_elephant.gender == 'M'
        assert a_elephant.height == '13ft'


if __name__ == '__main__':
    pytest.main(['-v', '-s', 'question04_05.py'])
