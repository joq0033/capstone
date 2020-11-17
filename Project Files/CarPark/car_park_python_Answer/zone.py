from client import Client


class Zone:
    def __init__(self, new_id, new_where, the_car_park):
        self.id = new_id
        self.where = new_where
        self.my_car_park = the_car_park
        self.all_my_clients = []

    def __str__(self):
        return f'{self.id}={self.where}'

    def add_client(self, new_id, new_personal_name, new_family_name, new_birth_day, new_is_permanent):
        new_client = Client(new_id, new_personal_name, new_family_name, new_birth_day, new_is_permanent, self)
        self.all_my_clients.append(new_client)

    def get_client(self):
        result = ''
        for a_client in self.all_my_clients:
            result += '  ' + str(a_client) + '\n'
        return result

    def has_two_clients(self):
        return len(self.all_my_clients) == 2

    def sort_clients(self):
        self.all_my_clients = sorted(self.all_my_clients, key=lambda client: client.id)
