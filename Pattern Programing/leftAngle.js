// let n = 5;

// let str = "";


// for (let row = 1; row <= n; row++) {

//     for (let space = 0; space < n - row; space++) {
//         str += " "
//     }

//     for (let column = 0; column < row; column++) {
//         str += "*"
//     }
//     str += '\n'
// }


// console.log(str);



// Downward Triangle Star Pattern
let n = 5;

let str = "";


for (let row = 1; row <= n; row++) {

    for (let column = 0; column <= n-row; column++) {
        str += "*"
    }

    str += '\n'
}


console.log(str);



