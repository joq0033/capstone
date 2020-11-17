import pytest
from sanctuary import Sanctuary
from elephant import Elephant
import controller


class TestElephantStr:
    def test_a_elephant__str__exists(self):
        elephant = Elephant('height', 'color', 'species', 'gender', 'the_owner')
        assert type(elephant).__str__ is not object.__str__

    def test_b_elephant__str__works(self):
        elephant = Elephant('height', 'color', 'species', 'gender', 'the_owner')
        returned = str(elephant)
        assert returned == 'color species [gender] with the height of height'


class TestSanctuary_get_those_with_one_elephant:
    def test_c_sanctuary_get_those_with_one_elephant_exists(self):
        sanctuary = Sanctuary()
        assert hasattr(sanctuary, 'get_those_with_one_elephant')
        assert callable(getattr(sanctuary, 'get_those_with_one_elephant', None))

    def test_d_sanctuary_get_those_with_one_elephant_returns_string(self):
        sanctuary = Sanctuary()
        returned = sanctuary.get_those_with_one_elephant()
        assert isinstance(returned, str)

    def test_e_sanctuary_get_those_with_one_elephant_not_hard_coded(self):
        sanctuary = Sanctuary()
        returned = sanctuary.get_those_with_one_elephant()
        assert len(returned) == 0

    # noinspection SpellCheckingInspection
    def test_f_sanctuary_get_those_with_one_elephant_works(self):
        sanctuary = controller.setup()
        returned = sanctuary.get_those_with_one_elephant()
        assert returned == 'JOG=John Goff\n' '  Brown African Bush [F] with the height of 10ft\n' '  Greyish Brown Asian [M] with the height of 11ft\n' '  Black African Bush [M] with the height of 12ft\n' 'RUT=Russel Turia\n' '  Grey African Forest [M] with the height of 13ft\n' 'TAN=Tariana Norman\n' '  Grey Asian [F] with the height of 7ft\n'


if __name__ == '__main__':
    pytest.main(['-vv', '-s', 'question07.py'])
