import pytest
from hospital import Hospital
from doctor import Doctor


class TestStaringHospitalCode:

    def test_a_hospital_collection(self):
        hospital = Hospital()
        assert hasattr(hospital, 'all_my_doctors')
        assert type(hospital.all_my_doctors) == list

    def test_b_hospital_add_doctor(self):
        hospital = Hospital()
        assert hasattr(hospital, 'add_doctor')
        assert callable(getattr(hospital, 'add_doctor', None))

    def test_c_hospital_find_doctor(self):
        hospital = Hospital()
        assert hasattr(hospital, 'find_doctor')
        assert callable(getattr(hospital, 'find_doctor', None))

    def test_d_hospital_sort_owners(self):
        hospital = Hospital()
        assert hasattr(hospital, 'sort_doctors')
        assert callable(getattr(hospital, 'sort_doctors', None))


class TestStaringOwnerCode:
    def test_a_doctor_properties(self):
        hospital = Hospital()
        doctor = Doctor('1', 'Shawn', 'Spencer', 'N209', '100', hospital)
        assert hasattr(doctor, 'id')
        assert hasattr(doctor, 'first_name')
        assert hasattr(doctor, 'last_name')
        assert hasattr(doctor, 'office')
        assert hasattr(doctor, 'fees')
        assert hasattr(doctor, 'all_my_patients')
        assert type(doctor.all_my_patients) == list

    def test_b_owner_methods(self):
        hospital = Hospital()
        doctor = Doctor('1', 'Shawn', 'Spencer', 'N209', '100', hospital)
        assert hasattr(doctor, 'sort_patients')
        assert callable(getattr(doctor, 'sort_patients', None))


if __name__ == '__main__':
    pytest.main(['-v', '-s', 'question00.py'])
