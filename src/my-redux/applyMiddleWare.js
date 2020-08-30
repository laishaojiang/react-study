export default function applyMiddleWare(...middleWares) {
    return createStore => reducer => {
        // 返回store 加强dispatch
        const store = createStore(reducer)
        let dispatch = store.dispatch
        const midApi = {
            getState: store.getState,
            dispatch: action => dispatch(action)
        }
        const middleWareChin = middleWares.map(middleware => middleware(midApi))

        dispatch = compose(...middleWareChin)(store.dispatch)
        
        return {
            ...store,
            dispatch
        }
    }
    
}

function compose(...func) {
    return func.reduce((a,b) =>(...arr) => a(b(...arr)))
}