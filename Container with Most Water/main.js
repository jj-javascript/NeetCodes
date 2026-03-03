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
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let l = 0;
        let r = heights.length - 1;
        let res = 0;

        while (l < r) {
            const area = Math.min(heights[l], heights[r]) * (r - l);
            res = Math.max(res, area);
            if (heights[l] <= heights[r]) {
                l++;
            } else {
                r--;
            }
        }
        return res;
    }
}