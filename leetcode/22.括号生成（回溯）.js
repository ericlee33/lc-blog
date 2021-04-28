// 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。

// 回溯
/**
 * @param {number} n
 * @return {string[]}
 */
 var generateParenthesis = function (n) {
    const res = []
    function dfs(leftRemain, rightRemain, str) {
        if (str.length === n * 2) {
            return res.push(str)
        }

        if (leftRemain > 0) {
            dfs(leftRemain - 1, rightRemain, str + '(')
        }

        /** 右括号比左括号剩下的多，才能选右括号 */
        if (rightRemain > 0 && rightRemain > leftRemain) {
            dfs(leftRemain, rightRemain - 1, str + ')')
        }
    }

    dfs(n, n, '')
    return res
};

// 输入：n = 3
// 输出：["((()))","(()())","(())()","()(())","()()()"]