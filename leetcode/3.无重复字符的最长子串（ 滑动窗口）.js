// 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。


/**
 * @param {string} s
 * @return {number}
 */
/**
 * 解题思路-需要用到Map
 * 1.先找出所有不包含重复字符的子串
 * 2.找出长度最大的子串，返回其长度
 *
 * 那么如何找出所有不包含重复字符的子串？
 * 1.用双指针维护一个滑动窗口，来剪切子串 js中slice也是滑动窗口
 * 如何遍历？
 * 2.不断移动右指针，遇到重复字符，就把左指针移到重复字符的下一位
 *
 * 3.移动过程中，记录所有窗口的长度，并返回最大值
 */
// var lengthOfLongestSubstring = function (s) {
//     let l = 0;
//     // 记录窗口长度
//     let res = 0;

//     const map = new Map();

//     // 不断移动右指针
//     for (let r = 0; r < s.length; r += 1) {
//         //遇到重复字符 左指针移动，如何知道当前字符是重复字符？建立map 移动右指针存值和下标
//         //注意点：要判断一下 重复字符下标必须在滑动窗口里面 所以下标大于左指针位置

//         if (map.has(s[r]) && map.get(s[r]) >= l) {
//             l = map.get(s[r]) + 1;
//         }

//         res = Math.max(res, r - l + 1); //新窗口长度 取大的

//         map.set(s[r], r);
//     }

//     return res;
// };

// 滑动窗口
var lengthOfLongestSubstring = function(str) {
    let res = 0,
        left = 0;
    map = new Map();

    // 每一次遍历，就把最新当前字母的最后出现的index更新

    for (let right = 0; right < str.length; right++) {
        // if (map.get(str[right]) !== undefined)
        // 和 map.has(str[right])是一个含义

        // 如果当前字母已经在map中出现过，那么left的位置就要从这个位置+1
        // 'abba'这个例子表示不能如果left已经滑动了，不能再往回滑（会出现a 的index是0，如果不限制会导致left往回了）
        if (map.has(str[right]) && left < map.get(str[right]) + 1) {
            left = map.get(str[right]) + 1;
        }
        // 每一次循环都要计算，right每一次都会更新
        res = Math.max(res, right - left + 1);

        map.set(str[right], right);
    }
    return res;
};
lengthOfLongestSubstring('abba');

// 输入: s = "pwwkew"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
//      请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
