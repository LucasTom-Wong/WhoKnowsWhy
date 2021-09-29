# Lucas Tom-Wong, Naomi Nranajo
# SoftDev
# K06 -- occupation -- returns a random occupation based on weighted average
# 2021-09-28

import csv
import random

def readFile(file):
    dict = {}
    with open(file, newline='') as csvfile:
        occupations = csv.reader(csvfile, delimiter=',', quotechar='"')
        x = 0
        for row in occupations:
            if x == 0:
                x = x + 1
            else:
                dict[row[0]] = float(row[1])
    return dict
    # reads csv file and returns a dictornary
    # divides dictornary into [occupations][prob]
    # divides using commas ',' and ignores everything inside quotation marks '""'

def determineProb(occupationProb, totalProb):
    return random.random() * totalProb < occupationProb
    # returns true if a random number less than or equal to the totalProb, is less than the probability of the occupation

def main():
    occupationProbabilities = readFile('occupations.csv')
    # for x in range(10000):
    max_Prob = 98.8
    for x, y in occupationProbabilities.items(): # x = occupation, y = probability
        if determineProb(y, max_Prob):
            print(x)
            # prints the occupation if rng wants
            # print(y)
            break
            # breaks loop
        else :
            max_Prob -= y
            # subtracts the probability of the occupation from the maximum probability

if __name__ == "__main__":
    main()
# only runs main if you run this program
