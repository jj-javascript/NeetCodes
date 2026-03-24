// Problem:

// Given two strings s and t, return the shortest substring of s such that every character in t, including duplicates, is present in the substring. If such a substring does not exist, return an empty string "".

// You may assume that the correct output is always unique.

// Example 1:

// Input: s = "OUZODYXAZV", t = "XYZ"

// Output: "YXAZ"
// Explanation: "YXAZ" is the shortest substring that includes "X", "Y", and "Z" from string t.

// Example 2:

// Input: s = "xyz", t = "xyz"

// Output: "xyz"
// Example 3:

// Input: s = "x", t = "xy"

// Output: ""
// Constraints:

// 1 <= s.length <= 1000
// 1 <= t.length <= 1000
// s and t consist of uppercase and lowercase English letters.

// Solution:

class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (t === '') return '';

        let countT = {};
        for (let c of t) {
            countT[c] = (countT[c] || 0) + 1;
        }

        let res = [-1, -1];
        let resLen = Infinity;

        for (let i = 0; i < s.length; i++) {
            let countS = {};
            for (let j = i; j < s.length; j++) {
                countS[s[j]] = (countS[s[j]] || 0) + 1;

                let flag = true;
                for (let c in countT) {
                    if ((countS[c] || 0) < countT[c]) {
                        flag = false;
                        break;
                    }
                }

                if (flag && j - i + 1 < resLen) {
                    resLen = j - i + 1;
                    res = [i, j];
                }
            }
        }

        return resLen === Infinity ? '' : s.slice(res[0], res[1] + 1);
    }
}