
# Given an integer array nums, return all the triplets [nums[i],
#  nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

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
                        