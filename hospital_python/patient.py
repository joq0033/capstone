class Patient:
    def __init__(self, new_id, new_last_name, new_first_name, new_fees_owing, the_doctor):
        self.my_doctor = the_doctor
        self.id = new_id
        self.last_name = new_last_name
        self.first_name = new_first_name
        self.fees_owing = new_fees_owing

    def get_paid_status(self):
        return len(self.fees_owing) == 0

    def __str__(self):
        return f'{self.last_name} {self.first_name}'
