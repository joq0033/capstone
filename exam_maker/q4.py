def set_q4(language, part, sub_part, add_sub_part, marks):
    q = f'\n{language}\n'
    q += f'4.\tWrite an {add_sub_part} method for the {part} class that can be used to create a new {sub_part}.\n'
    q += f'Note: You will need to add some code in the {sub_part} class as well.\n'
    q += marks
    return q
