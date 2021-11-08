items=[1,2,3,4,5,6,4,5]
uniqes=[]
for item in items:
    if item not in uniqes:
        uniqes.append(item)
print(uniqes)