import pytest
from hospital import Hospital
from doctor import Doctor


class TestOwnerHasTwoPatients:
    def test_a_owner_has_two_fish_exists(self):
        hospital = Hospital()
        doctor = Doctor('id', 'first_name', 'last_name', 'office', 'fees', hospital)
        assert hasattr(doctor, 'has_two_patients')
        assert callable(getattr(doctor, 'has_two_patients', None))

    def test_b_has_two_fish_returns_false_with_0_fish(self):
        hospital = Hospital()
        doctor = Doctor('id', 'first_name', 'last_name', 'office', 'fees', hospital)
        returned = doctor.has_two_patients()
        assert returned == False

    def test_c_has_two_patients_returns_false_with_1_patient(self):
        hospital = Hospital()
        doctor = Doctor('id', 'first_name', 'last_name', 'office', 'fees', hospital)
        doctor.add_patient('id', 'last_name',  'first_name', 'fees_owing')
        returned = doctor.has_two_patients()
        assert returned == False

    def test_d_has_two_patients_returns_true_with_2_patients(self):
        hospital = Hospital()
        doctor = Doctor('id', 'first_name', 'last_name', 'office', 'fees', hospital)
        doctor.add_patient('id', 'last_name',  'first_name', 'fees_owing')
        doctor.add_patient('id', 'last_name',  'first_name', 'fees_owing')
        returned = doctor.has_two_patients()
        assert returned == True

    def test_e_has_two_patients_returns_false_with_3_patients(self):
        hospital = Hospital()
        doctor = Doctor('id', 'first_name', 'last_name', 'office', 'fees', hospital)
        doctor.add_patient('id', 'last_name',  'first_name', 'fees_owing')
        doctor.add_patient('id', 'last_name',  'first_name', 'fees_owing')
        doctor.add_patient('id', 'last_name',  'first_name', 'fees_owing')
        returned = doctor.has_two_patients()
        assert returned == False


if __name__ == '__main__':
    pytest.main(['-v', '-s', 'question06.py'])
