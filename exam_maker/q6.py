def set_q6(language, part, boolean_method, boolean_condition, marks):
    q = f'{language}\n'
    q += f'6.\tWrite a boolean get method named {boolean_method} in the {part} class'
    q += f' that returns true if {boolean_condition} and false otherwise.\n'
    q += marks
    return q
