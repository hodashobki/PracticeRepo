# if you have a string ,count how many times each charecter is repeated

# def count_char(str):
#     newdict=dict(str)

#     for key,value in newdict.items():
#         if key in newdict == i in str:
#             value +=1
#     return newdict
# print (count_char("hoho"))            


# initializing string
test_str = "GeeksforGeeks"

# using naive method to get count
# of each element in string
all_freq = {}

for i in test_str:
	if i in all_freq:
		all_freq[i] += 1
	else:
		all_freq[i] = 1

# printing result
print ("Count of all characters in GeeksforGeeks is :\n "
										+ str(all_freq))
