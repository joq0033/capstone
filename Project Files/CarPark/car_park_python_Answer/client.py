class Client:
    def __init__(self, new_id, new_personal_name, new_family_name, new_birth_day, new_is_permanent, the_car_park):
        self.my_car_park = the_car_park
        self.id = new_id
        self.personal_name = new_personal_name
        self.family_name = new_family_name
        self.birth_day = new_birth_day
        self.is_permanent = new_is_permanent

    def __str__(self):
        return f'{self.personal_name} {self.family_name}'
