

function onlyNumbers(arr){
    return arr.filter(arr => typeof arr === "number")
}

console.log(onlyNumbers(["thirty",43,"nine","string",98]))