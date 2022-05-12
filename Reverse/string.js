function revString(str) {
    var newString = "";
    for (var i = str.length - 1; 1 >= 0; i--) {
        newString = newString + str[i]
    }
    return newString;
}
let result = revString("Akshay")
console.log(result)