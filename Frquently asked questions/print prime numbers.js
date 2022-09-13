for (let j = 0; j <= 50; j++) {
    var notPrime = false;

    for (var i = 2; i <= j; i++) {
        if (j % i === 0 && i !== j) {
            notPrime = true
        }
    }
    if(notPrime === false){
        console.log(j)
    }

}


// console.log(Array(20))
// console.log(...Array(20).keys())

const array = [-7,-5,-8,-9,...Array(50).keys()]

function isPrime(num){
    for (let i = 2;   num > i; i++) {
        console.log(num)
        if (num % i == 0) {
            return false
        }
        
    }
    return num > 1
}

console.log(array.filter(isPrime))



































