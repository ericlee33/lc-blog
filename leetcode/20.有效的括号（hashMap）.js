/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s.length % 2 === 1) return false;

    const obj = {
        '{': '}',
        '[': ']',
        '(': ')',
    };

    const stack = [];

    for (let i = 0; i < s.length; i++) {
        if (Object.keys(obj).includes(s[i])) {
            stack.push(s[i]);
        } else if (s[i] === obj[stack[stack.length - 1]]) {
            stack.pop();
        } else {
            return false;
        }
    }

    return stack.length === 0;
};
