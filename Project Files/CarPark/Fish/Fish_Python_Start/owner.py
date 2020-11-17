from fish import Fish


class Owner:
    def __init__(self, new_id, new_first_name, new_last_name, new_birth_date, the_aquarium):
        self.id = new_id
        self.first_name = new_first_name
        self.last_name = new_last_name
        self.birth_date = new_birth_date
        self.my_aquarium = the_aquarium
        self.all_my_fish = []

    def __str__(self):
        return f'{self.id}={self.first_name} {self.last_name}'

    def add_fish(self, new_cost, new_color, new_breed, new_gender):
        new_fish = Fish(new_cost, new_color, new_breed, new_gender, self)
        self.all_my_fish.append(new_fish)

    def sort_fish(self):
        self.all_my_fish = sorted(self.all_my_fish, key=lambda fish: fish.breed)
