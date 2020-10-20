import pytest
from hospital import Hospital
from doctor import Doctor
import controller


class TestDoctorStr:
    def test_a_doctor__str__exists(self):
        hospital = Hospital()
        doctor = Doctor('id', 'first_name', 'last_name', 'office', 'fees', hospital)
        assert type(doctor).__str__ is not object.__str__

    def test_b_owner__str__returns_string(self):
        hospital = Hospital()
        doctor = Doctor('id', 'first_name', 'last_name', 'office', 'fees', hospital)
        returned = str(doctor)
        assert isinstance(returned, str)

    def test_c_owner__str__works(self):
        hospital = Hospital()
        doctor = Doctor('id', 'first_name', 'last_name', 'office', 'fees', hospital)
        returned = str(doctor)
        assert returned, 'id=first_name last_name'


class TestHospital_get_doctors:
    def test_d_hostpial_get_doctors(self):
        hospital = controller.setup()
        returned = hospital.get_doctors()
        assert returned == '11=Xu Jian\n12=Kumar Santosh\n13=John Emily\n'


if __name__ == '__main__':
    pytest.main(['-vv', '-s', 'question03.py'])
