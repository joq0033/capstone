def set_q2(language, whole, part, add_part, data, marks):
    q = f'\n{language}\n'
    q += f'2.\tIn the setup method of the Controller class write code that to create the following {part}s'
    q += f' using the {add_part} method that exists in the {whole} class.\n'
    q += f'\n\n{data}\n'
    q += f'\nNOTE: the defect in this data is deliberate – fix it!\n'
    q += marks

    return q
