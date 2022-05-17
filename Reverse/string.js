// function revString(str) {
//     var newString = "";
//     for (var i = str.length - 1; 1 >= 0; i--) {
//         newString = newString + str[i]
//     }
//     return newString;
// }
// let result = revString("Akshay")
// console.log(result)

let reverseString = (str) =>{
    let arr = str.split("");
    arr.reverse();
    str = arr.join("");
    console.log(str)
}

reverseString("Apple")

/* Solution
step 1 => Convert in to Array
step 2 => lopp through each other
step 3 => return the reverse
*/

