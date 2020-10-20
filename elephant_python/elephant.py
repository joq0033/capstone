class Elephant:
    def __init__(self, new_height, new_color, new_species, new_gender, the_owner):
        self.my_owner = the_owner
        self.height = new_height
        self.color = new_color
        self.species = new_species
        self.gender = new_gender

    def __str__(self):
        return f'{self.color} {self.species} [{self.gender}] with the height of {self.height}'
