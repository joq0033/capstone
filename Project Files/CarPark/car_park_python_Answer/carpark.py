from zone import Zone


class CarPark:
    def __init__(self):
        self.all_my_zones = []

    def add_zone(self, new_id, new_where):
        new_zone = Zone(new_id, new_where, self)
        self.all_my_zones.append(new_zone)

    def find_zone(self, target_zone_id):
        return next((zone for zone in self.all_my_zones if zone.id == target_zone_id), None)

    def sort_zones(self):
        self.all_my_zones = sorted(self.all_my_zones, key=lambda zone: zone.id)

    def get_zones(self):
        self.sort_zones()
        out = ''
        for a_zone in self.all_my_zones:
            out += str(a_zone) + '\n'
        return out

    def get_those_with_two_clients(self):
        self.sort_zones()
        out = ''
        for a_zone in self.all_my_zones:
            if a_zone.has_two_clients():
                out += str(a_zone) + '\n'
            out += a_zone.get_client()
        return out
