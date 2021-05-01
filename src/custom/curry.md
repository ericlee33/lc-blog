---
title: curry
---
```js
/**
 * 如果当前参数数量 >= fn要求的参数，则执行，否则不执行
 */
function curry(fn, ...args1) {
    /**
     * 注意是 >=
     */
    return fn.length >= args1.length
        ? fn.call(this, ...args1)
        : (...args2) => curry(fn, ...args1, ...args2);
}

function add(a, b, c) {
    return a + b + c;
}

const curriedAdd = curry(add);

const foo = curriedAdd(1)(2)(3);
console.log(foo);
```
