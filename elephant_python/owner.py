from elephant import Elephant


class Owner:
    def __init__(self, new_id, new_first_name, new_last_name, new_birth_date, the_sanctuary):
        self.id = new_id
        self.first_name = new_first_name
        self.last_name = new_last_name
        self.birth_date = new_birth_date
        self.my_sanctuary = the_sanctuary
        self.all_my_elephants = []

    def __str__(self):
        return f'{self.id}={self.first_name} {self.last_name}'

    def add_elephant(self, new_height, new_color, new_species, new_gender):
        new_elephant = Elephant(new_height, new_color, new_species, new_gender, self)
        self.all_my_elephants.append(new_elephant)

    def sort_elephants(self):
        self.all_my_elephants = sorted(self.all_my_elephants, key=lambda elephant: elephant.species)

    def has_one_elephant(self):
        return len(self.all_my_elephants) == 1

    def get_elephant(self):
        result = ''
        for a_elephant in self.all_my_elephants:
            result += '  ' + str(a_elephant) + '\n'
        return result
