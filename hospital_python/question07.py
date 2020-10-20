import pytest
from hospital import Hospital
from patient import Patient
import controller


class TestPatientStr:
    def test_a_patient__str__exists(self):
        patient = Patient('id', 'last_name', 'first_name', 'fees_owing', 'the_doctor')
        assert type(patient).__str__ is not object.__str__

    def test_b_patient__str__works(self):
        patient = Patient('id', 'last_name', 'first_name', 'fees_owing', 'the_doctor')
        returned = str(patient)
        assert returned == 'last_name first_name'


class TestHospital_get_those_with_two_patients:
    def test_c_hospital_get_those_with_two_patients_exists(self):
        hospital = Hospital()
        assert hasattr(hospital, 'get_those_with_two_patients')
        assert callable(getattr(hospital, 'get_those_with_two_patients', None))

    def test_d_hospital_get_those_with_two_patients_returns_string(self):
        hospital = Hospital()
        returned = hospital.get_those_with_two_patients()
        assert isinstance(returned, str)

    def test_e_hospital_get_those_with_two_patients_not_hard_coded(self):
        hospital = Hospital()
        returned = hospital.get_those_with_two_patients()
        assert len(returned) == 0

    # noinspection SpellCheckingInspection
    def test_f_hospital_get_those_with_two_patients_works(self):
        hospital = controller.setup()
        returned = hospital.get_those_with_two_patients()
        assert returned == '11=Xu Jian\n' '  Fisher Shelley\n' '  Knightly Jude\n' '12=Kumar Santosh\n' '  Koirala Kimi\n''  Chen Liang\n' '  Ahmed Riyaz\n'


if __name__ == '__main__':
    pytest.main(['-vv', '-s', 'question07.py'])
