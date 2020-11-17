import pytest
from sanctuary import Sanctuary
from owner import Owner


class TestStartingSanctuaryCode:

    def test_a_sanctuary_collection(self):
        sanctuary = Sanctuary()
        assert hasattr(sanctuary, 'all_my_owners')
        assert type(sanctuary.all_my_owners) == list

    def test_b_sanctuary_add_owner(self):
        sanctuary = Sanctuary
        assert hasattr(sanctuary, 'add_owner')
        assert callable(getattr(sanctuary, 'add_owner', None))

    def test_c_sanctuary_find_owner(self):
        sanctuary = Sanctuary
        assert hasattr(sanctuary, 'find_owner')
        assert callable(getattr(sanctuary, 'find_owner', None))

    def test_d_sanctuary_sort_owners(self):
        sanctuary = Sanctuary
        assert hasattr(sanctuary, 'sort_owners')
        assert callable(getattr(sanctuary, 'sort_owners', None))


class TestStartingOwnerCode:
    def test_a_owner_properties(self):
        sanctuary = Sanctuary()
        owner = Owner('1', 'Shawn', 'Spencer', '03-24-1977', sanctuary)
        assert hasattr(owner, 'id')
        assert hasattr(owner, 'first_name')
        assert hasattr(owner, 'last_name')
        assert hasattr(owner, 'birth_date')
        assert hasattr(owner, 'my_sanctuary')
        assert hasattr(owner, 'all_my_elephants')
        assert type(owner.all_my_elephants) == list

    def test_b_owner_methods(self):
        sanctuary = Sanctuary()
        owner = Owner('1', 'Shawn', 'Spencer', '03-24-1977', sanctuary)
        assert hasattr(owner, 'sort_elephants')
        assert callable(getattr(owner, 'sort_elephants', None))


if __name__ == '__main__':
    pytest.main(['-v', '-s', 'question00.py'])
