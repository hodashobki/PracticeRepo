
# Given an integer array nums, return all the triplets [nums[i],
#  nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + 
# nums[j] + nums[k] == 0.

# Notice that the solution set must not contain duplicate triplets.
class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        if len(nums)<3:
            return []
        if(all(num == 0 for num in nums)):
            return [[0,0,0]]
        size=len(nums)
        found=dict()
        nums=sorted(nums)
        # Enumerate() method adds a counter to an iterable and returns it in
        # a form of enumerating object. This enumerated object can then be used
        # directly for loops or 
        # converted into a list of tuples using the list() method
        for index ,value in enumerate(nums):
            # this will return((0,value1),(1,value2)...)
            left =index +1
            right =size -1
            while left <right:
                total =value +nums[left]+nums[right]
                if total ==0:
                    current = (value ,nums[left],nums[right])
                    if current not in found:
                        found[current]=True
                    right = right - 1
                elif total < 0:
                    left =left +1
                else:
                    right = right - 1
        return list(found.keys())



 # Given a string s. Return all the words vertically in the same
#  order in which they appear in s.
# Words are returned as a list of strings, complete with spaces when is 
# necessary. (Trailing spaces are not allowed).
# Each word would be put on only one column and that in one column there will be only one word.

 
class Solution:
    def printVertically(self, s: str) -> List[str]:
        array=s.split(" ")
        maax=max(array)
        composing=dict()
        sumof=""
      
        
        for i in range(len(maax)):
            if i not in composing:
                for j in array:
                    if j[i] !=None: 
                    # if len(maax)>=len(j)>0:
                        sumof +=j[i]
                    else:
                        sumof +=" "
            composing[i] =sumof.rstrip()
            return list(composing.values())
#Solution in javaScript:
# /**
#  * @param {string} s
#  * @return {string[]}
#  */
# var printVertically = function(s) {
#     let ans = [];
#   if(s === null || s.length === 0)
#     return ans;

#   let arr = s.split(" ");
#   let biggest = 0;
#   for(let i=0; i<arr.length; i++){
#     if(arr[i].length > biggest)
#       biggest = arr[i].length;
#   }

#   while(arr.length !== 0) {
#     let word = arr.shift().split("");
#     let getBigWord = false
#     if(word.length === biggest) {
#       getBigWord = true;
#     }
#     for(i=0; i<biggest; i++){
#       if(ans.length <= i)
#         ans[i] = word[i] === undefined ? " " : word[i];
#       else if(word[i] !== undefined) {
#         ans[i] += word[i];
#       } else if(!getBigWord) {
#         ans[i] += " ";
#       }
#     }
#   }

#   for(i = 0; i < ans.length; i++) {
#     // Modern version :
#     // ans[i] = ans[i].trimRight(); 
#     ans[i] = ans[i].trimEnd();
#   }

#   return ans;
# };
    
# In MATLAB, there is a handy function called reshape which can reshape an m x n matrix into
# a new one with a different size r x c keeping its original data.
# You are given an m x n matrix mat and two integers r and c representing the number of 
# rows and
#  the number of columns of the wanted reshaped matrix.
#  Input: mat = [[1,2],[3,4]], r = 1, c = 4
# Output: [[1,2,3,4]]
class Solution:
    def matrixReshape(self, mat: List[List[int]], r: int, c: int) -> List[List[int]]:
        
        if r*c !=len(mat)*len(mat[0]):
            return mat
      
        new_mat = [[] for _ in range(r)]
        k=0
        for i in range(len(mat)):
            for j in range(len(mat[0])):
                if len(new_mat[k]) == c:
                
                    k +=1
                new_mat[k].append(mat[i][j])
        return new_mat




# You are given a string s. We want to partition the string into as many parts as possible so that each 
# letter appears in at most one part.

# Return a list of integers representing the size of these parts.
# Example 1:

# Input: s = "ababcbacadefegdehijhklij"
# Output: [9,7,8]
# Explanation:
# The partition is "ababcbaca", "defegde", "hijhklij".
# This is a partition so that each letter appears in at most one part.
# A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits s into less parts.        
class Solution:
    def partitionLabels(self, s: str) -> List[int]:
         last = {c: i for i, c in enumerate(s)}
         j = start = 0
         ans = []
         for i, c in enumerate(s):
              j = max(j, last[c])
              if i == j:
                ans.append(i - start + 1)
                start = i + 1
         return ans
     
      