// 给你一个字符串 s，找到 s 中最长的回文子串。


/**
 * @param {string} s
 * @return {string}
 */
/** 
 * j-i<2，因为长度为0或者1的回文字符串要特殊处理
 * dp方程 dp[i][j] = s[i] === s[j] &&  (j - i < 2 || dp[i+1][j-1])
 */
 var longestPalindrome = function (s) {
    const n = s.length
    let dp = Array.from(new Array(n), () => new Array(n).fill(0))
    let ans = ''

    for (let i = n - 1; i >= 0; i--) {
        for (let j = i; j < n; j++) {
            dp[i][j] = (s[i] === s[j] && (j - i < 2 || dp[i + 1][j - 1]))
            if (dp[i][j] && j - i + 1 > ans.length) {
                ans = s.slice(i, j + 1)
            }
        }
    }
    return ans
};
// 输入：s = "babad"
// 输出："bab"
// 解释："aba" 同样是符合题意的答案。