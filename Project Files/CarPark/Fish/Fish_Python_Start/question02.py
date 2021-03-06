import pytest
from aquarium import Aquarium
from owner import Owner
import controller
from datetime import date


class TestAddingFourOwners:
    def test_a_has_4_owners(self):
        aquarium = controller.setup()
        assert len(aquarium.all_my_owners), 4

    def test_b_owner_details(self):
        aquarium = controller.setup()
        # PHK    Phil         Key     8/05/1980
        owner = aquarium.all_my_owners[0]
        assert owner.id == 'PHK'
        assert owner.first_name == 'Phil'
        assert owner.last_name == 'Key'
        assert owner.birth_date == date(1980, 5, 8)

        # RUT    Russel       Turia   16/02/1984
        owner = aquarium.all_my_owners[1]
        assert owner.id == 'RUT'
        assert owner.first_name == 'Russel'
        assert owner.last_name == 'Turia'
        assert owner.birth_date == date(1984, 2, 16)

        # TAN    Tariana      Norman  30/11/1987
        owner = aquarium.all_my_owners[2]
        assert owner.id == 'TAN'
        assert owner.first_name == 'Tariana'
        assert owner.last_name == 'Norman'
        assert owner.birth_date == date(1987, 11, 30)

        # JOG    John         Goff    12/13/1982
        owner = aquarium.all_my_owners[3]
        assert owner.id == 'JOG'
        assert owner.first_name == 'John'
        assert owner.last_name == 'Goff'
        assert owner.birth_date == date(1982, 12, 12)


if __name__ == '__main__':
    pytest.main(['-v', '-s', 'question02.py'])
