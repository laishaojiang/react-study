export default function createStore(reducer, enhancer) {
    if(enhancer) {
        // 增强createStore的dispatch
        return enhancer(createStore)(reducer)
    }

    let state
    let listeners = []
    function getState() {
        return state
    }

    function dispatch(action) {
        state = reducer(state, action)
        listeners.forEach(cb => {
            cb()
        });
    }

    function subscribe(cb) {
        listeners.push(cb)
    }

    dispatch({type:'12312312'})
    return {
        getState,
        dispatch,
        subscribe
    }
}