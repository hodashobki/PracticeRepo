# if you have a string ,count how many times each charecter is repeated

def coumtString(str):
    newdict=dict()

    for key in str:
        if key in newdict:
            newdict[key]+=1
        else :
            newdict[key]=1
    return newdict

print(coumtString("hodaMohamaad"))

# OR 

# # initializing string
# test_str = "GeeksforGeeks"

# # using naive method to get count
# # of each element in string
# all_freq = {}

# for i in test_str:
# 	if i in all_freq:
# 		all_freq[i] += 1
# 	else:
# 		all_freq[i] = 1

# # printing result
# print ("Count of all characters in GeeksforGeeks is :\n "
# 										+ str(all_freq))
