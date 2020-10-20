from doctor import Doctor


class Hospital:
    def __init__(self):
        self.all_my_doctors = []

    def add_doctor(self, new_id, new_first_name, new_last_name, new_office, new_fees):
        new_doctor = Doctor(new_id, new_first_name, new_last_name, new_office, new_fees, self)
        self.all_my_doctors.append(new_doctor)

    def find_doctor(self, target_owner_id):
        return next((doctor for doctor in self.all_my_doctors if doctor.id == target_owner_id), None)

    def sort_doctors(self):
        self.all_my_doctors = sorted(self.all_my_doctors, key=lambda doctor: doctor.id)

    def get_doctors(self):
        self.sort_doctors()
        out = ''
        for a_doctor in self.all_my_doctors:
            out += str(a_doctor) + '\n'
        return out

    def get_those_with_two_patients(self):
        self.sort_doctors()
        out = ''
        for a_doctor in self.all_my_doctors:
            if a_doctor.has_two_patients():
                out += str(a_doctor) + '\n'
            out += a_doctor.get_patients()
        return out
