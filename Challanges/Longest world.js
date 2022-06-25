 function longestWord(str){
    // Step 1 ==> Split
    let words = str.split(" ");
    // console.log(words)

    // for longestword
    let lgWord = '';

    // loop throw words for finding longest word and return longest word
    for (let word of words) {
        if(word.lenght > lgWord.length){
           lgWord = word ;
        }
    }
    return lgWord
 }

console.log(longestWord("I woke up early today"));
console.log(longestWord("I went to straight to the beach"));
