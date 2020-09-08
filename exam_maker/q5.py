def set_q5(language, whole, sub_part, add_sub_part, find_part, sub_part_data, marks):
    q = f'{language}\n'
    q += f'5.\tIn the setup method of the Controller class write code to create the following {sub_part}, '
    q += f'using the {add_sub_part} method that has been created previously.\n'
    q += f'NOTE: You will have to use the {find_part} method in the {whole} class\n'
    q += f'\n{sub_part_data}\n'
    q += marks
    return q
