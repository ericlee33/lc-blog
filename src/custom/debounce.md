---
title: debounce
---
```js
/* 
    immediate
    true: "第一次回调立即触发，停止wait秒后才能再触发",
    false: "第一次回调wait秒后触发，触发后停止wait秒后才能再触发"
*/
function debounce(fn, delay, immediate = false) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        if (immediate) {
            if (!timer) fn.apply(this, args);
            timer = setTimeout(() => (timer = null), delay);
        } else {
            timer = setTimeout(fn.bind(this, args), delay);
        }
    };
}

const newTrigger = debounce(trigger, 500, false);

function trigger() {}
```
