// Problem:

// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] where nums[i] + nums[j] + nums[k] == 0, and the indices i, j and k are all distinct.

// The output should not contain any duplicate triplets. You may return the output and the triplets in any order.

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]

// Output: [[-1,-1,2],[-1,0,1]]
// Explanation:
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].

// Example 2:

// Input: nums = [0,1,1]

// Output: []
// Explanation: The only possible triplet does not sum up to 0.

// Example 3:

// Input: nums = [0,0,0]

// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.

// Constraints:

// 3 <= nums.length <= 1000
// -10^5 <= nums[i] <= 10^5

// Solution:

class Solution {
    threeSum(nums) {
        function compareNumbers(a, b) {
            return a - b;
        }
    
        let newNums = nums.sort(compareNumbers);
        let tripletArr = [];
    
        for (let i = 0; i < newNums.length; i++) {
            for (let j = i + 1; j < newNums.length; j++) {
                for (let k = j + 1; k < newNums.length; k++) {
                    if (newNums[i] + newNums[j] + newNums[k] === 0) {
                        const triplet = [newNums[i], newNums[j], newNums[k]].join(',');
                        const alreadyFound = tripletArr.some(t => t.join(',') === triplet);
                        if (!alreadyFound) {
                            tripletArr.push([newNums[i], newNums[j], newNums[k]]);
                        }
                    }
                }
            }
        }
    
        return tripletArr;
    }
    }