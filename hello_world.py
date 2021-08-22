def selection_sort(arr):
    print("yep ")
    mini=arr[0]
    for i in range(len(arr)-1):
        for j in range(len(arr)-1-i):
            if mini < arr[j]:
                arr[j],mini=mini,arr[j]
    return arr            
            

print(selection_sort([1,5,3,2,0,8]))


