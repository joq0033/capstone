from hospital import Hospital
from datetime import date


# noinspection SpellCheckingInspection
def setup():
    the_hospital = Hospital()

    the_hospital.add_doctor('11', 'Jian', 'Xu', 'N400', 50)
    the_hospital.add_doctor('13', 'Emily', 'John', 'W7', 25)
    the_hospital.add_doctor('12', 'Santosh', 'Kumar',  'A22', 40)

    a_doctor = the_hospital.find_doctor('11')
    a_doctor.add_patient('200', 'Fisher', 'Shelley', '0')
    a_doctor.add_patient('100', 'Knightly', 'Jude', '30')

    a_doctor = the_hospital.find_doctor('12')
    a_doctor.add_patient('400', 'Koirala', 'Kimi', '25')
    a_doctor.add_patient('300', 'Chen', 'Liang', '40')

    a_doctor = the_hospital.find_doctor('13')
    a_doctor.add_patient('500', 'Ahmed', 'Riyaz', '0')

    return the_hospital


if __name__ == '__main__':
    a_hospital = setup()
    print(a_hospital.get_doctors())
    print(a_hospital.get_those_with_two_patients())
