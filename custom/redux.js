
/**
 * 判断传进来的对象是不是平面对象 {} or new Object()
 * @param {*} obj
 */
 function isPlainObject(obj) {
    if (typeof obj !== 'object' || obj === null) return false;
    let proto = obj;
    while (Object.getPrototypeOf(proto) !== null) {
        proto = Object.getPrototypeOf(proto);
    }
    return Object.getPrototypeOf(obj) === proto;
}

/**
 * 创建仓库
 * @param {*} reducer 接收旧的 state 和 action，返回新的 state
 * @param {*} initState 初始化 state
 */
function createStore(reducer, initState, enhancer) {
    //如果传入了中间件函数，使用中间件增强createStore方法
    if (typeof enhancer === 'function') return enhancer(createStore)(reducer)

    let currentReducer = reducer
    let currentState = initState
    let listeners = []

    const dispatch = action => {
        if (!isPlainObject(action)) throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
        if (typeof action.type === 'undefined') throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
        currentState = currentReducer(currentState, action)
    }

    const getState = () => currentState

    const subscribe = listener => {
        listeners.push(listener)
        return unsubscribe = () => {
            const index = listeners.indexOf(listener)
            listeners.splice(index, 1)
        }
    }

    return {
        dispatch,
        getState,
        subscribe
    }
}

/**
 * 把一个由多个不同 reducer 函数作为 value 的 object，合并成一个最终的 reducer 函数
 * @param {*} reducers 一个由多个reducer组成的对象
 */
function combineReducers(reducers) {
    //最终reducer函数
    return function (state = {}, action) {
        let res = {}
        for (let reducer in reducers) {
            res[reducer] = reducers[reducer](state[reducer], action)
        }
        //最终state合并对象
        return res
    }
}

/**
 * 将多个action创建函数 封装成一个对象返回，调用该对象对应属性后自动dispatch
 * @param {*} actionCreators
 * @param {*} dispatch
 */
function bindActionCreator(actionCreators, dispatch) {
    if (typeof actionCreators === "function") return (...args) => dispatch(actionCreators(...args))
    else if (typeof actionCreators === "object") {
        let res = {};
        for (let key in actionCreators) {
            if (typeof actionCreators[key] === "function") {
                res[key] = (...args) => dispatch(actionCreators[key](...args));
            }
        }
        return res;
    }
}


function compose(...funcs) {
    return funcs.reduce((a, b) => (...args) => a(b(...args)));
}

function applyMiddleware(...middlewares) {
    return (createStore) => (reducer, preloadedState, enhancer) => {
        const store = createStore(reducer, preloadedState, enhancer)
        let dispatch = store.dispatch
        let chain = []

        const middlewareAPI = {
            getState: store.getState,
            dispatch: (action) => dispatch(action)
        }
        chain = middlewares.map(middleware => middleware(middlewareAPI))
        dispatch = compose(...chain)(store.dispatch)

        return {...store,dispatch}
    }
}

//Redux最简示例
const reducer = (currentState = 0, action) => {
    switch (action.type) {
        case "increase":
            return currentState + 1
        case "decrease":
            return currentState - 1
        default:
            return currentState
    }
}

const store = createStore(reducer)
store.subscribe(() => {
    console.log(`新状态容器：${store.getState()}`)
})
const action = {type: "increase"}

console.log(store.getState()) //0
store.dispatch(action) //新状态容器：1
console.log(store.getState()) //1
store.dispatch(action) //新状态容器：2
console.log(store.getState()) //2