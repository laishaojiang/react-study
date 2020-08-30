// import {createStore, applyMiddleware, combineReducers } from 'redux'
import {createStore, applyMiddleware } from '../my-redux'
// import thunk from 'redux-thunk'

function count(state = 0, action) {
    switch(action.type){
        case "ADD" :
            return state +action.playload
        default:
            return state
        
    }
}

console.log(combineReducers({count}))
const store = createStore(combineReducers({count}), applyMiddleware(thunk))
// const store = createStore(reducer)

export default store
// store.dispatch(() => {
//     setTimeout(() => {
//         store.dispatch({type:'ADD', playload: 1})
//     }, 1000)
// })
function thunk({getState, dispatch}) {
    return next => action => {
        if(typeof action === 'function') {
            return action({getState, dispatch})
        }
        return next(action)
    }
    
}

function combineReducers(reducers) {
    
    // 暗号：多哥
    return function combineation(state ={}, action) {
        debugger
        let nextState = {}
        let hasChange = false
        for(let key in reducers) {
            const reducer = reducers[key]
            nextState[key] = reducer(state[key], action)
            hasChange = hasChange || state[key] !== nextState[key]
        }
        console.log(nextState)
        return hasChange ? nextState : state
    }
    
    
}