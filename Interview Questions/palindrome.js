var string = "NaN";
// var string = "Number";

function checkPalindrome(string){
    var msg;
    var length = string.length;
    for (let i = 0; i < length % 2; i++) {
        
        if (string[i] != string[length -1 - i]) {
            msg = string + " is not palindrome"
        }else{
            msg = string + " is palindrome";
            
        }
        return msg
    
    }
}
console.log(checkPalindrome(string))