// let arr = [22, 34, 565, 78, 87, 34, 3, 45]

// let max = arr[0];
// let min = arr[0]

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i]>=max) {
//         max = arr[i];
//     }
//     if (arr[i]<=min) {
//         min = arr[i];
//     }
// }
// console.log(max)
// console.log(min)

let numbersArray = [7,3,52,65,7,8]
console.log(numbersArray)


let sortedArray = numbersArray.sort((a,b)=>{return a-b})
console.log(sortedArray)


let arrayLenght = sortedArray.length
console.log(arrayLenght)


let secMax = sortedArray[arrayLenght - 2]
console.log(secMax)

let secMax2 = sortedArray[arrayLenght - 2]
console.log(secMax2)