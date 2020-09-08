from q1 import set_q1
from q2 import set_q2
from q3 import set_q3
from q4 import set_q4
from q5 import set_q5
from q6 import set_q6
from q7 import set_q7
import PYBloodbank as PyBb
import PYSocialclub as PySc
import PYDog as PyDog
import JSBloodbank as JsBb
import JSSocialclub as JsSc
import JSDog as JsDog
import JSFish as JsFish
import PYFish as PyFish


class BloodBank:
    def get_marks(self, marks):
        result = f'\n({marks} mark'
        if marks > 1:
            result += 's'
        result += ')\n\n'
        return result

    def py(self):
        imp = PyBb
        exam = set_q1(imp.language, self.get_marks(1))
        exam += set_q2(imp.language, imp.whole, imp.part, imp.add_part, imp.part_data, self.get_marks(2))
        exam += set_q3(imp.language, imp.whole, imp.part, imp.get_part, imp.part_output,
                       self.get_marks(3))
        exam += set_q4(imp.language, imp.part, imp.sub_part, imp.add_sub_part, self.get_marks(4))
        exam += set_q5(imp.language, imp.whole, imp.sub_part, imp.add_sub_part, imp.find_part,
                       imp.sub_part_data, self.get_marks(5))
        exam += set_q6(imp.language, imp.part, imp.boolean_method, imp.boolean_condition, self.get_marks(2))
        exam += set_q7(imp.language, imp.whole, imp.part, imp.sub_part, imp.get_sub_parts,
                       imp.boolean_condition3,
                       imp.sub_part_output, self.get_marks(8))
        return exam

    def js(self):
        imp = JsBb
        exam = set_q1(imp.language, self.get_marks(1))
        exam += set_q2(imp.language, imp.whole, imp.part, imp.add_part, imp.part_data, self.get_marks(2))
        exam += set_q3(imp.language, imp.whole, imp.part, imp.get_part, imp.part_output,
                       self.get_marks(3))
        exam += set_q4(imp.language, imp.part, imp.sub_part, imp.add_sub_part, self.get_marks(4))
        exam += set_q5(imp.language, imp.whole, imp.sub_part, imp.add_sub_part, imp.find_part,
                       imp.sub_part_data, self.get_marks(5))
        exam += set_q6(imp.language, imp.part, imp.boolean_method, imp.boolean_condition, self.get_marks(2))
        exam += set_q7(imp.language, imp.whole, imp.part, imp.sub_part, imp.get_sub_parts,
                       imp.boolean_condition3,
                       imp.sub_part_output, self.get_marks(8))

    def bb_sc(self):
        first = PyBb
        second = JsSc
        exam = set_q1(second.language, self.get_marks(1))
        exam += set_q2(second.language, second.whole, second.part, second.add_part, second.part_data, self.get_marks(2))
        exam += set_q3(second.language, second.whole, second.part, second.get_part, second.part_output,
                       self.get_marks(3))
        exam += set_q4(first.language, first.part, first.sub_part, first.add_sub_part, self.get_marks(4))
        exam += set_q5(first.language, first.whole, first.sub_part, first.add_sub_part, first.find_part,
                       first.sub_part_data, self.get_marks(5))
        exam += set_q6(first.language, first.part, first.boolean_method, first.boolean_condition, self.get_marks(2))
        exam += set_q7(second.language, second.whole, second.part, second.sub_part, second.get_sub_parts,
                       second.boolean_condition3, second.sub_part_output,
                       self.get_marks(8))
        return exam

    def bb_dog(self):
        first = PyBb
        second = JsDog
        exam = set_q1(second.language, self.get_marks(1))
        exam += set_q2(second.language, second.whole, second.part, second.add_part, second.part_data, self.get_marks(2))
        exam += set_q3(second.language, second.whole, second.part, second.get_part, second.part_output,
                       self.get_marks(3))
        exam += set_q4(first.language, first.part, first.sub_part, first.add_sub_part, self.get_marks(4))
        exam += set_q5(first.language, first.whole, first.sub_part, first.add_sub_part, first.find_part,
                       first.sub_part_data, self.get_marks(5))
        exam += set_q6(first.language, first.part, first.boolean_method, first.boolean_condition, self.get_marks(2))
        exam += set_q7(second.language, second.whole, second.part, second.sub_part, second.get_sub_parts,
                       second.boolean_condition3, second.sub_part_output,
                       self.get_marks(8))
        return exam
		
    def bb_fish(self):
        first = PyBb
        second = JsFish
        exam = set_q1(second.language, self.get_marks(1))
        exam += set_q2(second.language, second.whole, second.part, second.add_part, second.part_data, self.get_marks(2))
        exam += set_q3(second.language, second.whole, second.part, second.get_part, second.part_output,
                       self.get_marks(3))
        exam += set_q4(first.language, first.part, first.sub_part, first.add_sub_part, self.get_marks(4))
        exam += set_q5(first.language, first.whole, first.sub_part, first.add_sub_part, first.find_part,
                       first.sub_part_data, self.get_marks(5))
        exam += set_q6(first.language, first.part, first.boolean_method, first.boolean_condition, self.get_marks(2))
        exam += set_q7(second.language, second.whole, second.part, second.sub_part, second.get_sub_parts,
                       second.boolean_condition3, second.sub_part_output,
                       self.get_marks(8))
        return exam


class SocialClub(BloodBank):
    def py(self):
        imp = PySc
        exam = set_q1(imp.language, self.get_marks(1))
        exam += set_q2(imp.language, imp.whole, imp.part, imp.add_part, imp.part_data, self.get_marks(2))
        exam += set_q3(imp.language, imp.whole, imp.part, imp.get_part, imp.part_output,
                       self.get_marks(3))
        exam += set_q4(imp.language, imp.part, imp.sub_part, imp.add_sub_part, self.get_marks(4))
        exam += set_q5(imp.language, imp.whole, imp.sub_part, imp.add_sub_part, imp.find_part,
                       imp.sub_part_data, self.get_marks(5))
        exam += set_q6(imp.language, imp.part, imp.boolean_method, imp.boolean_condition, self.get_marks(2))
        exam += set_q7(imp.language, imp.whole, imp.part, imp.sub_part, imp.get_sub_parts,
                       imp.boolean_condition3,
                       imp.sub_part_output, self.get_marks(8))
        return exam

    def js(self):
        imp = JsSc
        exam = set_q1(imp.language, self.get_marks(1))
        exam += set_q2(imp.language, imp.whole, imp.part, imp.add_part, imp.part_data, self.get_marks(2))
        exam += set_q3(imp.language, imp.whole, imp.part, imp.get_part, imp.part_output,
                       self.get_marks(3))
        exam += set_q4(imp.language, imp.part, imp.sub_part, imp.add_sub_part, self.get_marks(4))
        exam += set_q5(imp.language, imp.whole, imp.sub_part, imp.add_sub_part, imp.find_part,
                       imp.sub_part_data, self.get_marks(5))
        exam += set_q6(imp.language, imp.part, imp.boolean_method, imp.boolean_condition, self.get_marks(2))
        exam += set_q7(imp.language, imp.whole, imp.part, imp.sub_part, imp.get_sub_parts,
                       imp.boolean_condition3,
                       imp.sub_part_output, self.get_marks(8))

    def sc_bb(self):
        first = PySc
        second = JsBb
        exam = set_q1(second.language, self.get_marks(1))
        exam += set_q2(second.language, second.whole, second.part, second.add_part, second.part_data, self.get_marks(2))
        exam += set_q3(second.language, second.whole, second.part, second.get_part, second.part_output,
                       self.get_marks(3))
        exam += set_q4(first.language, first.part, first.sub_part, first.add_sub_part, self.get_marks(4))
        exam += set_q5(first.language, first.whole, first.sub_part, first.add_sub_part, first.find_part,
                       first.sub_part_data, self.get_marks(5))
        exam += set_q6(first.language, first.part, first.boolean_method, first.boolean_condition, self.get_marks(2))
        exam += set_q7(second.language, second.whole, second.part, second.sub_part, second.get_sub_parts,
                       second.boolean_condition3, second.sub_part_output,
                       self.get_marks(8))
        return exam

    def sc_dog(self):
        first = PySc
        second = JsDog
        exam = set_q1(second.language, self.get_marks(1))
        exam += set_q2(second.language, second.whole, second.part, second.add_part, second.part_data, self.get_marks(2))
        exam += set_q3(second.language, second.whole, second.part, second.get_part, second.part_output,
                       self.get_marks(3))
        exam += set_q4(first.language, first.part, first.sub_part, first.add_sub_part, self.get_marks(4))
        exam += set_q5(first.language, first.whole, first.sub_part, first.add_sub_part, first.find_part,
                       first.sub_part_data, self.get_marks(5))
        exam += set_q6(first.language, first.part, first.boolean_method, first.boolean_condition, self.get_marks(2))
        exam += set_q7(second.language, second.whole, second.part, second.sub_part, second.get_sub_parts,
                       second.boolean_condition3, second.sub_part_output,
                       self.get_marks(8))
        return exam

    def sc_fish(self):
        first = PySc
        second = JsFish
        exam = set_q1(second.language, self.get_marks(1))
        exam += set_q2(second.language, second.whole, second.part, second.add_part, second.part_data, self.get_marks(2))
        exam += set_q3(second.language, second.whole, second.part, second.get_part, second.part_output,
                       self.get_marks(3))
        exam += set_q4(first.language, first.part, first.sub_part, first.add_sub_part, self.get_marks(4))
        exam += set_q5(first.language, first.whole, first.sub_part, first.add_sub_part, first.find_part,
                       first.sub_part_data, self.get_marks(5))
        exam += set_q6(first.language, first.part, first.boolean_method, first.boolean_condition, self.get_marks(2))
        exam += set_q7(second.language, second.whole, second.part, second.sub_part, second.get_sub_parts,
                       second.boolean_condition3, second.sub_part_output,
                       self.get_marks(8))
        return exam

class Dog(BloodBank):
    def py(self):
        imp = PyDog
        exam = set_q1(imp.language, self.get_marks(1))
        exam += set_q2(imp.language, imp.whole, imp.part, imp.add_part, imp.part_data, self.get_marks(2))
        exam += set_q3(imp.language, imp.whole, imp.part, imp.get_part, imp.part_output,
                       self.get_marks(3))
        exam += set_q4(imp.language, imp.part, imp.sub_part, imp.add_sub_part, self.get_marks(4))
        exam += set_q5(imp.language, imp.whole, imp.sub_part, imp.add_sub_part, imp.find_part,
                       imp.sub_part_data, self.get_marks(5))
        exam += set_q6(imp.language, imp.part, imp.boolean_method, imp.boolean_condition, self.get_marks(2))
        exam += set_q7(imp.language, imp.whole, imp.part, imp.sub_part, imp.get_sub_parts,
                       imp.boolean_condition3,
                       imp.sub_part_output, self.get_marks(8))
        return exam

    def js(self):
        imp = JsDog
        exam = set_q1(imp.language, self.get_marks(1))
        exam += set_q2(imp.language, imp.whole, imp.part, imp.add_part, imp.part_data, self.get_marks(2))
        exam += set_q3(imp.language, imp.whole, imp.part, imp.get_part, imp.part_output,
                       self.get_marks(3))
        exam += set_q4(imp.language, imp.part, imp.sub_part, imp.add_sub_part, self.get_marks(4))
        exam += set_q5(imp.language, imp.whole, imp.sub_part, imp.add_sub_part, imp.find_part,
                       imp.sub_part_data, self.get_marks(5))
        exam += set_q6(imp.language, imp.part, imp.boolean_method, imp.boolean_condition, self.get_marks(2))
        exam += set_q7(imp.language, imp.whole, imp.part, imp.sub_part, imp.get_sub_parts,
                       imp.boolean_condition3,
                       imp.sub_part_output, self.get_marks(8))

    def dog_bb(self):
        first = PyDog
        second = JsBb
        exam = set_q1(second.language, self.get_marks(1))
        exam += set_q2(second.language, second.whole, second.part, second.add_part, second.part_data, self.get_marks(2))
        exam += set_q3(second.language, second.whole, second.part, second.get_part, second.part_output,
                       self.get_marks(3))
        exam += set_q4(first.language, first.part, first.sub_part, first.add_sub_part, self.get_marks(4))
        exam += set_q5(first.language, first.whole, first.sub_part, first.add_sub_part, first.find_part,
                       first.sub_part_data, self.get_marks(5))
        exam += set_q6(first.language, first.part, first.boolean_method, first.boolean_condition, self.get_marks(2))
        exam += set_q7(second.language, second.whole, second.part, second.sub_part, second.get_sub_parts,
                       second.boolean_condition3, second.sub_part_output,
                       self.get_marks(8))
        return exam

    def dog_sc(self):
        first = PyDog
        second = JsSc
        exam = set_q1(second.language, self.get_marks(1))
        exam += set_q2(second.language, second.whole, second.part, second.add_part, second.part_data, self.get_marks(2))
        exam += set_q3(second.language, second.whole, second.part, second.get_part, second.part_output,
                       self.get_marks(3))
        exam += set_q4(first.language, first.part, first.sub_part, first.add_sub_part, self.get_marks(4))
        exam += set_q5(first.language, first.whole, first.sub_part, first.add_sub_part, first.find_part,
                       first.sub_part_data, self.get_marks(5))
        exam += set_q6(first.language, first.part, first.boolean_method, first.boolean_condition, self.get_marks(2))
        exam += set_q7(second.language, second.whole, second.part, second.sub_part, second.get_sub_parts,
                       second.boolean_condition3, second.sub_part_output,
                       self.get_marks(8))
        return exam

    def dog_fish(self):
        first = PyDog
        second = JsFish
        exam = set_q1(second.language, self.get_marks(1))
        exam += set_q2(second.language, second.whole, second.part, second.add_part, second.part_data, self.get_marks(2))
        exam += set_q3(second.language, second.whole, second.part, second.get_part, second.part_output,
                       self.get_marks(3))
        exam += set_q4(first.language, first.part, first.sub_part, first.add_sub_part, self.get_marks(4))
        exam += set_q5(first.language, first.whole, first.sub_part, first.add_sub_part, first.find_part,
                       first.sub_part_data, self.get_marks(5))
        exam += set_q6(first.language, first.part, first.boolean_method, first.boolean_condition, self.get_marks(2))
        exam += set_q7(second.language, second.whole, second.part, second.sub_part, second.get_sub_parts,
                       second.boolean_condition3, second.sub_part_output,
                       self.get_marks(8))
        return exam

class Fish(BloodBank):
    def py(self):
        imp = PyFish
        exam = set_q1(imp.language, self.get_marks(1))
        exam += set_q2(imp.language, imp.whole, imp.part, imp.add_part, imp.part_data, self.get_marks(2))
        exam += set_q3(imp.language, imp.whole, imp.part, imp.get_part, imp.part_output,
                       self.get_marks(3))
        exam += set_q4(imp.language, imp.part, imp.sub_part, imp.add_sub_part, self.get_marks(4))
        exam += set_q5(imp.language, imp.whole, imp.sub_part, imp.add_sub_part, imp.find_part,
                       imp.sub_part_data, self.get_marks(5))
        exam += set_q6(imp.language, imp.part, imp.boolean_method, imp.boolean_condition, self.get_marks(2))
        exam += set_q7(imp.language, imp.whole, imp.part, imp.sub_part, imp.get_sub_parts,
                       imp.boolean_condition3,
                       imp.sub_part_output, self.get_marks(8))
        return exam

    def js(self):
        imp = JsFish
        exam = set_q1(imp.language, self.get_marks(1))
        exam += set_q2(imp.language, imp.whole, imp.part, imp.add_part, imp.part_data, self.get_marks(2))
        exam += set_q3(imp.language, imp.whole, imp.part, imp.get_part, imp.part_output,
                       self.get_marks(3))
        exam += set_q4(imp.language, imp.part, imp.sub_part, imp.add_sub_part, self.get_marks(4))
        exam += set_q5(imp.language, imp.whole, imp.sub_part, imp.add_sub_part, imp.find_part,
                       imp.sub_part_data, self.get_marks(5))
        exam += set_q6(imp.language, imp.part, imp.boolean_method, imp.boolean_condition, self.get_marks(2))
        exam += set_q7(imp.language, imp.whole, imp.part, imp.sub_part, imp.get_sub_parts,
                       imp.boolean_condition3,
                       imp.sub_part_output, self.get_marks(8))

    def fish_bb(self):
        first = PyFish
        second = JsBb
        exam = set_q1(second.language, self.get_marks(1))
        exam += set_q2(second.language, second.whole, second.part, second.add_part, second.part_data, self.get_marks(2))
        exam += set_q3(second.language, second.whole, second.part, second.get_part, second.part_output,
                       self.get_marks(3))
        exam += set_q4(first.language, first.part, first.sub_part, first.add_sub_part, self.get_marks(4))
        exam += set_q5(first.language, first.whole, first.sub_part, first.add_sub_part, first.find_part,
                       first.sub_part_data, self.get_marks(5))
        exam += set_q6(first.language, first.part, first.boolean_method, first.boolean_condition, self.get_marks(2))
        exam += set_q7(second.language, second.whole, second.part, second.sub_part, second.get_sub_parts,
                       second.boolean_condition3, second.sub_part_output,
                       self.get_marks(8))
        return exam

    def fish_sc(self):
        first = PyFish
        second = JsSc
        exam = set_q1(second.language, self.get_marks(1))
        exam += set_q2(second.language, second.whole, second.part, second.add_part, second.part_data, self.get_marks(2))
        exam += set_q3(second.language, second.whole, second.part, second.get_part, second.part_output,
                       self.get_marks(3))
        exam += set_q4(first.language, first.part, first.sub_part, first.add_sub_part, self.get_marks(4))
        exam += set_q5(first.language, first.whole, first.sub_part, first.add_sub_part, first.find_part,
                       first.sub_part_data, self.get_marks(5))
        exam += set_q6(first.language, first.part, first.boolean_method, first.boolean_condition, self.get_marks(2))
        exam += set_q7(second.language, second.whole, second.part, second.sub_part, second.get_sub_parts,
                       second.boolean_condition3, second.sub_part_output,
                       self.get_marks(8))
        return exam

    def fish_dog(self):
        first = PyFish
        second = JsDog
        exam = set_q1(second.language, self.get_marks(1))
        exam += set_q2(second.language, second.whole, second.part, second.add_part, second.part_data, self.get_marks(2))
        exam += set_q3(second.language, second.whole, second.part, second.get_part, second.part_output,
                       self.get_marks(3))
        exam += set_q4(first.language, first.part, first.sub_part, first.add_sub_part, self.get_marks(4))
        exam += set_q5(first.language, first.whole, first.sub_part, first.add_sub_part, first.find_part,
                       first.sub_part_data, self.get_marks(5))
        exam += set_q6(first.language, first.part, first.boolean_method, first.boolean_condition, self.get_marks(2))
        exam += set_q7(second.language, second.whole, second.part, second.sub_part, second.get_sub_parts,
                       second.boolean_condition3, second.sub_part_output,
                       self.get_marks(8))
        return exam

if __name__ == '__main__':
    print(Fish().bb_fish())
