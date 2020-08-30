function f1(a) {
    console.log(a)
    return a
}
function f2(a) {
    console.log(a)
    return a
}
function f3(a) {
    console.log(a)
    return a
}

// f1(1)
// f2(2)
// f3(3)

function compose(...func) {
    return func.reduce((a,b) =>(...arr) => a(b(...arr)))
}

let res = compose(f1,f2,f3)(1)