"""
Lucas Lee (Lewis Cass), Zhaoyu Lin, Lucas Tom Wong (LTW)
SoftDev
k10 -- Futher Thoughts on Flask App Varations -- Copied over Lewis's code to something that can run in flask
2021-10-05
"""

from flask import Flask

@app.route("/")

def read_occupations(filename):
    dict = {}
    with open(filename) as f:
         lines = csv.reader(f, delimiter=',')
         next(lines) # Skips the header of the csv

         for line in lines: # Loops through each line of the csv
             job = line[0]
             percentage = float(line[1]) # Converts string to a number

             dict[job] = percentage # Crates a new dict entry with the job and percentage

    del dict['Total'] # Removes the sum of all the percentages

    return dict

def get_random_occupation(dict):

    # Chooses a random key using the values as weights
    # Returns a list with one element
    print(list(dict.keys()))
    print(list(dict.values()))


    choice = random.choices(list(dict.keys()), weights = list(dict.values()), k = 1)

    return choice[0] # Picks out the first element

def main():
    occupations = read_occupations('occupations.csv')
    choice = get_random_occupation(occupations)

    print(choice)


if __name__ == "__main__":  # true if this file NOT imported
    app.debug = True        # enable auto-reload upon code change
    app.run()
