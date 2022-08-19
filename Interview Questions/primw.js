const array = [-5, -3, -2, -1, ...Array(20).keys()]; 
// console.log(array)
// Array(20).keys() generates numbers from 0 to 19.

// function isPrime(num) {
//   for (let start = 2; num > start; start++) {
//     if (num % start == 0) {
//       return false;
//     }
//   }
//   return num > 1;
// }

// console.log(array.filter(isPrime))

function isPrime(num){
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false
        }
    }
    return num > 1
}

console.log(array.filter(isPrime))