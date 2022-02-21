from spirals.spiral_tools import spiral


def spiral_program_script():
    print("Enter the size of the spiral matrix to print: ", end="")
    size = int(input())

    spr = spiral(size, padding=2)
    print(spr)


if __name__ == "__main__":
    spiral_program_script()
