# bubleSort:
# def bubble_Sort(arr):
#     for i in range(len(arr)-1):
#         for j in range(len(arr)-1-i):
#             if arr[j]>arr[j+1]:
#                 arr[j],arr[j+1]=arr[j+1],arr[j]
#     return arr            
  
   

# print(bubble_Sort([1,5,3,2,0,8]))
# *****************************************************
# Selection Sort
# def selection_sort(arr):
#     print("yep ")
   
#     for i in range(len(arr)):
#         mini=i
#         for j in range(i+1,len(arr)):
#             if arr[mini] >arr[j]:
#                 mini=j
               
#         arr[i],arr[mini]=arr[mini],arr[i]        
#     return arr            

# print(selection_sort([1,5,3,2,0,8]))
# *********************************************************************************
# Insertion Sort
# Function to do insertion sort

def insertionSort(arr):    
 
    # Traverse through 1 to len(arr)
    
    for i in range(1,len(arr)):    
 
        key=arr[i]

        j = i-1
        while j >= 0 and key < arr[j] :
                arr[j + 1] = arr[j]
                j -= 1
        arr[j + 1] = key
    return arr
print(insertionSort([12, 11, 13, 5, 6]))

