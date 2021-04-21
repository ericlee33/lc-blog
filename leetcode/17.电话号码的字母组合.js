// /**

//  * @param {string} digits

//  * @return {string[]}

//  */

// var letterCombinations = function (digits) {

//   // 如果传入 digits 为空，则直接返回结果[]

//   if (!digits || !digits.length) {

//     return [];

//   }

//   // 使用 Map 存储按键对应的字母

//   const map = new Map([

//     ['2', 'abc'],

//     ['3', 'def'],

//     ['4', 'ghi'],

//     ['5', 'jkl'],

//     ['6', 'mno'],

//     ['7', 'pqrs'],

//     ['8', 'tuv'],

//     ['9', 'wxyz'],

//   ]);

//   // 存储最终结果

//   let result = [];

//   // 回溯生成所有的字符串组合

//   function backtrack(str, current) {

//     // 递归终止条件

//     // 当生成的字符串长度等于输入长度时，表示生成完毕，储存结果并退出循环。

//     // 若不退出，由于 current 已经超出了 digits 长度，会因 map.get 获取值为空而报错。

//     if (str.length === digits.length) {

//       result.push(str);

//       return;

//     }

//     // 当前层递归逻辑

//     // 从 Map 中获取当前输入的数字映射的字母

//     const digit = map.get(digits[current]);

//     // 遍历当前映射的字符串，生成不同组合

//     for (let i = 0; i < digit.length; i++) {

//       // 下探到下层递归

//       // 在当前字符串中选取一个字母，进入下一层递归的选择

//       backtrack(str + digit[i], current + 1);

//     }

//   }

//   // 回溯生成组合，初始状态 str 为空，current 为 0

//   backtrack('', 0);

//   return result;

// };

// ```

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