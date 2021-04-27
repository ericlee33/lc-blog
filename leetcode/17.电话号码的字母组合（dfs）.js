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