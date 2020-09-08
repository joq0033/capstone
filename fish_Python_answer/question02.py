import unittest
from aquarium import Aquarium
from owner import Owner
import controller
from datetime import date


class TestAddingFourOwners(unittest.TestCase):
    def test_a_has_4_Owners(self):
        aquarium = controller.setup()
        self.assertEqual(len(aquarium.all_my_owners), 4)

    def test_b_owner_details(self):
        aquarium = controller.setup()
        # PHK    Phil         Key     8/05/1980
        owner = aquarium.all_my_owners[0]
        self.assertEqual(owner.id, 'PHK')
        self.assertEqual(owner.first_name, 'Phil')
        self.assertEqual(owner.last_name, 'Key')
        self.assertEqual(owner.birth_date, date(1980, 5, 8))
        # RUT    Russel       Turia   16/02/1984
        owner = aquarium.all_my_owners[1]
        self.assertEqual(owner.id, 'RUT')
        self.assertEqual(owner.first_name, 'Russel')
        self.assertEqual(owner.last_name, 'Turia')
        self.assertEqual(owner.birth_date, date(1984, 2, 16))
        # TAN    Tariana      Norman  30/11/1987
        owner = aquarium.all_my_owners[2]
        self.assertEqual(owner.id, 'TAN')
        self.assertEqual(owner.first_name, 'Tariana')
        self.assertEqual(owner.last_name, 'Norman')
        self.assertEqual(owner.birth_date, date(1987, 11, 30))
        # JOG    John         Goff    12/13/1982
        owner = aquarium.all_my_owners[3]
        self.assertEqual(owner.id, 'JOG')
        self.assertEqual(owner.first_name, 'John')
        self.assertEqual(owner.last_name, 'Goff')
        self.assertEqual(owner.birth_date, date(1982, 12, 12))


if __name__ == '__main__':
    unittest.main(verbosity=3)
