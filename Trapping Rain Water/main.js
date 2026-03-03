// Problem:

// You are given an array of non-negative integers height which represent an elevation map. Each value height[i] represents the height of a bar, which has a width of 1.

// Return the maximum area of water that can be trapped between the bars.

// Example 1:


// Input: height = [0,2,0,3,1,0,1,3,2,1]

// Output: 9
// Constraints:

// 1 <= height.length <= 1000
// 0 <= height[i] <= 1000


// Solution:

class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let n = height.length;
        if (n === 0) {
            return 0;
        }

        let leftMax = new Array(n).fill(0);
        let rightMax = new Array(n).fill(0);

        leftMax[0] = height[0];
        for (let i = 1; i < n; i++) {
            leftMax[i] = Math.max(leftMax[i - 1], height[i]);
        }

        rightMax[n - 1] = height[n - 1];
        for (let i = n - 2; i >= 0; i--) {
            rightMax[i] = Math.max(rightMax[i + 1], height[i]);
        }

        let res = 0;
        for (let i = 0; i < n; i++) {
            res += Math.min(leftMax[i], rightMax[i]) - height[i];
        }
        return res;
    }
}