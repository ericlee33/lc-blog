---
title: bind实现
---
```js
Function.prototype.myBind = function(ctx, ...args) {
    return (...extraArgs) => {
        this.apply(ctx, [...args, ...extraArgs])
    }
}

function a(name, age) {
    console.log(name)
    console.log(age)
    console.log(this.b)
}
const obj = {
    b: 1,
}

const afterBinding = a.myBind(obj, 'a')
afterBinding(2)
```
