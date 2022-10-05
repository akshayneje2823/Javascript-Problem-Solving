
let str = ""

for (let i = 1; i < 4; i++) {
    for (let j = i; j >= 1; j--) {
        str = str + " " + j
    }
    str = str  + '\n'
}
console.log(str)