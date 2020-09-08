def set_q3(language, whole, part, get_part, output, marks):
	q = f'\n{language}\n'
	q += f'3.\tWrite a {get_part} method for {whole} class'
	q += f' that displays data about the {part}s.\n'
	q += '\nThe required output is:\n\n'
	q += f'{output}'
	q += '\nNOTE: Punctuation and spacing and ORDER must also be as shown above.\n'
	q += marks
	return q
