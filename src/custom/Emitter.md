---
title: Emitter
---
```js
class MyEventEmitter {
    _event = {};

    on(name, cb) {
        this._event[name]
            ? (this._event[name] = [...this._event[name], cb])
            : (this._event[name] = [cb]);
    }

    emit(name, ...args) {
        this._event[name].forEach(cb => cb.apply(this, args));
    }

    off(name, cb) {
        if(cb) {
            this._event[name]?.filter(v => v !== cb)
        } 
        if(!cb || !this._event[name].length) delete this._event[name]
    }

    once(name, cb) {
        this.on(name, (...args) => {
            cb(...args)
            this.off(name)
        })
    }
}

const rss = new MyEventEmitter();

rss.on('abc', name => {
    console.log(name);
});

rss.emit('abc', 1);
```
