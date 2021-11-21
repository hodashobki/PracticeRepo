import random
x=random.randrange(1,6)
y=random.randrange(1,6)
result=(x,y)
print(result)

def str_to_list( str ) :
	output=[]
	for i in str:
		if i ==" ":
			continue
		else:
			output.append(i)
	#Insert your code here
	return output
print(str_to_list("my string"))	

ll=[[[1,2],[55,5]],[[2,3],[55,5]]]
for row in range(len(ll)):
    for item in range(row+1 ):
        for i in range(item):
            print(ll[i])
