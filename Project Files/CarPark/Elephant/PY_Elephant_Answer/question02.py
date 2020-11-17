import pytest
from sanctuary import Sanctuary
from owner import Owner
import controller
from datetime import date


class TestAddingFourOwners:
    def test_a_has_4_owners(self):
        sanctuary = controller.setup()
        assert len(sanctuary.all_my_owners) == 4

    def test_b_owner_details(self):
        sanctuary = controller.setup()

        owner = sanctuary.all_my_owners[0]
        assert owner.id == 'JOT'
        assert owner.first_name == 'Joby'
        assert owner.last_name == 'Thomas'
        assert owner.birth_date == date(1990, 4, 9)

        owner = sanctuary.all_my_owners[1]
        assert owner.id == 'RUT'
        assert owner.first_name == 'Russel'
        assert owner.last_name == 'Turia'
        assert owner.birth_date == date(1984, 2, 16)

        owner = sanctuary.all_my_owners[2]
        assert owner.id == 'TAN'
        assert owner.first_name == 'Tariana'
        assert owner.last_name == 'Norman'
        assert owner.birth_date == date(1987, 11, 30)

        owner = sanctuary.all_my_owners[3]
        assert owner.id == 'JOG'
        assert owner.first_name == 'John'
        assert owner.last_name == 'Goff'
        assert owner.birth_date == date(1982, 12, 12)


if __name__ == '__main__':
    pytest.main(['-v', '-s', 'question02.py'])
