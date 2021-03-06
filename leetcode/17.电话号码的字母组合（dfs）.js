// 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。

// 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    // 如果传入 digits 为空，则直接返回结果[]
    if (!digits || !digits.length) {
        return [];
    }

    const obj = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz',
    };

    // 存储最终结果
    let result = [];

    /** str是当前拼接过程中的字符串，index是当前在翻译digits的第几位 */
    const dfs = (str, index) => {
        if(str.length === digits.length) {
            return result.push(str)
        }

        const curKey = obj[digits[index]]
        for(let i=0; i<curKey.length; i ++) {
            dfs(`${str}${curKey[i]}`, index +1)
        }
    }

    // 递归入口，从下标0开始翻译
    dfs('', 0)

    return result
};
console.log(letterCombinations('23'))