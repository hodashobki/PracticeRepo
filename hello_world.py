# for i in range(len(A)):
#        min_idx = i
#     for j in range(i+1, len(A)):
#         if A[min_idx] > A[j]:
#             min_idx = j
              
#     # Swap the found minimum element with 
#     # the first element        
#     A[i], A[min_idx] = A[min_idx], A[i]


def selection_sort(arr):
    print("yep ")
   
    for i in range(len(arr)):
        mini=i
        for j in range(i+1,len(arr)):
            if arr[mini] >arr[j]:
                mini=j
                # arr[j],mini=mini,arr[j]
        arr[i],arr[mini]=arr[mini],arr[i]        
    return arr            
            

print(selection_sort([1,5,3,2,0,8]))


