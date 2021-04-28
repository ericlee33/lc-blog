/**
 *
 * @param  {...any} args 接受多个函数
 */
function compose(...args) {
    return (...params) => {
        let res = args.pop()(...params);
        while (args.length) {
            res = args.pop()(res);
        }
        return res;
    };
}

function a(p) {
    return p + 1;
}
function b(p) {
    return p * 2;
}
console.log(compose(a, b)(3));
