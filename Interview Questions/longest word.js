var array = ["Akshay","Nejej","JAvascript" ,"full Stack Developer"]

// function maxLength(str){
//     var word = str.split(" ");
//     var longestWord = "";

//     for (let i = 0; i < word.length; i++) {
//        if (word[i].length > longestWord) {
//         longestWord = word[i].length
//        }
        
//     }
//     return longestWord
// }
function maxLength(array){
    var lgword = "";
    array.forEach(element => {
        if (element.length > lgword.length) {
           return lgword = element
        }
    });
    return lgword
}

console.log(maxLength(array))