from patient import Patient


class Doctor:
    def __init__(self, new_id, new_first_name, new_last_name, new_office, new_fees, the_hospital):
        self.id = new_id
        self.first_name = new_first_name
        self.last_name = new_last_name
        self.office = new_office
        self.fees = new_fees
        self.my_hospital = the_hospital
        self.all_my_patients = []

    def sort_patients(self):
        self.all_my_patients = sorted(self.all_my_patients, key=lambda patient: patient.species)

    def __str__(self):
        return f'{self.id}={self.last_name} {self.first_name}'

    def add_patient(self, new_id, new_last_name, new_first_name, new_fees_owing):
        new_patient = Patient(new_id, new_last_name, new_first_name, new_fees_owing, self)
        self.all_my_patients.append(new_patient)

    def get_patients(self):
        result = ''
        for a_patient in self.all_my_patients:
            result += '  ' + str(a_patient) + '\n'
        return result

    def has_two_patients(self):
        return len(self.all_my_patients) == 2
