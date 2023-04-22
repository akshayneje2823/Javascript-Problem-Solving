let n = 5;

let str = "";


for (let row = 1; row <= n; row++) {

    for (let column = 1; column <= row; column++) {
        str += "*"
    }
    str += '\n'
}


console.log(str)