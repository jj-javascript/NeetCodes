// Problem:

// Given an array of integers nums, return the length of the longest consecutive sequence of elements that can be formed.

// A consecutive sequence is a sequence of elements in which each element is exactly 1 greater than the previous element. The elements do not have to be consecutive in the original array.

// You must write an algorithm that runs in O(n) time.

// Example 1:

// Input: nums = [2,20,4,10,3,4,5]

// Output: 4
// Explanation: The longest consecutive sequence is [2, 3, 4, 5].

// Example 2:

// Input: nums = [0,3,2,5,4,6,1,1]

// Output: 7
// Constraints:

// 0 <= nums.length <= 1000
// -10^9 <= nums[i] <= 10^9


// Solution:

class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length === 0) return 0;

        function compareNumbers(a, b) {
            return a - b;
        }

        let newNums = nums.sort(compareNumbers);
        let xtraNewNums = [...new Set(newNums)];

        let longest = 1;  // was: let newNumArr = []
        let current = 1;  // added

        for (let i = 1; i < xtraNewNums.length; i++) {  // was: two nested loops starting at i=0, j=1
            if (xtraNewNums[i] === xtraNewNums[i - 1] + 1) {  // was: xtraNewNums[i] + 1 === xtraNewNums[j]
                current++;                                      // was: newNumArr.push(xtraNewNums[i])
            } else {
                longest = Math.max(longest, current);          // was: break
                current = 1;
            }
        }

        return Math.max(longest, current);  // was: return newNumArr.length
    }
}