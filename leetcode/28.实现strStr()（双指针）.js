/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let left = 0 , right = 0
    while(left < haystack.length && right < needle.length) {
        if(haystack[left + right] === needle[right]) {
            right ++
        } else {
            right = 0 
            left ++
        }
    }
    return right === needle.length ? left : -1;
};

console.log(strStr('hello', 'll'))

// 示例 1:

// 输入: haystack = "hello", needle = "ll"
// 输出: 2
// 示例 2:

// 输入: haystack = "aaaaa", needle = "bba"
// 输出: -1

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/implement-strstr
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。