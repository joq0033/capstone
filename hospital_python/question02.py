import pytest
from hospital import Hospital
from doctor import Doctor
import controller
from datetime import date


class TestAddingThreeDoctors:
    def test_a_has_3_doctors(self):
        hospital = controller.setup()
        assert len(hospital.all_my_doctors), 3

    def test_b_owner_details(self):
        hospital = controller.setup()
        doctor = hospital.all_my_doctors[0]
        assert doctor.id == '11'
        assert doctor.first_name == 'Jian'
        assert doctor.last_name == 'Xu'
        assert doctor.office == 'N400'
        assert doctor.fees == 50

        hospital = controller.setup()
        doctor = hospital.all_my_doctors[1]
        assert doctor.id == '13'
        assert doctor.first_name == 'Emily'
        assert doctor.last_name == 'John'
        assert doctor.office == 'W7'
        assert doctor.fees == 25

        hospital = controller.setup()
        doctor = hospital.all_my_doctors[2]
        assert doctor.id == '12'
        assert doctor.first_name == 'Santosh'
        assert doctor.last_name == 'Kumar'
        assert doctor.office == 'A22'
        assert doctor.fees == 40

if __name__ == '__main__':
    pytest.main(['-v', '-s', 'question02.py'])
