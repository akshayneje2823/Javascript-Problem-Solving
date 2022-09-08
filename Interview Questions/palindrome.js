// // var string = "madam";
// var string = "Number";

// function checkPalindrome(string) {
//     var ans;
//     var length = string.length;
//     for (let i = 0; i < length % 2; i++) {


//         if (string[i] != string[length - 1 - i]) {

//             ans = string + " is not palindrome"
//         } else {
//             ans = string + " is palindrome";

//         }
//         return ans

//     }
// }
// console.log(checkPalindrome(string))

// with Number
// let num = 6635366;

function isPalindrome(x) {
    let msg;
    let reverse = x.toString().split('').reverse().join('');
    if (x.toString() === reverse) {
        msg = x + " is Palindrome number"
    } else {
        msg = x + " is not Palindrome number"
    }
    return msg
}
console.log(isPalindrome(num))

// let number = 99;

// function isPal(x) {
//     var reveredStr = '';
//     var xStr = x.toString();
//     var ans;
//     for (let i of xStr) {
//         reveredStr = i + reveredStr
//     }
//     if (reveredStr === xStr) {
//         ans = x + " Is A Palindrome Number."
//     } else {
//         ans = x + " Is Not A Palindrome Number."
//     }
//     return ans;
// };

// console.log(isPal(number))


