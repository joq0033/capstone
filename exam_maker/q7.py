def set_q7(language, whole, part, sub_part, get_sub_parts, boolean_condition, sub_part_output, marks):
    q = f'{language}\n'
    q += f'7.\tWrite a {get_sub_parts} method for the {whole} class'
    q += f' that first lists for each {part} who {boolean_condition}, the {part}\'s details'
    q += f' and then lists underneath the details of the {sub_part} as shown below.\n'
    q += f'This method must call the method created in the previous question.\n'
    q += f'The required output is:\n\n'
    q += f'{sub_part_output}'
    q += f'\nNOTE: The order shown above is the required order. Punctuation and spacing must also be as shown above.\n'
    q += marks
    return q
