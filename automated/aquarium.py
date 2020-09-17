from owner import Owner


class Aquarium:
    def __init__(self):
        self.all_my_owners = []

    def add_owner(self, new_id, new_first_name, new_last_name, new_birth_date):
        new_owner = Owner(new_id, new_first_name, new_last_name, new_birth_date, self)
        self.all_my_owners.append(new_owner)

    def find_owner(self, target_owner_id):
        return next((owner for owner in self.all_my_owners if owner.id == target_owner_id), None)

    def sort_owners(self):
        self.all_my_owners = sorted(self.all_my_owners, key=lambda owner: owner.id)

    def get_owners(self):
        self.sort_owners()
        out = ''
        for an_owner in self.all_my_owners:
            out += str(an_owner) + '\n'
        return out

    def get_those_with_two_fish(self):
        self.sort_owners()
        out = ''
        for an_owner in self.all_my_owners:
            if an_owner.has_two_fish():
                out += str(an_owner) + '\n'
            out += an_owner.get_fish()
        return out
