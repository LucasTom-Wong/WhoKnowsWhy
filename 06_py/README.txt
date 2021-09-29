Lucas Tom-Wong, Naomi Narnajo
SoftDev
K06 -- occupation -- README
2021-09-29

- used csv.reader to take input from the from the csv file. used commas as delimters to split the information in each row and used quoatation marks as our quotechar. the occuapation and its percentage were then stored in a list called row. we then added the two elemtns in the row list as a value and key pair into a dictionary.

- dictonaries are similar to a key and map in java where information is stored in key and values pairs, and the keys can be used for indexing throguh the dicitionary. the dictionary made it easy to see the realtionship between the occupation and their probabilities, and to ask them in relation to each other. 

- multiple data stored together. Lists are sorted.

- heading in markdown are created by adding "#" before texts. you can change the size of the heading based on the number of "#", with "##" being smaller then "#" and so forth. * put before text makes a bulleted list. ** <text> makes a bolded sentence. To add links in Markdown, put the text you want linked in brackets and the link in parathenthsis after. 

- create a random number between 0 and the probability of all possible answers, if the number is less than the probability of the value's probability, return true and do something, otherwise remove the value from the list of possibility as well as subtract the value's probability from the total probability. Repeat for all values if false.