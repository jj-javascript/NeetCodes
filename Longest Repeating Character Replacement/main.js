// Problem:

// You are given a string s consisting of only uppercase english characters and an integer k. You can choose up to k characters of the string and replace them with any other uppercase English character.

// After performing at most k replacements, return the length of the longest substring which contains only one distinct character.

// Example 1:

// Input: s = "XYYX", k = 2

// Output: 4
// Explanation: Either replace the 'X's with 'Y's, or replace the 'Y's with 'X's.

// Example 2:

// Input: s = "AAABABB", k = 1

// Output: 5
// Constraints:

// 1 <= s.length <= 1000
// 0 <= k <= s.length


// Solution:

class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let res = 0;
        for (let i = 0; i < s.length; i++) {
            let count = new Map();
            let maxf = 0;
            for (let j = i; j < s.length; j++) {
                count.set(s[j], (count.get(s[j]) || 0) + 1);
                maxf = Math.max(maxf, count.get(s[j]));
                if (j - i + 1 - maxf <= k) {
                    res = Math.max(res, j - i + 1);
                }
            }
        }
        return res;
    }
}