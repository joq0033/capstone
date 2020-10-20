import pytest
from hospital import Hospital
from patient import Patient
from doctor import Doctor
import controller


class TestPatientProperties:
    def test_a_patient_id(self):
        patient = Patient('id', 'last_name', 'first_name', 'fees_owing', 'the_doctor')
        assert hasattr(patient, 'id')
        assert patient.id == 'id'

    def test_b_patient_last_name(self):
        patient = Patient('id', 'last_name', 'first_name', 'fees_owing', 'the_doctor')
        assert hasattr(patient, 'last_name')
        assert patient.last_name == 'last_name'

    def test_c_patient_first_name(self):
        patient = Patient('id', 'last_name', 'first_name', 'fees_owing', 'the_doctor')
        assert hasattr(patient, 'first_name')
        assert patient.first_name == 'first_name'

    def test_d_patient_fees_owing(self):
        patient = Patient('id', 'last_name', 'first_name', 'fees_owing', 'the_doctor')
        assert hasattr(patient, 'fees_owing')
        assert patient.fees_owing == 'fees_owing'

    def test_e_patient_my_doctor(self):
        patient = Patient('id', 'last_name', 'first_name', 'fees_owing', 'the_doctor')
        assert hasattr(patient, 'the_doctor')
        assert patient.the_doctor == 'the_doctor'


class TestAddPatient:
    def test_f_doctor_add_patient_exists(self):
        hospital = Hospital()
        doctor = Doctor('id', 'last_name', 'first_name', 'fees_owing', 'the_hospital', hospital)
        assert hasattr(doctor, 'add_patient')
        assert callable(getattr(doctor, 'add_patient', None))

    def test_g_add_patient_increases_patient_count(self):
        hospital = Hospital()
        doctor = Doctor('id', 'last_name', 'first_name', 'fees_owing', 'the_hospital', hospital)
        doctor.add_patient('id1', 'last_name1', 'first_name1', 'fees_owing1')
        assert len(doctor.all_my_patients) == 1
        doctor.add_patient('id2', 'last_name2', 'first_name2', 'fees_owing2')
        assert len(doctor.all_my_patients) == 2


class TestControllerAddPatientToDoctors:
    def test_h_doctors_have_correct_patient_numbers(self):
        hospital = controller.setup()

        doctor = hospital.find_doctor('11')
        assert len(doctor.all_my_patients) == 2

        doctor = hospital.find_doctor('13')
        assert len(doctor.all_my_patients) == 1

        doctor = hospital.find_doctor('12')
        assert len(doctor.all_my_patients) == 2

    def test_i_patient_details(self):
        hospital = controller.setup()

        doctor = hospital.find_doctor('11')
        a_patient = doctor.all_my_patients[0]
        assert a_patient.my_doctor, doctor
        assert a_patient.id == '200'
        assert a_patient.last_name == 'Fisher'
        assert a_patient.first_name == 'Shelley'
        assert a_patient.fees_owing == '0'
        a_patient = doctor.all_my_patients[1]
        assert a_patient.my_doctor, doctor
        assert a_patient.id == '100'
        assert a_patient.last_name == 'Knightly'
        assert a_patient.first_name == 'Jude'
        assert a_patient.fees_owing == '30'

        doctor = hospital.find_doctor('12')
        a_patient = doctor.all_my_patients[0]
        assert a_patient.my_doctor, doctor
        assert a_patient.id == '400'
        assert a_patient.last_name == 'Koirala'
        assert a_patient.first_name == 'Kimi'
        assert a_patient.fees_owing == '25'
        a_patient = doctor.all_my_patients[1]
        assert a_patient.my_doctor, doctor
        assert a_patient.id == '300'
        assert a_patient.last_name == 'Chen'
        assert a_patient.first_name == 'Liang'
        assert a_patient.fees_owing == '40'

        doctor = hospital.find_doctor('13')
        a_patient = doctor.all_my_patients[0]
        assert a_patient.my_doctor, doctor
        assert a_patient.id == '500'
        assert a_patient.last_name == 'Ahmed'
        assert a_patient.first_name == 'Riyaz'
        assert a_patient.fees_owing == '0'


if __name__ == '__main__':
    pytest.main(['-vv', '-s', 'question04_05.py'])
