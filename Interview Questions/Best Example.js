// Write a function that would allow you to call a function like this 

// function functionName(para1)(para2)

function multiply(a){
    return function (b){
        return a*b
    }
}
console.log(multiply(4)(4))