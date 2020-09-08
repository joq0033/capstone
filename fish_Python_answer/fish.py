class Fish:
    def __init__(self, new_cost, new_color, new_breed, new_gender, the_owner):
        self.my_owner = the_owner
        self.cost = new_cost
        self.color = new_color
        self.breed = new_breed
        self.gender = new_gender

    def __str__(self):
        return f'{self.color} {self.breed} [{self.gender}] worth ${self.cost}'
