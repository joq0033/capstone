from cmd import Cmd
from docx import Document


class Cli(Cmd):

    def do_create(self, arg):
        """
        Create a Word file
        Syntax: create
                Enter a number from chosen_input: [eg:1 to 16]
                Enter .docx file name: [eg:please.docx]
        """
        from main_files import BloodBank, SocialClub, Dog
        chosen_input = {
            1: BloodBank().py(),
            2: BloodBank().js(),
            3: BloodBank().bb_sc(),
            4: BloodBank().bb_dog(),
            5: SocialClub().py(),
            6: SocialClub().js(),
            7: SocialClub().sc_bb(),
            8: SocialClub().sc_dog(),
            9: Dog().py(),
            10: Dog().js(),
            11: Dog().dog_bb(),
            12: Dog().dog_sc(),
			13: Fish().py(),
			14: Fish().js(),
			15: Fish().fish_bb(),
			16: Fish().fish_sc()
			
        }
        selected = int(input("Enter a number from chosen_input: "))
        if selected <= 16:
            output = chosen_input[selected]
            document = Document()
            document.add_paragraph(output)
            document.save(input("Enter .docx file name: "))

    def do_exit(self, line):
        """
        Stop the program
        syntax: exit
        """
        print('Thank you for visiting.')
        return True


if __name__ == '__main__':
    Cli().cmdloop()
