// 给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。

// 回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。例如，121 是回文，而 123 不是。

/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function (x) {
    if (x < 0) {
        return false
    }

    /** 保存当前索引 */
    const y = x

    let reverseNum = 0
    while (x > 0) {
        /** 每一次计算出x的最后一位，每一轮循环之后就给当前的位推到前面去了 */
        reverseNum = reverseNum * 10 + x % 10
        x = Math.floor(x / 10)
    }
    return reverseNum === y
};

// 输入：x = -121
// 输出：false
// 解释：从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。