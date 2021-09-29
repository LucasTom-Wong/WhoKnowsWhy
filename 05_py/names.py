"""
Michelle, Theo, Lucas
SoftDev
A Program to Print a SoftDev Student's Name
Made from combining two different programs.
Additonal contributors: Christopher Liu, Lucas Lee, Zhaoyu Lin, 
2021-09-21
"""

# SUMMARY OF TRIO DISCUSSION
# names.py will take two text files as arguments.
# Each file will represent one period.
# Then you will be asked to put an input of 1, 2, or 3.
# If you input 1, you will get a random name from period 1.
# If you input 2, you will get a random name from period 2.
# If you input 3, you will get a random name from a list containing both periods.
# DISCOVERIES
# input("String")
# Prints "String" and asked for an input.

import sys
from random import randrange

def read_names(filename):
    """Reads a text file containing a list of names, where each line contains
    one name, and returns a list of the names."""
    file_contents = ""
    with open(filename, "r") as f:
        file_contents = f.read()
    names = file_contents.split("\n")

    # Remove empty lines
    names = [name for name in names if name]
    return names

def main():
    """Prints a random student name given two files containing lists of names,
##    where each line contains one name."""
    if len(sys.argv) != 3:
        print("Usage: python names.py pd1_filename pd2_filename")
        return

    pd1 = read_names(sys.argv[1])
    pd2 = read_names(sys.argv[2])
    # print(names[name_index])

    a = input("Enter 1 or 2 for a softdev student's name from periods 1 or 2 respectively. Enter 3 for a random name from either: ")

    if (a == 1 or a == "1"):
        pd1_index = randrange(len(pd1))
        print(pd1[pd1_index])
    elif (a == 2 or a == "2"):
        pd2_index = randrange(len(pd2))
        print(pd2[pd2_index])
    elif (a == 3 or a == "3"):
        names = pd1 + pd2
        name_index = randrange(len(names))
        print(names[name_index])
    else:
        print("Invalid entry. Try again")


if __name__ == "__main__":
    main()
