// How to remove duplictes from array

let array = [1, 2, 3, 4, 1, 2, 3, 7, 8, 9, 6, 5, 5, 5]

function removeDuplictaes(array) {
    var unique = [];
    for (let i = 0; i < array.length; i++) {
        if (unique.indexOf(array[i]) === -1) {
            unique.push(array[i])
        }
    }
    return unique
}
const newArray = removeDuplictaes(array)
console.log(newArray)

//  Using es 6
var arr =  ["apple", "mango", "apple","orange", "mango", "mango"];

var array2 = [...new Set(arr)]
console.log(array2)

// Using forEach MEthod

var array3 = ["apple", "mango", "apple","orange", "mango", "mango"]

function removeDuplictaes(ar){
    var unique = [];
    ar.forEach(element => {
        if (!unique.includes(element)) {
            unique.push(element)
        }
    });
    return unique
}
console.log(removeDuplictaes(array3))

// using reduce method

var array4 = ["apple", "mango", "apple","orange", "mango", "mango"]

function removeDuplictaes(ar){
    var unique = ar.reduce(function (acc,curr){
        // if(!acc.includes(curr)){
        //     console.log(acc)
        //     acc.push(curr)
        // }
        // console.log(acc);
        // console.log(curr);
        console.log(curr)
        console.log(acc)
        return acc
     
    },[]);

    return unique
}
console.log(removeDuplictaes(array4))